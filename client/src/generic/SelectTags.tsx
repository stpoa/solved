import {
  createStyles,
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import React, { FunctionComponent } from 'react'
import Tag from './TaskList/components/Tag'

const limitVisibleTags = (limit: number) => (tags: TagValue[]) => {
  const selectedNum = tags.reduce((acc, tag) => acc + (tag.selected ? 1 : 0), 0)
  let addedSelectedNum = 0
  let addedVisibleNum = 0

  return tags.map(tag => {
    if (addedSelectedNum + addedVisibleNum === limit) {
      return { ...tag, visible: false }
    }

    if (tag.selected && limit - addedSelectedNum > 0) {
      addedSelectedNum++
      return tag
    }

    if (tag.visible && limit - addedVisibleNum - selectedNum > 0) {
      addedVisibleNum++
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
