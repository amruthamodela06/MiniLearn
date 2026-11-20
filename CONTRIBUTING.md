# Contributing to MiniLearn

Thank you for helping improve **MiniLearn**! Whether you are adding new lessons, refining code examples, or expanding the interactive quiz bank, follow this guide to keep the curriculum consistent and high-quality.

## 1. Authoring a Lesson

Every lesson resides under `content/<track>/` and must start with valid TOML frontmatter (`+++`):

```markdown
+++
title = "Topic Title"
weight = 1
+++

{{</* complexity time="O(N log N)" space="O(N)" level="Intermediate" */>}}

## Overview
Clear conceptual explanation followed by runnable code examples.
```

## 2. Validating Your Changes

Before opening a pull request, run the curriculum validator and unit test suite:

```bash
python scripts/validate_content.py
python -m unittest discover -s tests -v
```
