import {
  createStyles,
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import React, { FunctionComponent } from 'react'
import Tag from '~generic/Tag'
import TagAdd from '~generic/TagAdd'
import { TagValue } from '~stores/CreateTask'

const showTagAdd = (tags: TagValue[], tagsQuery?: string) =>
  tags.filter(tag => tag.selected).length < 4 &&
  !!tagsQuery &&
  tagsQuery.length > 2 &&
  tagsQuery.length < 17 &&
  !tags.some(tag => tag.name === tagsQuery)

const limitVisibleTags = (limit: number) => (tags: TagValue[]) => {
  const selectedCount = tags.reduce(
    (acc, tag) => acc + (tag.selected ? 1 : 0),
    0,
  )
  let addedSelectedCount = 0
  let addedVisibleCount = 0

  return tags.map(tag => {
    if (limit - addedSelectedCount - addedVisibleCount < 0) {
      return { ...tag, visible: false }
    }

    if (tag.selected && limit - addedSelectedCount > 0) {
      addedSelectedCount++
      return tag
    }

    if (tag.visible && limit - addedVisibleCount - selectedCount > 0) {
      addedVisibleCount++
      return tag
    }

    return { ...tag, visible: false }
  })
}

const SelectTags: FunctionComponent<SelectTagsProps> = ({
  tags: manyTags,
  classes: { container },
  onTagSelect,
  onTagAdd,
  selectedTagsLimit = 4,
  tagsQuery,
}) => {
  const tags = limitVisibleTags(10)(manyTags)
  const selectedCount = tags.reduce(
    (count, tag) => (tag.selected ? count + 1 : count),
    0,
  )

  return (
    <div className={container}>
      {tags.map(({ selected, name, visible }, i) => {
        const isClickable = !selected && selectedCount === selectedTagsLimit

        return (
          <Tag
            visible={visible}
            selected={selected}
            clickable
            onClick={isClickable ? () => undefined : onTagSelect(name)}
            key={i}
            text={name}
          />
        )
      })}
      <TagAdd
        text={tagsQuery}
        onClick={onTagAdd && onTagAdd(tagsQuery)}
        visible={showTagAdd(tags, tagsQuery)}
      />
    </div>
  )
}

const styles: StyleRulesCallback = () =>
  createStyles({
    container: {
      alignSelf: 'flex-start',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      height: 0,
    },
  })

export interface SelectTagsProps extends WithStyles<typeof styles> {
  tags: TagValue[]
  onTagSelect: (tagName: string) => () => void
  onTagAdd?: (tagName?: string) => () => void
  tagsQuery?: string
  selectedTagsLimit?: number
}

export default withStyles(styles)(SelectTags)
