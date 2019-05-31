export interface Category {
  id: string
  name: string
}

export type CategoryList = Category[]

export interface TaskListTask {
  id: string
  category: string
  tags: string[]
  shortDescription: string
  price: number
  expiredAt: number
}

export interface Task {
  id: string
  author: string
  solver?: string
  dateCreated?: number
  dateAssigned?: number
  dateExpired: number
  category: string
  tags: string[]
  description: string
  photos: string[]
  price: number
}

export interface User {
  id: string
  email: string
  nick: string
}

export enum Status {
  Success = 'success',
  Failure = 'failure',
  Pending = 'pending',
}
