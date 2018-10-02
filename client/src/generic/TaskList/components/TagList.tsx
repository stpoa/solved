import { Chip, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'

const TagList = ({ tags, classes }: TagListProps) => (
  <div className={classes.container}>
    {tags.map((tag, i) => (
      <Chip key={i} label={tag} onClick={console.log} className={classes.chip} />
    ))}
  </div>
)

const styles: StyleRulesCallback = theme => ({
  chip: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0px 0px 4px 0px #000000',
    fontSize: '1.1rem',
    height: '2rem',
    margin: theme.spacing.unit,
  },
  container: {
    marginLeft: -theme.spacing.unit,
  },
})

interface TagListProps extends WithStyles<typeof styles> {
  tags: string[]
}

export default withStyles(styles)(TagList)
