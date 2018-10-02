import { Chip, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'

const TagListRaw = ({ tags, classes }: TagListProps) => (
  <div>
    {tags.map((tag, i) => (
      <Chip key={i} label={'# ' + tag} onClick={console.log} className={classes.chip} />
    ))}
  </div>
)

const styles: StyleRulesCallback = theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
})

interface TagListProps extends WithStyles<typeof styles> {
  tags: string[]
}

export const TagList = withStyles(styles)(TagListRaw)
