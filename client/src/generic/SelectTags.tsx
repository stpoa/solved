import { Chip } from '@material-ui/core'
import { createStyles, StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core/styles'
import React, { SFC } from 'react'

const SelectTags: SFC<SelectTagsProps> = ({
  tags,
  classes: { container, item, selected, clickable },
  onClick
}) => (
  <div className={container}>
    {tags.map((tag, i) => (
      <Chip
        clickable
        key={i}
        label={tag.name}
        className={`${item} ${clickable} ${tag.selected ? selected : ''}`}
        onClick={onClick.bind(null, tag.name)}
      />
    ))}
  </div>
)

const styles: StyleRulesCallback = ({
  spacing,
  palette: { primary: { light } }
}) => createStyles({
  container: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  item: {
    margin: spacing.unit
  },
  selected: {
    '&:focus': {
      backgroundColor: light
    },
    '&:hover': {
      backgroundColor: light
    },
    'backgroundColor': light
  }
})

interface Tag {
  name: string,
  selected: boolean
}

interface TagList extends Array<Tag> {}

export interface SelectTagsProps extends WithStyles<typeof styles> {
  tags: TagList,
  onClick: (name: Tag['name']) => void
}

export default withStyles(styles)(SelectTags)
