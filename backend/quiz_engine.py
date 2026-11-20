"""
Quiz grading and SuperMemo SM-2 spaced-repetition scheduler for MiniLearn.
"""

import json
from pathlib import Path
from typing import List, Dict, Any, Optional


class QuizEngine:
    """Loads structured questions from data/quizzes.json, evaluates submissions, and computes SM-2 intervals."""

    def __init__(self, quiz_path: str | Path = "data/quizzes.json"):
        self.quiz_path = Path(quiz_path)
        self.questions: List[Dict[str, Any]] = []
        self._load()

    def _load(self) -> None:
        if self.quiz_path.exists():
            with open(self.quiz_path, "r", encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, list):
                self.questions = data

    def list_questions(
        self,
        track: Optional[str] = None,
        difficulty: Optional[str] = None,
    ) -> List[Dict[str, Any]]:
        items = self.questions
        if track and track.lower() != "all":
            items = [q for q in items if q.get("track", "").lower() == track.lower()]
        if difficulty and difficulty.lower() != "all":
            items = [q for q in items if q.get("difficulty", "").lower() == difficulty.lower()]
        return items

    def grade_submission(self, answers: Dict[str, int]) -> Dict[str, Any]:
        """
        Grade a map of {question_id: selected_option_index} and return detailed per-question feedback.
        """
        by_id = {q["id"]: q for q in self.questions}
        total = 0
        correct = 0
        details: List[Dict[str, Any]] = []

        for qid, chosen_idx in answers.items():
            q = by_id.get(qid)
            if not q:
                continue
            total += 1
            expected = int(q["answer"])
            is_correct = int(chosen_idx) == expected
            if is_correct:
                correct += 1
            details.append({
                "id": qid,
                "track": q.get("track"),
                "chosen": int(chosen_idx),
                "correct_answer": expected,
                "is_correct": is_correct,
                "explanation": q.get("explanation", ""),
            })

        accuracy = (correct / total) if total > 0 else 0.0
        return {
            "total_answered": total,
            "correct": correct,
            "accuracy": round(accuracy, 4),
            "passed": accuracy >= 0.70,
            "details": details,
        }

    @staticmethod
    def compute_sm2_schedule(
        quality: int,
        repetitions: int = 0,
        previous_interval: int = 1,
        easiness_factor: float = 2.5,
    ) -> Dict[str, Any]:
        """
        SuperMemo SM-2 spaced repetition algorithm.
        quality: 0..5 recall rating (>= 3 is successful recall).
        """
        q = max(0, min(5, int(quality)))
        if q >= 3:
            if repetitions == 0:
                interval = 1
            elif repetitions == 1:
                interval = 6
            else:
                interval = round(previous_interval * easiness_factor)
            repetitions += 1
        else:
            repetitions = 0
            interval = 1

        new_ef = easiness_factor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
        new_ef = max(1.3, round(new_ef, 4))

        return {
            "next_interval_days": int(interval),
            "repetitions": repetitions,
            "easiness_factor": new_ef,
        }
