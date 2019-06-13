import { TagValue } from '~generic/SelectTags'

export const extendTags = (tags: string[]) =>
  tags.map((name): TagValue => ({ name, visible: true, selected: false }))
