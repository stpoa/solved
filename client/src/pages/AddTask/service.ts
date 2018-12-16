import { categories, tasks } from '~data'
import { Task } from '~interfaces'

const addTask: AddTask = taskToAdd => {
  return new Promise(resolve => {
    window.setTimeout(() => {
      const id = String(tasks.length)
      const expiredAt = Date.now() + 1000 * 60 * 60
      const price = 100
      const foundCategory = categories.find(
        category => category.id === taskToAdd.category,
      )

      if (!foundCategory) return resolve(null)

      tasks.push({
        ...taskToAdd,
        category: foundCategory.name,
        expiredAt,
        id,
        price,
      })

      resolve(id)
    }, 2000)
  })
}

export type TaskToAdd = Pick<
  Task,
  Exclude<keyof Task, 'id' | 'expiredAt' | 'price'>
>
type AddTask = (taskToAdd: TaskToAdd) => Promise<Task['id'] | null>

export default addTask
