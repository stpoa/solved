import { WithStyles, withStyles } from '@material-ui/core'
import React from 'react'
import Tag from '../../Tag'

const TagList = ({ tags, classes }: TagListProps) => (
  <div className={classes.container}>
    {tags.map((tag, i) => (
      <Tag text={tag} key={i} />
    ))}
  </div>
)

const styles = {
  container: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
}

interface TagListProps extends WithStyles<typeof styles> {
  tags: string[]
}

export default withStyles(styles)(TagList)
