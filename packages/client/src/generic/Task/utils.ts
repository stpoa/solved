import { Task, User } from '@stpoa/models/interfaces'
import { isPast } from 'date-fns'

export enum UserType {
  Guest = 'guest',
  Author = 'author',
  Solver = 'solver',
}

export const getUserType = (task: Task) => (user: User | null): UserType => {
  if (user) {
    if (user.id === task.author) {
      return UserType.Author
    } else if (user.id === task.solver) {
      return UserType.Solver
    }
  }
  return UserType.Guest
}

export enum TaskStatus {
  Created = 'created',
  Taken = 'taken',
  Started = 'started',
  Ended = 'ended',
}

export const getTaskStatus = (task: Task): TaskStatus =>
  isPast(task.dateExpired)
    ? TaskStatus.Ended
    : task.solver
    ? TaskStatus.Taken
    : task.dateStarted
    ? TaskStatus.Started
    : TaskStatus.Created
