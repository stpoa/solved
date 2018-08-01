interface ICategory {
  id: string,
  name: string
}

type ICategoryList = ICategory[]

interface ITaskListElement {
  category: string
  tags: string[]
  shortDescription: string
  price: number
  expiredAt: number
}

export {
  ICategory,
  ICategoryList,
  ITaskListElement
}
