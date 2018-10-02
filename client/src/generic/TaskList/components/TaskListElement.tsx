import { Card, CardContent, StyleRulesCallback, Theme, Typography, withStyles, WithStyles,
} from '@material-ui/core'
import { AccessTime, MonetizationOn } from '@material-ui/icons'
import { distanceInWordsToNow } from 'date-fns'
import * as locale from 'date-fns/locale/en'
import React from 'react'
import { Task } from '~interfaces'
import TagList from './TagList'

const TaskListElement = ({ category, tags, shortDescription, price, expiredAt, classes }: TaskListElementProps) => (
  <Card className={classes.root} elevation={1}>
    <CardContent className={classes.content}>
      <Typography color="secondary" className={classes.header} variant="headline">{category}</Typography>
      <Typography variant="subheading" color="textSecondary">
        <p className={classes.shortDescription}>{shortDescription}</p>
        <TagList tags={tags}/>
        <div className={classes.footer}>
          <span className={classes.indicator}>
            <AccessTime className={classes.indicatorIconLeft}/>
            <span className={classes.indicatorText}>{distanceInWordsToNow(expiredAt, { locale })}</span>
          </span>
          <span className={classes.indicator}>
            <span className={classes.indicatorText}>{price}</span>
            <MonetizationOn className={classes.indicatorIconRight}/>
          </span>
        </div>
      </Typography>
    </CardContent>
  </Card>
)

const styles: StyleRulesCallback = ({ spacing: { unit } }: Theme) => ({
  card: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    alignItems: 'center',
    display: 'flex',
    paddingBottom: unit,
    paddingLeft: unit,
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
    fontSize: '1.2rem',
    height: '2.4rem',
    justifyContent: 'space-between',
    lineHeight: '2.4rem',
    marginTop: unit,
  },
  header: {
    fontSize: '1.6rem',
  },
  indicator: {
    verticalAlign: 'middle',
  },
  indicatorIconLeft: { verticalAlign: 'middle', marginRight: '0.4rem' },
  indicatorIconRight: { verticalAlign: 'middle', marginLeft: '0.4rem' },
  indicatorText: { verticalAlign: 'middle' },
  playIcon: {
    height: 38,
    width: 38,
  },
  root: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  shortDescription: {
    color: 'black',
    fontSize: '1.4rem',
    fontWeight: 300,
    lineHeight: '1.4',
    margin: '1rem 0',
  },
})

interface TaskListElementProps extends WithStyles<typeof styles>, Task {}

export default withStyles(styles)(TaskListElement)
