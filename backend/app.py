"""
MiniLearn Companion Flask API Server.
Provides REST endpoints for full-text curriculum search, track statistics,
interactive quiz retrieval, submission grading, and SM-2 spaced repetition scheduling.
"""

from pathlib import Path
from flask import Flask, jsonify, request

from .indexer import ContentIndexer
from .quiz_engine import QuizEngine


def create_app(root_dir: Path | None = None) -> Flask:
    base_dir = root_dir or Path(__file__).resolve().parent.parent
    app = Flask(__name__)

    indexer = ContentIndexer(base_dir / "content")
    quiz_engine = QuizEngine(base_dir / "data" / "quizzes.json")

    @app.get("/api/health")
    def health():
        return jsonify({
            "status": "ok",
            "service": "MiniLearn Companion API",
            "indexed_documents": len(indexer.documents),
            "quiz_questions": len(quiz_engine.questions),
        })

    @app.get("/api/tracks")
    def tracks():
        return jsonify({
            "tracks": indexer.get_track_summary(),
            "total_documents": len(indexer.documents),
        })

    @app.get("/api/search")
    def search():
        q = request.args.get("q", "")
        track = request.args.get("track")
        limit = int(request.args.get("limit", "20"))
        results = indexer.search(query=q, track=track, limit=limit)
        return jsonify({"query": q, "count": len(results), "results": results})

    @app.get("/api/quiz")
    def get_quiz():
        track = request.args.get("track")
        difficulty = request.args.get("difficulty")
        items = quiz_engine.list_questions(track=track, difficulty=difficulty)
        return jsonify({"count": len(items), "questions": items})

    @app.post("/api/quiz/submit")
    def submit_quiz():
        payload = request.get_json(silent=True) or {}
        answers = payload.get("answers", {})
        if not isinstance(answers, dict):
            return jsonify({"error": "'answers' must be an object mapping question_id to option index"}), 400
        report = quiz_engine.grade_submission(answers)
        return jsonify(report)

    @app.post("/api/quiz/sm2")
    def schedule_sm2():
        payload = request.get_json(silent=True) or {}
        schedule = quiz_engine.compute_sm2_schedule(
            quality=int(payload.get("quality", 4)),
            repetitions=int(payload.get("repetitions", 0)),
            previous_interval=int(payload.get("previous_interval", 1)),
            easiness_factor=float(payload.get("easiness_factor", 2.5)),
        )
        return jsonify(schedule)

    return app


app = create_app()

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)
