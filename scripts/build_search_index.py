"""
Static search index builder for MiniLearn.
Generates static/search-index.json from all Hugo Markdown lessons in content/.
"""

import json
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from backend.indexer import ContentIndexer


def build_static_search_index(output_path: Path | None = None) -> Path:
    target = output_path or (ROOT / "static" / "search-index.json")
    indexer = ContentIndexer(ROOT / "content")
    payload = [doc.to_dict() for doc in indexer.documents]
    target.parent.mkdir(parents=True, exist_ok=True)
    with open(target, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2)
    return target


if __name__ == "__main__":
    out = build_static_search_index()
    print(f"Generated static search index at {out}")
