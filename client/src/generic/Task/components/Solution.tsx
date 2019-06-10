import { StyleRulesCallback, withStyles } from '@material-ui/core'
import { WithStyles } from '@material-ui/styles'
import React from 'react'
import { SolutionEntry } from '~interfaces'

const Solution = ({ solution, classes }: SolutionProps) => {
  return (
    <div className={classes.container}>
      {solution.map((entry, key) => (
        <li {...{ key }}>{entry.comment}</li>
      ))}
    </div>
  )
}

const styles: StyleRulesCallback = _ => ({
  container: {},
})

interface SolutionProps extends WithStyles<typeof styles> {
  solution: SolutionEntry[]
}

export default withStyles(styles)(Solution)
