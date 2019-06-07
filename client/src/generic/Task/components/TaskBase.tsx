import {
  Card,
  StyleRulesCallback,
  Typography,
  withStyles,
} from '@material-ui/core'
import {
  AccessTime as TimeIcon,
  MonetizationOn as MoneyIcon,
} from '@material-ui/icons'
import { WithStyles } from '@material-ui/styles'
import { distanceInWordsToNow } from 'date-fns'
import * as locale from 'date-fns/locale/pl'
import React, { FC } from 'react'
import LineSeparator from '~generic/LineSeparator'
import PhotoList from '~generic/PhotoList'
import TagList from '~generic/TaskList/components/TagList'
import { Task as TaskData } from '~interfaces'

const TaskBase: FC<TaskBaseProps> = ({ classes, task, children }) => {
  return (
    <Card className={classes.cardContainer} elevation={1}>
      <Typography color="textPrimary">{task.description}</Typography>
      <LineSeparator />
      <TagList tags={task.tags} />
      <LineSeparator />
      <PhotoList {...{ photos: task.photos }} />
      <LineSeparator />
      <div className={classes.timePriceContainer}>
        <div className={classes.time}>
          <TimeIcon className={classes.indicatorIconLeft} />
          {distanceInWordsToNow(task.dateExpired, { locale })}
        </div>
        <div className={classes.price}>
          <MoneyIcon className={classes.indicatorIconRight} />
          {task.price}
        </div>
      </div>
      <LineSeparator />
      {children}
    </Card>
  )
}

const styles: StyleRulesCallback = _ => ({
  cardContainer: {
    marginTop: '1.5rem',
    textAlign: 'left',
    padding: '2rem',
  },
  timePriceContainer: {
    display: 'flex',
    textAlign: 'center',
  },
  time: {
    flex: 1,
    display: 'inline',
    color: 'gray',
    fontSize: '1.8rem',
  },
  price: {
    flex: 1,
    display: 'inline',
    color: 'gray',
    fontSize: '1.8rem',
  },
  indicatorIconLeft: {
    verticalAlign: 'middle',
    marginRight: '0.6rem',
    fontSize: '3.6rem',
  },
  indicatorIconRight: {
    verticalAlign: 'middle',
    marginRight: '0.6rem',
    fontSize: '3.6rem',
  },
})

interface TaskBaseProps extends WithStyles<typeof styles> {
  task: TaskData
}

export default withStyles(styles)(TaskBase)
