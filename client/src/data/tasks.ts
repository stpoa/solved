import { Task } from '~interfaces'
import { limitWords } from '~lib/text'
import { addTime, subTime } from '~lib/time'
import { MockBuilder } from './types'

const now = Date.now()

const buildTask: MockBuilder<Task> = task => {
  const description = `Napisz program, który poprosi uzytkownika o podanie liczb godzin i minut. Funkcja main() ma przekazać obie te wartości do funkcji typu  void, które je wyświetli w formacie jak ponziej`
  const defaults: Task = {
    id: '1',
    author: '2',
    solver: '3',
    dateExpired: addTime(now, 2, 4, 5),
    category: 'Informatyka',
    price: 100,
    tags: ['rownania', 'analiza'],
    description,
    shortDescription: limitWords(60)(task.description || description) + ' ...',
    photos: [
      'https://cdn.mamadu.pl/3d6c819cddd788cfff6e629075468689,780,0,0,0.jpg',
      'https://1.bp.blogspot.com/-Xza06X5jnlU/Uul8IQsB_oI/AAAAAAAABZ8/t5cFSra4H6o/s1600/IMG_3411.JPG',
      'https://1.bp.blogspot.com/-3MgB7xsTokw/Uul8b1j0g7I/AAAAAAAABaE/G0D36MQobVY/s1600/IMG_3412.JPG',
    ],
  }

  return { ...defaults, ...task }
}

const waitingTasks = [buildTask({ id: '1' }), buildTask({ id: '2' })]

const ongoingTasks = {
  myTasks: [{ id: '0' }, { id: '1' }].map(buildTask),
  someoneTasks: [{ id: '0' }, { id: '1' }].map(buildTask),
}

const finishedTasks = {
  myTasks: [{ id: '0' }, { id: '1' }].map(buildTask),
  someoneTasks: [{ id: '2' }].map(buildTask),
}

const createdTask = buildTask({
  id: '1',
  category: 'Informatyka',
  dateExpired: addTime(now, 2, 4, 5),
  price: 100,
  description:
    'To jest nowe zadanie. Jak chcesz to sobie je weź. Daje duzo hajsów. Polecam brać szybko, bo dobra cena jest mega',
  tags: ['informatyka', 'nowe', 'hajsy'],
})

const takenTask = buildTask({
  ...createdTask,
  description:
    'To jest wzięte zadanie. Zadanie nie powinno sie wyświetlać na liście',
  id: '2',
  price: 200,
  solver: '3',
})

const startedTask = buildTask({
  ...takenTask,
  id: '3',
  dateStarted: subTime(now, 10, 1, 0),
})

const endedTask = buildTask({
  ...startedTask,
  id: '4',
  dateExpired: subTime(now, 10, 0, 0),
})

const tasks: Task[] = [
  createdTask,
  takenTask,
  startedTask,
  endedTask,
  createdTask,
  takenTask,
  startedTask,
  endedTask,
]

export const taskCategories = {
  waitingTasks,
  ongoingTasks,
  finishedTasks,
}

export default tasks
