interface Category {
  id: string,
  name: string
}

type CategoryList = Category[]

interface TagList extends Array<string> {}

interface Task {
  id: string,
  category: string
  tags: TagList,
  shortDescription: string
  price: number
  expiredAt: number
}

interface User {
  email: string
}

enum Status {
  Success = 'success',
  Failure = 'failure',
  Pending = 'pending'
}

export {
  Category,
  CategoryList,
  Status,
  Task,
  TagList,
  User
}
