+++
title = "Encapsulation & Abstraction"
weight = 3
+++

{{< complexity time="Compile-Time Access Control" space="Zero Runtime Cost" level="Intermediate" >}}

## Access Specifiers (`private`, `protected`, `public`) & Pure Virtual Interfaces

- **`private`**: Accessible only within the class itself (and `friend` declarations).
- **`protected`**: Accessible within the class and its derived subclasses.
- **`public`**: Accessible from any caller.
- **Abstract Class**: Any C++ class containing at least one **pure virtual function (`virtual void draw() const = 0;`)** cannot be instantiated directly and serves as an interface contract.
