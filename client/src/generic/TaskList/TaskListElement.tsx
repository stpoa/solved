import { Card, CardContent, Chip, StyleRulesCallback, Theme, Typography, withStyles, WithStyles,
} from '@material-ui/core'
import React from 'react'
import { Task } from '~interfaces'

import { getTimeLeft } from '~lib/date'

const styles: StyleRulesCallback = (theme: Theme) => ({
  card: {
    display: 'flex',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  content: {
    flex: '1 0 auto',
    height: '15em',
  },
  controls: {
    alignItems: 'center',
    display: 'flex',
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
  },
  cover: {
    height: 151,
    width: 151,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  header: {
  },
  playIcon: {
    height: 38,
    width: 38,
  },
})

interface TimeLeftSpec {
  minutes: number
  hours: number
  days: number
}

const TimeLeft = ({ minutes, hours, days }: TimeLeftSpec) => (
  <div>{days ? days + ' d' : hours ? hours + ' h' : minutes + ' m'}</div>
)

interface TagListProps extends WithStyles<typeof styles> {
  tags: string[]
}

const TagListRaw = ({ tags, classes }: TagListProps) => (
  <div>
    {tags.map((tag, i) => (
      <Chip
        key={i}
        label={'# ' + tag}
        onClick={console.log}
        className={classes.chip}
      />
    ))}
  </div>
)

const TagList = withStyles(styles)(TagListRaw)

interface TaskListElementProps extends WithStyles<typeof styles>, Task {}

const TaskListElementRaw = ({ category, tags, shortDescription, price, expiredAt, classes }: TaskListElementProps) => {
  const timeLeft = getTimeLeft(expiredAt)

  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography className={classes.header} variant="headline">{category}</Typography>
        <Typography variant="subheading" color="textSecondary">
          <TagList tags={tags}/>
          <p>{shortDescription}</p>
          <div className={classes.footer}>
            <TimeLeft {...timeLeft}/>
            <span>{price} PLN</span>
          </div>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(TaskListElementRaw)
