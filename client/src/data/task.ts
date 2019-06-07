import { Task } from '~interfaces'
import { addTime } from '~lib/time'

const description = `Napisz program, który poprosi uzytkownika o podanie liczb godzin i minut. Funkcja main() ma przekazać obie te wartości do funkcji typu  void, które je wyświetli w formacie jak ponziej
  
  Podaj liczbę godzin: 9
  Podaj liczbę minut: 28`

const task: Task = {
  id: '1',
  author: '2',
  solver: '3',
  dateExpired: addTime(Date.now(), 2, 4, 5),
  category: 'Informatyka',
  price: 100,
  tags: ['rownania', 'analiza'],
  description,
  photos: [
    'https://cdn.mamadu.pl/3d6c819cddd788cfff6e629075468689,780,0,0,0.jpg',
    'https://1.bp.blogspot.com/-Xza06X5jnlU/Uul8IQsB_oI/AAAAAAAABZ8/t5cFSra4H6o/s1600/IMG_3411.JPG',
    'https://1.bp.blogspot.com/-3MgB7xsTokw/Uul8b1j0g7I/AAAAAAAABaE/G0D36MQobVY/s1600/IMG_3412.JPG',
  ],
}

export default task
