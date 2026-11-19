+++
title = "Stacks (Infix to Postfix)"
weight = 13
+++

{{< complexity time="O(N)" space="O(N)" level="Intermediate" >}}

## LIFO Stack & Shunting-Yard Infix-to-Postfix Conversion

A **Stack** follows Last-In, First-Out (**LIFO**) ordering (`push`, `pop`, `peek` in `O(1)`). Edsger Dijkstra's **Shunting-Yard Algorithm** converts parenthesized infix expressions (`A + B * C`) into postfix / Reverse Polish Notation (`A B C * +`) using an operator stack:

```python
def infix_to_postfix(expr: str) -> str:
    prec = {"+": 1, "-": 1, "*": 2, "/": 2, "^": 3}
    right_assoc = {"^"}
    output: list[str] = []
    stack: list[str] = []

    for token in expr.replace(" ", ""):
        if token.isalnum():
            output.append(token)
        elif token == "(":
            stack.append(token)
        elif token == ")":
            while stack and stack[-1] != "(":
                output.append(stack.pop())
            if stack:
                stack.pop()
        elif token in prec:
            while (
                stack
                and stack[-1] in prec
                and (
                    prec[stack[-1]] > prec[token]
                    or (prec[stack[-1]] == prec[token] and token not in right_assoc)
                )
            ):
                output.append(stack.pop())
            stack.append(token)

    while stack:
        output.append(stack.pop())
    return " ".join(output)
```

{{< quiz question="What is the postfix (Reverse Polish Notation) equivalent of (A + B) * C?" options="A B + C *|A B C * +|* + A B C|A + B C *" answer="0" explanation="Parentheses force A + B to be evaluated first (A B +), which is then multiplied by C: A B + C *." >}}
