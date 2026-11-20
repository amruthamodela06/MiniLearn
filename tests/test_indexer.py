"""
Unit tests for MiniLearn ContentIndexer and curriculum completeness validation.
Uses Python's built-in unittest framework for zero-dependency test execution.
"""

from pathlib import Path
import unittest

from backend.indexer import ContentIndexer
from scripts.validate_content import validate_repository_content


ROOT_DIR = Path(__file__).resolve().parent.parent


class TestContentIndexer(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.indexer = ContentIndexer(ROOT_DIR / "content")

    def test_indexes_all_tracks(self) -> None:
        self.assertGreaterEqual(len(self.indexer.documents), 160)
        summary = self.indexer.get_track_summary()
        for expected_track in ("dsa", "python", "c", "cpp", "java", "go", "cheatsheets", "interview-prep"):
            self.assertIn(expected_track, summary)
            self.assertGreaterEqual(summary[expected_track]["lessons"], 1)

    def test_search_ranking_and_track_filtering(self) -> None:
        results = self.indexer.search("Knapsack", track="dsa")
        self.assertGreaterEqual(len(results), 1)
        self.assertEqual(results[0]["track"], "dsa")
        self.assertIn("Knapsack", results[0]["title"])

    def test_zero_leftover_coming_soon_stubs(self) -> None:
        ok, errors = validate_repository_content(ROOT_DIR / "content")
        self.assertTrue(ok, f"Content validation failed: {errors}")


if __name__ == "__main__":
    unittest.main()
