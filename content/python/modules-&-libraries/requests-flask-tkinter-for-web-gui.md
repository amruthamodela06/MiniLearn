+++
title = "requests, flask, tkinter (for web/GUI)"
weight = 4
+++

{{< complexity time="HTTP & Event Loops" space="WSGI / Tk Mainloop" level="Intermediate" >}}

## HTTP Clients (`requests`) & REST Microservices (`Flask`)

```python
from flask import Flask, jsonify, request

app = Flask(__name__)


@app.get("/api/health")
def health_check():
    return jsonify({"status": "ok", "service": "MiniLearn API"})


@app.post("/api/evaluate")
def evaluate_submission():
    payload = request.get_json(silent=True) or {}
    score = int(payload.get("correct", 0)) / max(1, int(payload.get("total", 1)))
    return jsonify({"accuracy": round(score, 4), "passed": score >= 0.7})
```
