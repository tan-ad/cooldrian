---
title: Task Tracker CLI
year: 2024
role: Solo Developer
stack: [Node.js, TypeScript, Commander.js]
summary: A simple command-line task management tool with JSON storage and intuitive commands.
links:
  - { label: Source Code, href: "https://github.com/adriantang/task-cli" }
---

# Task Tracker CLI

A lightweight command-line task management tool that I built to scratch my own itch. I wanted something simpler than existing tools but more powerful than a basic todo list.

## Features

- Add, update, and delete tasks
- Mark tasks as in-progress or done
- List tasks with filtering options
- JSON file storage (no database required)
- Colorized output for better readability

## Usage

```bash
# Add a new task
task add "Write blog post about CLI tools"

# List all tasks
task list

# Mark task as in progress
task update 1 --status in-progress

# Mark task as done
task mark-done 1

# Delete a task
task delete 1
```

The tool stores tasks in a simple JSON file in your home directory, making it easy to backup or sync across machines.

