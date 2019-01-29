import { TagValue } from '~generic/SelectTags'
import { TagList } from '~interfaces'

const tagNames: TagList = [
  'matematyka',
  'fizyka',
  'biologia',
  'chamia',
  'analiza',
  'astronomia',
  'gimnazjum',
  'studia',
  'klasa-1',
  'klasa-2',
  'klasa-3',
  'klasa-4',
  'klasa-5',
  'polski',
  'informatyka',
  'muzyka',
  'przetrwanie',
  'sesja',
]

export const tags: TagValue[] = tagNames.map(name => ({
  name,
  visible: true,
  selected: false,
}))

export default tagNames
