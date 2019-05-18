import { TagValue } from '~stores/CreateTask'

export const extendTags = (tags: string[]) =>
  tags.map((name): TagValue => ({ name, visible: true, selected: false }))
