/**
 * MiniLearn Instant Quick-Jump Command Palette (Ctrl+K)
 * Provides zero-latency keyboard navigation across all course tracks.
 */

(function () {
  "use strict";

  const QUICK_LINKS = [
    { title: "DSA: Time & Space Complexity", url: "/dsa/basic-concepts/time-&-space-complexity/", track: "DSA" },
    { title: "DSA: Sliding Window & Two Pointers", url: "/dsa/data-structures/sliding-window/", track: "DSA" },
    { title: "DSA: Dynamic Programming (Knapsack)", url: "/dsa/data-structures/dynamic-programming-knapsack/", track: "DSA" },
    { title: "DSA: Graphs (BFS, DFS, Topological Sort)", url: "/dsa/data-structures/graphs-topological-sort/", track: "DSA" },
    { title: "Python: Decorators & Generators", url: "/python/advanced-topics/decorators/", track: "Python" },
    { title: "C: Pointers & Dynamic Memory (malloc/free)", url: "/c/memory-management/malloc-calloc-realloc-free/", track: "C" },
    { title: "C++: Standard Template Library (STL)", url: "/cpp/stl-(standard-template-library)/", track: "C++" },
    { title: "Java: Collections Framework & Streams", url: "/java/java-collections-framework/", track: "Java" },
    { title: "Go: Goroutines & Channels Concurrency", url: "/go/goroutines-and-channels/", track: "Go" },
    { title: "Practice Quiz Arena", url: "/quiz/", track: "Quiz" },
    { title: "Big-O Complexity Master Cheat Sheet", url: "/cheatsheets/big-o-complexity/", track: "Cheat Sheet" },
    { title: "Interview Top-75 Roadmap", url: "/interview-prep/top-75-roadmap/", track: "Interview" }
  ];

  function filterLinks(query) {
    const q = (query || "").toLowerCase().trim();
    if (!q) return QUICK_LINKS;
    return QUICK_LINKS.filter(function (item) {
      return item.title.toLowerCase().includes(q) || item.track.toLowerCase().includes(q);
    });
  }

  window.MiniLearnSearch = {
    filterLinks: filterLinks,
    QUICK_LINKS: QUICK_LINKS
  };
})();
