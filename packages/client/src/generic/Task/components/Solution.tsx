import { StyleRulesCallback, Typography, withStyles } from '@material-ui/core'
import { WithStyles } from '@material-ui/styles'
import { SolutionEntry } from '@notowork/models/interfaces'
import { distanceInWordsToNow } from 'date-fns'
import * as locale from 'date-fns/locale/pl'
import React from 'react'

const Solution = ({ solution, classes }: SolutionProps) => {
  return (
    <div className={classes.container}>
      <Typography
        align="center"
        component="h2"
        variant="h2"
        color="textPrimary"
      >
        Rozwiązanie
      </Typography>
      {solution.map((entry, key) => (
        <div className={classes.solution} {...{ key }}>
          <div className={classes.info}>
            <Typography color="textSecondary">
              {distanceInWordsToNow(entry.dateCreated, { locale })} temu
            </Typography>
          </div>
          <img className={classes.image} src={entry.image} />
          <div className={classes.text}>
            <Typography color="textPrimary">{entry.comment}</Typography>
          </div>
        </div>
      ))}
    </div>
  )
}

const styles: StyleRulesCallback = _ => ({
  container: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  solution: {
    display: 'grid',
    gridGap: '1rem',
    gridTemplateAreas: '"info info" "image text"',
    padding: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    border: '1px solid grey',
    borderRadius: '4px',
  },
  info: {
    gridArea: 'info',
  },
  image: {
    gridArea: 'image',
    borderRadius: '10px',
    maxHeight: '8rem',
  },
  text: {
    gridArea: 'text',
  },
})

interface SolutionProps extends WithStyles<typeof styles> {
  solution: SolutionEntry[]
}

export default withStyles(styles)(Solution)
