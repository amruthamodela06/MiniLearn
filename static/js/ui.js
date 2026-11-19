/**
 * MiniLearn Interactive UI Controller
 * - Persistent Dark / Light Pastel Theme Toggle
 * - Scroll Reading Progress Indicator
 * - One-Click Copy Buttons on Code Blocks
 * - Automatic Lesson Reading Time Estimator
 * - Inline Self-Check Quiz Evaluator
 */

(function () {
  "use strict";

  const THEME_KEY = "minilearn_theme_mode";

  function initDarkMode() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark") {
      document.body.classList.add("dark-mode");
    }

    let toggleBtn = document.getElementById("dark-toggle");
    if (!toggleBtn) {
      toggleBtn = document.createElement("button");
      toggleBtn.id = "dark-toggle";
      toggleBtn.type = "button";
      toggleBtn.setAttribute("aria-label", "Toggle Dark Mode");
      document.body.appendChild(toggleBtn);
    }

    function updateLabel() {
      const isDark = document.body.classList.contains("dark-mode");
      toggleBtn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
    }

    updateLabel();
    toggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
      updateLabel();
    });
  }

  function initReadingProgressBar() {
    let bar = document.getElementById("ml-reading-progress");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "ml-reading-progress";
      document.body.prepend(bar);
    }
    window.addEventListener("scroll", function () {
      const docEl = document.documentElement;
      const scrollTop = docEl.scrollTop || document.body.scrollTop;
      const scrollHeight = docEl.scrollHeight - docEl.clientHeight;
      const pct = scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0;
      bar.style.width = pct.toFixed(1) + "%";
    });
  }

  function initCodeCopyButtons() {
    const blocks = document.querySelectorAll("pre");
    blocks.forEach(function (pre) {
      if (pre.querySelector(".ml-copy-btn")) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ml-copy-btn";
      btn.textContent = "Copy";
      btn.addEventListener("click", function () {
        const codeEl = pre.querySelector("code");
        const raw = codeEl ? codeEl.innerText : pre.innerText;
        navigator.clipboard.writeText(raw).then(function () {
          btn.textContent = "Copied ✓";
          setTimeout(function () {
            btn.textContent = "Copy";
          }, 1600);
        });
      });
      pre.appendChild(btn);
    });
  }

  function initReadingTime() {
    const badge = document.getElementById("ml-reading-time");
    const content = document.getElementById("body-inner");
    if (!badge || !content) return;
    const words = (content.innerText || "").trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 180));
    badge.textContent = "⏱️ " + minutes + " min read (" + words + " words)";
  }

  function initInlineQuizzes() {
    document.querySelectorAll(".ml-quiz-box").forEach(function (box) {
      const correctIdx = parseInt(box.getAttribute("data-answer") || "0", 10);
      const explanation = box.getAttribute("data-explanation") || "";
      const options = box.querySelectorAll(".ml-quiz-option");
      const feedback = box.querySelector(".ml-quiz-feedback");

      options.forEach(function (btn, idx) {
        btn.addEventListener("click", function () {
          options.forEach(function (b) {
            b.classList.remove("correct", "wrong");
          });
          if (idx === correctIdx) {
            btn.classList.add("correct");
            if (feedback) {
              feedback.textContent = "✅ Correct! " + explanation;
              feedback.style.color = "#10b981";
            }
          } else {
            btn.classList.add("wrong");
            if (options[correctIdx]) options[correctIdx].classList.add("correct");
            if (feedback) {
              feedback.textContent = "❌ Not quite. " + explanation;
              feedback.style.color = "#ef4444";
            }
          }
        });
      });
    });
  }

  function initKeyboardShortcuts() {
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
        const searchInput = document.querySelector("#search-by");
        if (searchInput) {
          e.preventDefault();
          searchInput.focus();
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initDarkMode();
    initReadingProgressBar();
    initCodeCopyButtons();
    initReadingTime();
    initInlineQuizzes();
    initKeyboardShortcuts();
  });
})();
