export interface Category {
  id: string
  name: string
}

export type CategoryList = Category[]

export interface Task {
  id: string
  author: string
  solver?: string
  solution?: SolutionEntry[]
  dateCreated: string
  dateExpired: string
  dateAssigned?: string
  dateStarted?: string
  category: string
  tags: string[]
  description: string
  shortDescription: string
  photos: string[]
  price: number
}

export interface SolutionEntry {
  dateCreated: string 
  comment: string
  image: string
}

export interface User {
  id: string
  email: string
  nick: string
  password: string
}

export enum Status {
  Success = 'success',
  Failure = 'failure',
  Pending = 'pending',
}
