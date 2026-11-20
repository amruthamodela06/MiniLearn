+++
title = "Linked Lists, Stacks, Queues"
weight = 3
+++

{{< complexity time="Push/Pop O(1)" space="O(N) Heap Nodes" level="Intermediate" >}}

## Self-Referential `struct Node` Linked List & Stack in C

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node *push_front(Node *head, int val) {
    Node *node = malloc(sizeof(*node));
    if (node == NULL) {
        return head;
    }
    node->data = val;
    node->next = head;
    return node;
}

void free_list(Node *head) {
    while (head != NULL) {
        Node *next = head->next;
        free(head);
        head = next;
    }
}
```
