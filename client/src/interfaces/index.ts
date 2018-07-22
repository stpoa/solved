interface Category {
  id: string,
  name: string
}

interface CategoryList extends Array<Category> {}

export {
  Category,
  CategoryList
}
