import { limitWords } from '~lib/text'
import { addTime } from '~lib/time'

const now = Date.now()

const description = `Napisz program, który poprosi uzytkownika o podanie liczb godzin i minut. Funkcja main() ma przekazać obie te wartości do funkcji typu  void, które je wyświetli w formacie jak ponziej`

const waitingTasks = [
  {
    category: 'Informatyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '1',
    price: 100,
    shortDescription: limitWords(60)(description) + ' ...',
    tags: ['rownania', 'analiza'],
  },
  {
    category: 'Fizyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '2',
    price: 100,
    shortDescription: 'Masa marsa',
    tags: ['astrologia'],
  },
]

const ongoingTasks = {
  myTasks: [
    {
      category: 'Fizyka',
      expiredAt: addTime(now, 2, 4, 5),
      id: '2',
      price: 100,
      shortDescription: 'Masa marsa',
      tags: ['astrologia'],
    },
  ],
  someoneTasks: [
    {
      category: 'Angielski',
      expiredAt: addTime(now, 2, 4, 5),
      id: '2',
      price: 100,
      shortDescription: 'Odmień być',
      tags: ['astrologia'],
    },
  ],
}

const finishedTasks = {
  myTasks: [
    {
      category: 'Muzyka',
      expiredAt: addTime(now, 2, 4, 5),
      id: '4',
      price: 140,
      shortDescription: 'Odczytaj nuty i zagraj',
      tags: ['nuty'],
    },
    {
      category: 'Muzyka',
      expiredAt: addTime(now, 2, 4, 5),
      id: '5',
      price: 140,
      shortDescription: 'Odczytaj nuty i zagraj',
      tags: ['nuty'],
    },
  ],
  someoneTasks: [
    {
      category: 'Muzyka',
      expiredAt: addTime(now, 2, 4, 5),
      id: '5',
      price: 140,
      shortDescription: 'Odczytaj nuty i zagraj',
      tags: ['nuty'],
    },
  ],
}

const tasks = [
  {
    id: '1',
    category: 'Informatyka',
    expiredAt: addTime(now, 2, 4, 5),
    price: 100,
    shortDescription:
      'Napisz program, który poprosi użytkownika o podanie' +
      'liczb godzin i minut. Funkcja main() ma',
    tags: ['rownania', 'analiza'],
  },
  {
    id: '2',
    category: 'Fizyka',
    expiredAt: addTime(now, 2, 4, 5),
    price: 100,
    shortDescription: 'Masa marsa',
    tags: ['astrologia'],
  },
  {
    id: '3',
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    id: '4',
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    id: '5',
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    id: '6',
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    id: '7',
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    id: '8',
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    id: '9',
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
  {
    id: '10',
    category: 'Muzyka',
    expiredAt: addTime(now, 2, 4, 5),
    price: 140,
    shortDescription: 'Odczytaj nuty i zagraj',
    tags: ['nuty'],
  },
]

export const taskCategories = {
  waitingTasks,
  ongoingTasks,
  finishedTasks,
}

export default tasks
