import { Avatar, Card, CardContent, Chip, StyleRulesCallback, Theme, Typography, withStyles, WithStyles
} from '@material-ui/core'
import React from 'react'
import { ITaskListElement } from '~interfaces'

import { getTimeLeft } from '~lib/date'

const styles: StyleRulesCallback = (theme: Theme) => ({
  card: {
    display: 'flex'
  },
  content: {
    flex: '1 0 auto'
  },
  controls: {
    alignItems: 'center',
    display: 'flex',
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit
  },
  cover: {
    height: 151,
    width: 151
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  playIcon: {
    height: 38,
    width: 38
  },
  chip: {
    margin: theme.spacing.unit,
  }
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

interface TaskListElementProps extends WithStyles<typeof styles>, ITaskListElement {}

const TaskListElementRaw = ({ category, tags, shortDescription, price, expiredAt, classes }: TaskListElementProps) => {
  const timeLeft = getTimeLeft(expiredAt)

  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography variant="headline">{category}</Typography>
        <Typography variant="subheading" color="textSecondary">
          <TagList tags={tags}/>
          <p>{shortDescription}</p>
          <span>{price} PLN</span>
          <TimeLeft {...timeLeft}/>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(TaskListElementRaw)

