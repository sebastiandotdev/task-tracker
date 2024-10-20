import type { Todo } from '@tools/types'

export function add(name: string): Todo[] | Error {
  const tasks: Todo[] = []
  try {
    if (!name) throw new Error('The task should not be empty')

    const todo: Todo = { id: tasks.length + 1, name }

    tasks.push(todo)

    return tasks
  } catch (error) {
    return (error as Error)
  }
