+++
title = "malloc, calloc, realloc, free"
weight = 1
+++

{{< complexity time="Heap Allocator" space="Manual Lifecycle" level="Intermediate–Advanced" >}}

## Dynamic Heap Allocation in `<stdlib.h>`

| Function | Signature | Zero-Initialized? | Purpose |
|---|---|---|---|
| `malloc` | `void *malloc(size_t size)` | No (indeterminate bytes) | Allocate `size` raw bytes on the heap |
| `calloc` | `void *calloc(size_t nmemb, size_t size)` | **Yes** (all bits `0`) | Overflow-checked array allocation |
| `realloc` | `void *realloc(void *ptr, size_t new_size)` | No (new tail uninitialized) | Resize existing heap block |
| `free` | `void free(void *ptr)` | N/A | Release block back to allocator (`free(NULL)` is a safe no-op) |

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    size_t cap = 4;
    int *buf = calloc(cap, sizeof(*buf));
    if (buf == NULL) {
        return EXIT_FAILURE;
    }

    // Safe realloc pattern: assign to temporary pointer so original isn't leaked on failure!
    size_t new_cap = cap * 2;
    int *grown = realloc(buf, new_cap * sizeof(*buf));
    if (grown == NULL) {
        free(buf);
        return EXIT_FAILURE;
    }
    buf = grown;

    free(buf);
    buf = NULL;  // Prevent dangling-pointer use-after-free
    return EXIT_SUCCESS;
}
```

{{< quiz question="Why should you never write ptr = realloc(ptr, new_size) directly?" options="It causes a syntax error in C99|If realloc fails and returns NULL, the original pointer is overwritten and its memory block is permanently leaked|realloc always frees the pointer even on failure|realloc only works on stack arrays" answer="1" explanation="When realloc returns NULL on allocation failure, the original memory block remains allocated; overwriting ptr loses the only reference to free() it." >}}
