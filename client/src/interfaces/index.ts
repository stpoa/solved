interface Category {
  id: string,
  name: string
}

type CategoryList = Category[]

interface TaskListElement {
  category: string
  tags: string[]
  shortDescription: string
  price: number
  expiredAt: number
}

interface User {
  email: string
}

export {
  Category,
  CategoryList,
  User,
  TaskListElement
}
