+++
title = "Classes & Objects"
weight = 1
+++

{{< complexity time="Stack or Heap Layout" space="Zero Member Overhead" level="Beginner–Intermediate" >}}

## C++ `class` vs `struct` & `const` Member Functions

In C++, the **only** difference between `struct` and `class` is default access visibility (`public` for `struct`, `private` for `class`). Always mark read-only member functions as `const` so they can be called on `const` references!

```cpp
#include <iostream>
#include <string>

class CourseTrack {
private:
    std::string title_;
    int lessons_;

public:
    CourseTrack(std::string title, int lessons)
        : title_(std::move(title)), lessons_(lessons) {}

    const std::string& title() const noexcept { return title_; }
    int lessons() const noexcept { return lessons_; }
};
```
