import { Card, CardContent, StyleRulesCallback, Theme, Typography, withStyles, WithStyles,
} from '@material-ui/core'
import { distanceInWordsToNow } from 'date-fns'
import * as locale from 'date-fns/locale/en'
import React from 'react'
import { Task } from '~interfaces'
import { TagList } from './TagList'

const TaskListElement = ({ category, tags, shortDescription, price, expiredAt, classes }: TaskListElementProps) => (
  <Card>
    <CardContent className={classes.content}>
      <Typography className={classes.header} variant="headline">{category}</Typography>
      <Typography variant="subheading" color="textSecondary">
        <TagList tags={tags}/>
        <p>{shortDescription}</p>
        <div className={classes.footer}>
          <span>{price} PLN</span>
          <span>{distanceInWordsToNow(expiredAt, { locale })}</span>
        </div>
      </Typography>
    </CardContent>
  </Card>
)

const styles: StyleRulesCallback = (theme: Theme) => ({
  card: {
    display: 'flex',
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

interface TaskListElementProps extends WithStyles<typeof styles>, Task {}

export default withStyles(styles)(TaskListElement)
