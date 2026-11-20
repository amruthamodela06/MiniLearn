"""
Markdown curriculum indexer and full-text search engine for MiniLearn Hugo content.
Parses TOML (+++) and YAML (---) frontmatter, computes word counts and reading times,
and provides ranked keyword search across all course tracks.
"""

from dataclasses import dataclass, asdict
from pathlib import Path
import re
from typing import List, Dict, Any, Optional


FRONTMATTER_TOML_RE = re.compile(r"^\+\+\+\s*\n(.*?)\n\+\+\+\s*\n?", re.DOTALL)
TITLE_LINE_RE = re.compile(r'^title\s*=\s*["\'](.+?)["\']', re.MULTILINE)
WEIGHT_LINE_RE = re.compile(r"^weight\s*=\s*(\d+)", re.MULTILINE)


@dataclass
class LessonDocument:
    url: str
    track: str
    title: str
    weight: int
    word_count: int
    reading_time_min: int
    snippet: str
    file_path: str

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


class ContentIndexer:
    """Scans a Hugo content/ directory and indexes all lessons for search and analytics."""

    def __init__(self, content_dir: str | Path = "content"):
        self.content_dir = Path(content_dir)
        self.documents: List[LessonDocument] = []
        if self.content_dir.exists():
            self.refresh()

    def refresh(self) -> int:
        docs: List[LessonDocument] = []
        for md_path in sorted(self.content_dir.rglob("*.md")):
            doc = self._parse_markdown_file(md_path)
            if doc is not None:
                docs.append(doc)
        self.documents = docs
        return len(self.documents)

    def _parse_markdown_file(self, md_path: Path) -> Optional[LessonDocument]:
        try:
            raw = md_path.read_text(encoding="utf-8")
        except Exception:
            return None

        title = md_path.stem.replace("-", " ").title()
        weight = 0
        body = raw

        m_fm = FRONTMATTER_TOML_RE.match(raw)
        if m_fm:
            fm_block = m_fm.group(1)
            body = raw[m_fm.end():]
            m_title = TITLE_LINE_RE.search(fm_block)
            if m_title:
                title = m_title.group(1).strip()
            m_weight = WEIGHT_LINE_RE.search(fm_block)
            if m_weight:
                weight = int(m_weight.group(1))

        rel = md_path.relative_to(self.content_dir)
        parts = rel.parts
        track = parts[0] if len(parts) > 1 else "home"

        if md_path.name == "_index.md":
            url_parts = parts[:-1]
        else:
            url_parts = (*parts[:-1], md_path.stem)
        url = "/" + "/".join(url_parts).strip("/") + ("/" if url_parts else "")

        clean_body = re.sub(r"\{\{<.*?>\}\}", " ", body)
        clean_body = re.sub(r"[#*`>\-\[\]]+", " ", clean_body)
        words = [w for w in clean_body.split() if w]
        word_count = len(words)
        reading_time_min = max(1, (word_count + 179) // 180)
        snippet = " ".join(words[:28])

        return LessonDocument(
            url=url,
            track=track,
            title=title,
            weight=weight,
            word_count=word_count,
            reading_time_min=reading_time_min,
            snippet=snippet,
            file_path=str(rel).replace("\\", "/"),
        )

    def search(self, query: str, track: Optional[str] = None, limit: int = 20) -> List[Dict[str, Any]]:
        q = (query or "").lower().strip()
        results: List[tuple[int, LessonDocument]] = []

        for doc in self.documents:
            if track and track != "all" and doc.track.lower() != track.lower():
                continue
            if not q:
                results.append((1, doc))
                continue

            score = 0
            if q in doc.title.lower():
                score += 10
            if q in doc.snippet.lower():
                score += 4
            if q in doc.url.lower():
                score += 3
            if score > 0:
                results.append((score, doc))

        results.sort(key=lambda item: (-item[0], item[1].track, item[1].weight))
        return [doc.to_dict() for _, doc in results[:limit]]

    def get_track_summary(self) -> Dict[str, Dict[str, int]]:
        summary: Dict[str, Dict[str, int]] = {}
        for doc in self.documents:
            info = summary.setdefault(doc.track, {"lessons": 0, "total_words": 0, "total_reading_min": 0})
            info["lessons"] += 1
            info["total_words"] += doc.word_count
            info["total_reading_min"] += doc.reading_time_min
        return summary
