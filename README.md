# Task tracker

Task tracker is a project used to track and manage your tasks. In this task, you
will build a simple command line interface (CLI) to track what you need to do,
what you have done, and what you are currently working on. This project will
help you practice your programming skills, including working with the
filesystem, handling user inputs, and building a simple CLI application.

## Example

The list of commands and their usage is given below:

```sh
# Adding a new task
todo add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
todo update 1 "Buy groceries and cook dinner"
todo delete 1

# Marking a task as in progress or done
todo mark-in-progress 1
todo mark-done 1

# Listing all tasks
todo list

# Listing tasks by status
todo list done
todo list todo
todo list in-progress
```

## Challenge

[Challenge Roadmap.sh](https://roadmap.sh/projects/task-tracker)
