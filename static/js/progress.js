/**
 * MiniLearn Client-Side Course Progress & Study Streak Tracker
 * Stores completed lesson paths and daily study timestamps in localStorage.
 */

(function () {
  "use strict";

  const PROGRESS_KEY = "minilearn_completed_lessons_v1";
  const STREAK_KEY = "minilearn_study_streak_v1";
  const TOTAL_LESSONS_ESTIMATE = 120;

  function getCompletedSet() {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(arr) ? arr : []);
    } catch (e) {
      return new Set();
    }
  }

  function saveCompletedSet(set) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(Array.from(set)));
    } catch (e) {
      // ignore storage errors
    }
  }

  function updateStreak() {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const raw = localStorage.getItem(STREAK_KEY);
      const data = raw ? JSON.parse(raw) : { count: 0, lastDate: "" };

      if (data.lastDate === today) {
        return data.count;
      }

      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (data.lastDate === yesterday) {
        data.count += 1;
      } else {
        data.count = 1;
      }
      data.lastDate = today;
      localStorage.setItem(STREAK_KEY, JSON.stringify(data));
      return data.count;
    } catch (e) {
      return 1;
    }
  }

  function getStreakCount() {
    try {
      const raw = localStorage.getItem(STREAK_KEY);
      const data = raw ? JSON.parse(raw) : { count: 0 };
      return data.count || 0;
    } catch (e) {
      return 0;
    }
  }

  function normalizePath(path) {
    return (path || window.location.pathname).replace(/\/+$/, "") || "/";
  }

  function initLessonCompletionButton() {
    const btn = document.getElementById("ml-complete-toggle");
    if (!btn) return;

    const currentPath = normalizePath();
    const completed = getCompletedSet();

    function renderButton() {
      const isDone = completed.has(currentPath);
      btn.classList.toggle("completed", isDone);
      btn.textContent = isDone ? "✓ Completed Lesson" : "○ Mark as Completed";
    }

    renderButton();
    btn.addEventListener("click", function () {
      if (completed.has(currentPath)) {
        completed.delete(currentPath);
      } else {
        completed.add(currentPath);
        updateStreak();
      }
      saveCompletedSet(completed);
      renderButton();
      renderGlobalProgressDashboard();
    });
  }

  function renderGlobalProgressDashboard() {
    const completed = getCompletedSet();
    const count = completed.size;
    const pct = Math.min(100, Math.round((count / TOTAL_LESSONS_ESTIMATE) * 100));
    const streak = getStreakCount();

    const countEl = document.getElementById("ml-completed-count");
    const pctEl = document.getElementById("ml-completed-pct");
    const fillEl = document.getElementById("ml-progress-bar-fill");
    const streakEl = document.getElementById("ml-streak-badge");

    if (countEl) countEl.textContent = String(count);
    if (pctEl) pctEl.textContent = pct + "%";
    if (fillEl) fillEl.style.width = pct + "%";
    if (streakEl) streakEl.textContent = "🔥 " + streak + " day streak";
  }

  window.MiniLearnProgress = {
    getCompletedSet: getCompletedSet,
    renderGlobalProgressDashboard: renderGlobalProgressDashboard,
  };

  document.addEventListener("DOMContentLoaded", function () {
    initLessonCompletionButton();
    renderGlobalProgressDashboard();
  });
})();
