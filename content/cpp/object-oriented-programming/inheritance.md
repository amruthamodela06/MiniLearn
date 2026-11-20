+++
title = "Inheritance"
weight = 4
+++

{{< complexity time="Base-to-Derived Init" space="Subobject Layout" level="Intermediate" >}}

## Inheritance Modes, Constructor Ordering & Virtual Destructors

When a derived object is constructed, **base class constructors run first**, followed by member variables in declaration order, and finally the derived constructor body. Destructors run in the **exact reverse order**.

```cpp
#include <iostream>

class BaseLogger {
public:
    virtual ~BaseLogger() = default;  // Always make polymorphic base destructors virtual!
    virtual void log(const char* msg) const {
        std::cout << "[BASE] " << msg << '\n';
    }
};

class FileLogger : public BaseLogger {
public:
    void log(const char* msg) const override {
        std::cout << "[FILE] " << msg << '\n';
    }
};
```
