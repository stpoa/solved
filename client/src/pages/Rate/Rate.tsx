import {
  Button,
  IconButton,
  StyleRulesCallback,
  TextField,
} from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { ThumbDown, ThumbUp } from '@material-ui/icons'
import React, { FunctionComponent, useState } from 'react'
import { OnChange } from '~typings/react'

const defaultReview = {
  positive: 'Wszystko ok. Polecam.',
  negative: 'Nic nie jest ok. Nie polecam :(',
}

const initialState = {
  isPositiveRating: true,
  reviewText: defaultReview.positive,
}

const isEdited = (review: string) =>
  review !== defaultReview.negative && review !== defaultReview.positive

const Rate: FunctionComponent<RateProps> = ({ classes }) => {
  const [isPositive, updateIsPositive] = useState(initialState.isPositiveRating)
  const [reviewText, updateReviewText] = useState(initialState.reviewText)

  const handleClickThumbUp = () => {
    updateIsPositive(true)
    updateReviewText(prevReviewText =>
      isEdited(prevReviewText) ? prevReviewText : defaultReview.positive,
    )
  }

  const handleClickThumbDown = () => {
    updateIsPositive(false)
    updateReviewText(prevReviewText =>
      isEdited(prevReviewText) ? prevReviewText : defaultReview.negative,
    )
  }

  const handleTextInput: OnChange = e => {
    const { value } = e.target
    updateReviewText(value)
  }

  const handleSubmit = () => window.alert(reviewText)

  const thumbUpColor = isPositive ? 'default' : 'secondary'
  const thumbDownColor = isPositive ? 'secondary' : 'default'

  const style = { marginTop: '8em' }

  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        Oceń rozwiązującego
      </Typography>

      <div {...{ style }}>
        <IconButton
          onClick={handleClickThumbDown}
          color={thumbUpColor}
          className={[classes.thumbicon, classes.padTop].join(' ')}
        >
          <ThumbDown className={classes.thumbIcon} />
        </IconButton>

        <IconButton
          onClick={handleClickThumbUp}
          color={thumbDownColor}
          className={[classes.thumbicon, classes.padBottom].join(' ')}
        >
          <ThumbUp className={classes.thumbIcon} />
        </IconButton>
      </div>

      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="multiline-static"
          className={classes.textField}
          margin="normal"
          label="Napisz swoją opinie"
          multiline
          rows="4"
          value={reviewText}
          onChange={handleTextInput}
        />

        <Button
          variant="contained"
          color="secondary"
          className={classes.submitButton}
          onClick={handleSubmit}
        >
          Oceń
        </Button>
      </form>
    </div>
  )
}

const styles: StyleRulesCallback = theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: '1em',
  },
  form: {
    margin: '0 auto',
    marginTop: '4em',
    textAlign: 'center',
    width: '50%',
  },
  submitButton: {
    display: 'inline',
    marginTop: '2em',
  },
  thumbIcon: {
    height: '50%',
    width: '50%',
  },
  padTop: {
    paddingTop: '6%',
  },
  padBottom: {
    paddingBottom: '6%',
  },
  title: {
    fontSize: '20px',
    margin: '0 auto',
    padding: '1em',
    textAlign: 'center',
  },
})

export interface RateProps extends WithStyles<typeof styles> {}
export default withStyles(styles)(Rate)
