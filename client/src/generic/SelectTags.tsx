import {
  createStyles,
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import React, { FunctionComponent } from 'react'
import Tag from './TaskList/components/Tag'

const SelectTags: FunctionComponent<SelectTagsProps> = ({
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

export interface TagValue {
  name: string
  selected: boolean
}

export interface SelectTagsProps extends WithStyles<typeof styles> {
  tags: TagValue[]
  onClick: (tagName: string) => () => void
}

export default withStyles(styles)(SelectTags)
