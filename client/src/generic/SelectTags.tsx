import {
  createStyles,
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import React, { FunctionComponent } from 'react'
import Tag from './TaskList/components/Tag'

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
  onClick,
}) => {
  const tags = limitVisibleTags(10)(manyTags)

  return (
    <div className={container}>
      {tags.map(({ selected, name, visible }, i) => (
        <Tag
          visible={visible}
          selected={selected}
          clickable
          onClick={onClick(name)}
          key={i}
          text={name}
        />
      ))}
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
    },
  })

export interface TagValue {
  name: string
  visible: boolean
  selected: boolean
}

export interface SelectTagsProps extends WithStyles<typeof styles> {
  tags: TagValue[]
  onClick: (tagName: string) => () => void
}

export default withStyles(styles)(SelectTags)
