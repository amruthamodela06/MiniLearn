/**
 * MiniLearn Interactive Practice Quiz Arena Controller
 * Renders multi-track questions with live filtering, scoring, and explanations.
 */

(function () {
  "use strict";

  const QUESTIONS = [
    {
      id: "dsa-01",
      track: "dsa",
      question: "What is the worst-case time complexity of searching for a key in a balanced AVL Tree with N nodes?",
      options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
      answer: 1,
      explanation: "An AVL tree maintains a strict height balance factor in {-1, 0, +1}, keeping tree height bounded by O(log N)."
    },
    {
      id: "dsa-02",
      track: "dsa",
      question: "Which data structure powers Kahn's topological sort algorithm on a Directed Acyclic Graph?",
      options: ["FIFO Queue tracking vertices with in-degree 0", "Max-Heap of edge weights", "Disjoint Set Union", "Prefix Trie"],
      answer: 0,
      explanation: "Kahn's algorithm enqueues all vertices with in-degree 0 and decrements neighbor in-degrees as vertices are dequeued."
    },
    {
      id: "python-01",
      track: "python",
      question: "Why is collections.deque preferred over a standard Python list for implementing a FIFO queue?",
      options: [
        "deque uses less syntax",
        "deque.popleft() runs in O(1) time whereas list.pop(0) shifts elements in O(N) time",
        "list cannot store heterogeneous types",
        "deque automatically sorts elements"
      ],
      answer: 1,
      explanation: "Removing index 0 of a contiguous list shifts N-1 pointers left in O(N), while deque unlinks its head block in O(1)."
    },
    {
      id: "c-01",
      track: "c",
      question: "How does calloc(n, size) differ from malloc(n * size) in C?",
      options: [
        "calloc allocates memory on the stack",
        "calloc zero-initializes all allocated bytes and checks for multiplication overflow",
        "calloc never returns NULL",
        "calloc does not require free()"
      ],
      answer: 1,
      explanation: "calloc checks for integer overflow in n * size and clears all allocated bytes to 0."
    },
    {
      id: "cpp-01",
      track: "cpp",
      question: "Which C++ smart pointer models exclusive resource ownership with zero memory overhead over a raw pointer?",
      options: ["std::shared_ptr", "std::unique_ptr", "std::weak_ptr", "std::auto_ptr"],
      answer: 1,
      explanation: "std::unique_ptr is move-only and has zero runtime overhead compared to a raw pointer."
    },
    {
      id: "java-01",
      track: "java",
      question: "In Java 8+, what happens when a HashMap bucket linked list grows beyond TREEIFY_THRESHOLD (8 nodes)?",
      options: [
        "It throws an OutOfMemoryError",
        "It converts the bucket into a balanced Red-Black Tree with O(log N) worst-case lookup",
        "It drops old keys",
        "It switches to open addressing"
      ],
      answer: 1,
      explanation: "Treeification bounds worst-case bucket search to O(log N)."
    },
    {
      id: "go-01",
      track: "go",
      question: "How does a struct type satisfy an interface in Go (Golang)?",
      options: [
        "Using the 'implements' keyword",
        "Implicitly, by defining all methods declared in the interface",
        "By extending a base interface class",
        "By registering with the runtime reflection table"
      ],
      answer: 1,
      explanation: "Go uses structural typing: any type that implements all methods of an interface satisfies it implicitly."
    }
  ];

  function initQuizArena() {
    const container = document.getElementById("ml-arena-questions");
    const filterEl = document.getElementById("ml-quiz-track-filter");
    const scoreEl = document.getElementById("ml-arena-score");
    const resetBtn = document.getElementById("ml-arena-reset");
    if (!container || !filterEl) return;

    let answered = {};
    let correctCount = 0;

    function updateScoreBadge(totalVisible) {
      if (scoreEl) {
        scoreEl.textContent = "Score: " + correctCount + " / " + totalVisible;
      }
    }

    function renderQuestions() {
      const track = filterEl.value;
      const visible = QUESTIONS.filter(function (q) {
        return track === "all" || q.track === track;
      });
      answered = {};
      correctCount = 0;
      updateScoreBadge(visible.length);

      container.innerHTML = visible
        .map(function (q, qIdx) {
          const optsHtml = q.options
            .map(function (opt, oIdx) {
              return (
                '<button type="button" class="ml-quiz-option" data-qid="' +
                q.id +
                '" data-oidx="' +
                oIdx +
                '">' +
                opt +
                "</button>"
              );
            })
            .join("");

          return (
            '<div class="ml-quiz-box" id="box-' +
            q.id +
            '" style="margin-bottom: 16px;">' +
            '<div class="ml-quiz-question">' +
            (qIdx + 1) +
            ". [" +
            q.track.toUpperCase() +
            "] " +
            q.question +
            "</div>" +
            '<div class="ml-quiz-options">' +
            optsHtml +
            "</div>" +
            '<div class="ml-quiz-feedback" id="fb-' +
            q.id +
            '"></div>' +
            "</div>"
          );
        })
        .join("");

      container.querySelectorAll(".ml-quiz-option").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const qid = btn.getAttribute("data-qid");
          const chosen = parseInt(btn.getAttribute("data-oidx") || "0", 10);
          if (answered[qid]) return;
          answered[qid] = true;

          const qObj = visible.find(function (item) {
            return item.id === qid;
          });
          if (!qObj) return;

          const box = document.getElementById("box-" + qid);
          const fb = document.getElementById("fb-" + qid);
          const allBtns = box.querySelectorAll(".ml-quiz-option");

          if (chosen === qObj.answer) {
            correctCount += 1;
            btn.classList.add("correct");
            if (fb) {
              fb.textContent = "✅ Correct! " + qObj.explanation;
              fb.style.color = "#10b981";
            }
          } else {
            btn.classList.add("wrong");
            if (allBtns[qObj.answer]) allBtns[qObj.answer].classList.add("correct");
            if (fb) {
              fb.textContent = "❌ Incorrect. " + qObj.explanation;
              fb.style.color = "#ef4444";
            }
          }
          updateScoreBadge(visible.length);
        });
      });
    }

    filterEl.addEventListener("change", renderQuestions);
    if (resetBtn) resetBtn.addEventListener("click", renderQuestions);
    renderQuestions();
  }

  document.addEventListener("DOMContentLoaded", initQuizArena);
})();
