+++
title = "Virtual Functions"
weight = 6
+++

{{< complexity time="O(1) VTable Indirect Call" space="1 VPtr per Object" level="Advanced" >}}

## How `virtual`, `vtable`, `vptr`, and `override` Work Under the Hood

When a C++ class declares or inherits a `virtual` function:
1. The compiler generates a per-class **Virtual Method Table (`vtable`)** containing function pointers to the most-derived overrides.
2. Every object instance stores a hidden **Virtual Pointer (`vptr`)** initialized by its constructor to point to that class's `vtable`.

{{< callout type="warning" title="Why Base Classes MUST Have a Virtual Destructor" >}}
Deleting a derived object through a `Base*` pointer (`delete base_ptr;`) when `~Base()` is **not** `virtual` results in **Undefined Behavior** (only `~Base()` runs and derived resources leak!).
{{< /callout >}}

{{< quiz question="What does the C++11 'override' keyword enforce at compile time?" options="It makes a non-virtual function virtual|It verifies that the member function matches and overrides a virtual function in a base class|It prevents subclasses from overriding the function|It inlines the virtual call" answer="1" explanation="Marking a method with override causes a compile-time error if the signature does not match a base virtual function (catching typos in const or parameter types)." >}}
