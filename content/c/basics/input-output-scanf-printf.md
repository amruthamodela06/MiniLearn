+++
title = "Input / Output (scanf, printf)"
weight = 2
+++

{{< complexity time="Buffered stdio.h" space="Stack Buffers" level="Beginner" >}}

## Formatted Console I/O & Safe String Reading (`fgets`)

`printf` formats output to `stdout`, while `scanf` parses formatted tokens from `stdin` into **memory addresses (`&var`)**.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    int age = 0;
    double gpa = 0.0;
    char name[64];

    printf("Enter age and GPA: ");
    if (scanf("%d %lf", &age, &gpa) == 2) {
        printf("Parsed -> Age: %d, GPA: %.2f\n", age, gpa);
    }

    // Safe line reading with fgets (prevents buffer overflow)
    if (fgets(name, sizeof(name), stdin) != NULL) {
        name[strcspn(name, "\r\n")] = '\0';  // Strip trailing newline
    }
    return 0;
}
```

{{< callout type="warning" title="Never Use gets() or Unbounded scanf(\"%s\")" >}}
`gets()` was removed in C11 because it cannot check buffer length and causes stack buffer overflows. Always use `fgets(buf, sizeof(buf), stdin)`.
{{< /callout >}}
