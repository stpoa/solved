import { isPast } from 'date-fns'
import { Task, User } from '~interfaces'

export enum UserType {
  Guest = 'guest',
  Author = 'author',
  Solver = 'solver',
}

export const getUserType = (task: Task) => (user: User | null): UserType =>
  user
    ? user.id === task.author
      ? UserType.Author
      : user.id === task.solver
      ? UserType.Solver
      : UserType.Guest
    : UserType.Guest

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
