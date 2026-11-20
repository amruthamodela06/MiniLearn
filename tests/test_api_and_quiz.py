"""
Unit and integration tests for MiniLearn QuizEngine (SM-2 spaced repetition & grading)
and Companion Flask REST API endpoints (/api/health, /api/tracks, /api/search, /api/quiz).
"""

from pathlib import Path
import unittest

from backend.app import create_app
from backend.quiz_engine import QuizEngine


ROOT_DIR = Path(__file__).resolve().parent.parent


class TestQuizEngineAndFlaskAPI(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.engine = QuizEngine(ROOT_DIR / "data" / "quizzes.json")
        cls.app = create_app(ROOT_DIR)
        cls.client = cls.app.test_client()

    def test_quiz_filtering_and_grading(self) -> None:
        dsa_qs = self.engine.list_questions(track="dsa")
        self.assertGreaterEqual(len(dsa_qs), 2)

        report = self.engine.grade_submission({"dsa-01": 1, "python-01": 1, "go-01": 1})
        self.assertEqual(report["total_answered"], 3)
        self.assertEqual(report["correct"], 3)
        self.assertEqual(report["accuracy"], 1.0)
        self.assertTrue(report["passed"])

    def test_sm2_spaced_repetition_schedule(self) -> None:
        s1 = self.engine.compute_sm2_schedule(quality=5, repetitions=0, previous_interval=1)
        self.assertEqual(s1["next_interval_days"], 1)
        self.assertEqual(s1["repetitions"], 1)

        s2 = self.engine.compute_sm2_schedule(quality=5, repetitions=1, previous_interval=1)
        self.assertEqual(s2["next_interval_days"], 6)

        failed = self.engine.compute_sm2_schedule(quality=1, repetitions=4, previous_interval=15)
        self.assertEqual(failed["next_interval_days"], 1)
        self.assertEqual(failed["repetitions"], 0)

    def test_flask_api_endpoints(self) -> None:
        resp_health = self.client.get("/api/health")
        self.assertEqual(resp_health.status_code, 200)
        self.assertEqual(resp_health.get_json()["status"], "ok")

        resp_tracks = self.client.get("/api/tracks")
        self.assertEqual(resp_tracks.status_code, 200)
        self.assertIn("dsa", resp_tracks.get_json()["tracks"])

        resp_search = self.client.get("/api/search?q=Goroutines&track=go")
        self.assertEqual(resp_search.status_code, 200)
        self.assertGreaterEqual(resp_search.get_json()["count"], 1)

        resp_submit = self.client.post("/api/quiz/submit", json={"answers": {"dsa-01": 1}})
        self.assertEqual(resp_submit.status_code, 200)
        self.assertTrue(resp_submit.get_json()["passed"])


if __name__ == "__main__":
    unittest.main()
