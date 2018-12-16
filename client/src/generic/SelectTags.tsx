import {
  createStyles,
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import React, { MouseEventHandler, SFC } from 'react'
import Tag from './TaskList/components/Tag'

const SelectTags: SFC<SelectTagsProps> = ({
  tags,
  classes: { container },
  onClick,
}) => (
  <div className={container}>
    {tags.map(({ selected, name }, i) => (
      <Tag
        selected={selected}
        clickable
        onClick={onClick(name)}
        key={i}
        text={name}
      />
    ))}
  </div>
)

const styles: StyleRulesCallback = () =>
  createStyles({
    container: {
      alignSelf: 'flex-start',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  })

interface TagValue {
  name: string
  selected: boolean
}

interface TagList extends Array<TagValue> {}

export interface SelectTagsProps extends WithStyles<typeof styles> {
  tags: TagList
  onClick: (tagName: string) => MouseEventHandler<HTMLElement>
}

export default withStyles(styles)(SelectTags)
