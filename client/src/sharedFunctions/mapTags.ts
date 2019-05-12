import { TagValue } from '~stores/CreateTask'

export default (tags: string[]) =>
  tags.map((name): TagValue => ({ name, visible: true, selected: false }))
