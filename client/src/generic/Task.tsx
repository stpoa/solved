import {
  Card,
  StyleRulesCallback,
  Typography,
  withStyles,
} from '@material-ui/core'
import {
  AccessTime as TimeIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  MonetizationOn as MoneyIcon,
} from '@material-ui/icons'
import { WithStyles } from '@material-ui/styles'
import { distanceInWordsToNow } from 'date-fns'
import * as locale from 'date-fns/locale/pl'
import React from 'react'
import Button from '~generic/Buttons/Button'
import ButtonContainer from '~generic/Buttons/ButtonsContainer'
import LineSeparator from '~generic/LineSeparator'
import PhotoList from '~generic/PhotoList'
import TagList from '~generic/TaskList/components/TagList'
import { Task } from '~interfaces'

const Task = ({
  description,
  expiredAt,
  photos,
  price,
  tags,
  classes,
}: TaskProps) => {
  return (
    <Card className={classes.cardContainer} elevation={1}>
      <Typography color="textPrimary">
        {description}
        <LineSeparator />
        <TagList tags={tags} />
        <LineSeparator />
        <PhotoList {...{ photos }} />
        <LineSeparator />
        <div className={classes.timePriceContainer}>
          <div className={classes.time}>
            <TimeIcon className={classes.indicatorIconLeft} />
            {distanceInWordsToNow(expiredAt, { locale })}
          </div>
          <div className={classes.price}>
            <MoneyIcon className={classes.indicatorIconRight} />
            {price}
          </div>
        </div>
        <LineSeparator />
        <ButtonContainer className={classes.buttonContainer}>
          <Button styleVariant="empty" className={classes.removeButton}>
            <DeleteIcon />
            Usuń
          </Button>
          <Button className={classes.editButton}>
            <EditIcon />
            Edytuj
          </Button>
        </ButtonContainer>
      </Typography>
    </Card>
  )
}

const styles: StyleRulesCallback = _ => ({
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto max-content',
  },
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
  buttonContainer: {
    marginTop: '2.5rem',
  },
})

interface TaskProps extends Task, WithStyles<typeof styles> {}

export default withStyles(styles)(Task)
