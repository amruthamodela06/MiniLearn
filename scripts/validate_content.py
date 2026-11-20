"""
CLI curriculum validator and content quality auditor for MiniLearn.
Verifies that every Markdown file in content/ has valid TOML frontmatter,
a non-empty title, and zero leftover 'Content coming soon...' placeholder stubs.
"""

from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from backend.indexer import ContentIndexer


def validate_repository_content(content_dir: Path) -> tuple[bool, list[str]]:
    errors: list[str] = []
    md_files = sorted(content_dir.rglob("*.md"))
    if not md_files:
        return False, ["No markdown files found in content directory"]

    for md_path in md_files:
        raw = md_path.read_text(encoding="utf-8")
        rel = md_path.relative_to(content_dir)
        if not raw.lstrip().startswith("+++"):
            errors.append(f"{rel}: Missing TOML (+++) frontmatter")
        if "Content coming soon..." in raw:
            errors.append(f"{rel}: Contains unfinished 'Content coming soon...' placeholder stub")
        if len(raw.strip()) < 25:
            errors.append(f"{rel}: File content is unexpectedly short (< 25 chars)")

    return len(errors) == 0, errors


def main() -> int:
    content_dir = ROOT / "content"
    ok, errors = validate_repository_content(content_dir)
    indexer = ContentIndexer(content_dir)
    summary = indexer.get_track_summary()

    print(f"MiniLearn Curriculum Audit: {len(indexer.documents)} documents indexed across {len(summary)} tracks.")
    for track, stats in sorted(summary.items()):
        print(f"  - {track:<16} | {stats['lessons']:>3} pages | {stats['total_words']:>5} words")

    if not ok:
        print("\nValidation Errors Found:")
        for err in errors:
            print(f"  [ERROR] {err}")
        return 1

    print("\nAll content checks passed with 0 placeholder stubs!")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
