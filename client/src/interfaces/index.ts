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

export {
  Category,
  CategoryList,
  TaskListElement
}
