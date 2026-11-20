+++
title = "fopen, fclose, fread, fwrite"
weight = 1
+++

{{< complexity time="Buffered Stream I/O" space="FILE Descriptor" level="Intermediate" >}}

## Text vs Binary File Streams in `<stdio.h>`

| Function | Signature | Use Case |
|---|---|---|
| `fopen` | `FILE *fopen(const char *path, const char *mode)` | Open file stream (`"r"`, `"w"`, `"a"`, `"rb"`, `"wb"`) |
| `fread` | `size_t fread(void *ptr, size_t size, size_t nmemb, FILE *fp)` | Read `nmemb` binary blocks into memory |
| `fwrite` | `size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *fp)` | Write `nmemb` binary blocks to disk |
| `fseek` / `ftell` | `int fseek(FILE *fp, long offset, int whence)` | Random-access seek (`SEEK_SET`, `SEEK_CUR`, `SEEK_END`) |
| `fclose` | `int fclose(FILE *fp)` | Flush user-space buffer and close OS handle |

```c
#include <stdio.h>
#include <stdint.h>

typedef struct {
    uint32_t user_id;
    double score;
} ScoreEntry;

int save_entries(const char *filename, const ScoreEntry *items, size_t count) {
    FILE *fp = fopen(filename, "wb");
    if (fp == NULL) {
        perror("fopen failed");
        return -1;
    }
    size_t written = fwrite(items, sizeof(ScoreEntry), count, fp);
    fclose(fp);
    return (written == count) ? 0 : -1;
}
```

{{< quiz question="What does fread(buf, sizeof(Record), 10, fp) return upon success?" options="The total number of bytes read|The number of complete Record items read (10)|0 on success, -1 on error|The file pointer address" answer="1" explanation="fread() and fwrite() return the number of complete items (nmemb) successfully transferred, not the byte count (unless size == 1)." >}}
