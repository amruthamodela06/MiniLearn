# 🌸 MiniLearn — Interactive CS & Programming Micro-Learning Platform

**MiniLearn** is a fast, pastel-themed computer science and programming learning platform built with **Hugo** (`hugo-theme-learn`) and an optional **Python Flask Companion API**. It delivers bite-sized, interview-focused lessons across **Data Structures & Algorithms (DSA)**, **Python**, **C**, **C++ with STL**, **Java**, and **Go (Golang)**.

---

## ✨ Key Features

- **📚 6 Complete Programming & CS Tracks**:
  - **Data Structures & Algorithms (DSA)**: Asymptotic analysis, recursion, arrays, strings, linked lists, stacks, queues, hashing, trees (BST, AVL, Segment, Fenwick), tries, heaps, graphs (BFS, DFS, Topo Sort, DSU, MST), dynamic programming, greedy, bit manipulation, KMP/Z pattern matching, and number theory.
  - **Python Programming**: Core syntax, control flow, data structures, NumPy, OOP, decorators, generators, list comprehensions, regex, Pandas/Matplotlib, and Flask web development.
  - **C Programming**: Pointers, pointer arithmetic, function pointers, dynamic memory (`malloc`/`calloc`/`realloc`/`free`), structs, unions, and binary/text file I/O.
  - **C++ & Standard Template Library (STL)**: OOP, virtual functions & vtables, STL containers (`vector`, `map`, `set`, `priority_queue`), STL algorithms, templates, smart pointers (`unique_ptr`, `shared_ptr`), and lambdas.
  - **Java Development**: OOP pillars, Java Collections Framework (`ArrayList`, `HashMap`, `TreeMap`, `Deque`), `Comparable` vs `Comparator`, multithreading & synchronization, exception handling, File I/O, and Java 8+ Streams & `Optional`.
  - **Go (Golang)**: Go syntax, slices & maps, structs & interfaces, goroutines, channels, `select`, and idiomatic error handling with `defer`.
- **🎨 Pastel UI + Persistent Dark Mode**: Smooth pastel color palette with one-click dark/light theme persistence.
- **📈 Client-Side Progress & Streak Tracker**: Mark lessons as completed, track overall mastery percentage, and maintain daily study streaks via `localStorage`.
- **🧩 Custom Hugo Shortcodes**:
  - `{{</* complexity time="O(N log N)" space="O(N)" level="Medium" */>}}`
  - `{{</* callout type="tip" title="Interview Tip" */>}}...{{</* /callout */>}}`
  - `{{</* quiz question="..." options="A|B|C|D" answer="1" explanation="..." */>}}`

---

## 🚀 Quick Start

### 1. Run the Hugo Static Site

```bash
hugo server -D --port 1313
```

Open `http://localhost:1313` in your browser.

### 2. Run the Companion Flask API & Content Validator

```bash
python scripts/validate_content.py
python -m unittest discover -s tests
python -m backend.app
```

---

## 📂 Project Structure

```text
MiniLearn/
├── archetypes/             # Hugo content templates
├── backend/                # Flask companion API (search, quiz engine, indexer)
├── content/                # Markdown curriculum tracks (dsa, python, c, cpp, java, go)
├── data/                   # Structured quiz bank (quizzes.json)
├── layouts/                # Custom header/footer partials & interactive shortcodes
├── scripts/                # Curriculum validator & static search index builder
├── static/                 # Pastel & dark-mode CSS + interactive JS controllers
├── tests/                  # Python unit & integration tests
└── hugo.toml               # Hugo site configuration
```
