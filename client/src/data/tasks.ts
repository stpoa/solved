import { addDays, addHours, addMinutes } from 'date-fns'

type DateLike = number | string | Date
const now = Date.now()

const addTime = (fromDate: DateLike, minutes: number, hours: number, days: number) => {
  const withMinutes = addMinutes(fromDate, minutes)
  const withHours = addHours(withMinutes, hours)
  const withDays = addDays(withHours, days)

  return withDays.getTime()
}

const waitingTasks = [{
  category: 'Informatyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '1',
  price: 100,
  shortDescription: 'Napisz program, który poprosi użytkownika o podanie liczb godzin i minut. Funkcja main() ma',
  tags: ['rownania', 'analiza'],
}, {
  category: 'Fizyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '2',
  price: 100,
  shortDescription: 'Masa marsa',
  tags: ['astrologia'],
}]

const ongoingTasks = {
  myTasks: [{
    category: 'Fizyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '2',
    price: 100,
    shortDescription: 'Masa marsa',
    tags: ['astrologia'],
  }],
  someoneTasks: [{
    category: 'Angielski',
    expiredAt: addTime(now, 2, 4, 5),
    id: '2',
    price: 100,
    shortDescription: 'Odmień być',
    tags: ['astrologia'],
  }],
}

const finishedTasks = {
  myTasks: [{
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '4',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  }, {
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '5',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  }],
  someoneTasks: [{
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '5',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  }],
}

const tasks = [{
  category: 'Informatyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '1',
  price: 100,
  shortDescription: 'Napisz program, który poprosi użytkownika o podanie liczb godzin i minut. Funkcja main() ma',
  tags: ['rownania', 'analiza'],
}, {
  category: 'Fizyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '2',
  price: 100,
  shortDescription: 'Masa marsa',
  tags: ['astrologia'],
}, {
  category: 'Muzyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '3',
  price: 140,
  shortDescription: 'Odczytaj nuty i zagraj',
  tags: ['nuty'],
}, {
  category: 'Muzyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '4',
  price: 140,
  shortDescription: 'Odczytaj nuty i zagraj',
  tags: ['nuty'],
}, {
  category: 'Muzyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '5',
  price: 140,
  shortDescription: 'Odczytaj nuty i zagraj',
  tags: ['nuty'],
}, {
  category: 'Muzyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '6',
  price: 140,
  shortDescription: 'Odczytaj nuty i zagraj',
  tags: ['nuty'],
}, {
  category: 'Muzyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '7',
  price: 140,
  shortDescription: 'Odczytaj nuty i zagraj',
  tags: ['nuty'],
}, {
  category: 'Muzyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '8',
  price: 140,
  shortDescription: 'Odczytaj nuty i zagraj',
  tags: ['nuty'],
}, {
  category: 'Muzyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '9',
  price: 140,
  shortDescription: 'Odczytaj nuty i zagraj',
  tags: ['nuty'],
}, {
  category: 'Muzyka',
  expiredAt: addTime(now, 2, 4, 5),
  id: '10',
  price: 140,
  shortDescription: 'Odczytaj nuty i zagraj',
  tags: ['nuty'],
}]

export const taskCategories = {
  waitingTasks,
  ongoingTasks,
  finishedTasks,
}

export default tasks
