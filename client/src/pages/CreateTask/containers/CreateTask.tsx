import { Button, IconButton, StyleRulesCallback, TextField } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { ThumbDown, ThumbUp } from '@material-ui/icons'
import React, { Component } from 'react'
import PageHeader from '~generic/PageHeader/PageHeader'
import Stepper from '../components/Stepper'
import { StepList } from '../components/StepList';
import { Step } from '../components/Step';

const defaultPositiveReviewText = 'Wszystko ok. Polecam.'
const defaultNegativeReviewText = 'Nic nie jest ok. Nie polecam :('
const initialState = { isPositiveRating: true, reviewText: defaultPositiveReviewText }
const isEdited = (review: string) => review !== defaultNegativeReviewText && review !== defaultPositiveReviewText
const onSubmitClick = () => window.alert('Submit');

class Rate extends Component<RateProps, RateState> {

  public readonly state: RateState = initialState

  public render () {
    const { classes } = this.props

    const thumbUpColor = this.state.isPositiveRating ? 'default' : 'secondary'
    const thumbDownColor = this.state.isPositiveRating ? 'secondary' : 'default'

    return (
      <div className={classes.container}>

        <PageHeader title="Nowe zadanie"/>
        {/* <Stepper /> */}
        <StepList onSubmitClick={onSubmitClick}>
          <Step key={0} />
          <Step key={1} />
        </StepList>

        <div style={{ marginTop: '8em' }}>
         <IconButton
           onClick={this.handleClickThumbDown}
           style={{ paddingTop: '6%' }}
           color={thumbUpColor}
           className={classes.thumbIcon}
         >
           <ThumbDown className={classes.thumbIcon}/>
         </IconButton>

         <IconButton
           onClick={this.handleClickThumbUp}
           style={{ paddingBottom: '6%' }}
           color={thumbDownColor}
           className={classes.thumbIcon}
         >
           <ThumbUp className={classes.thumbIcon}/>
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
            value={this.state.reviewText}
            onChange={this.handleTextInput}
          />

          <Button variant="contained" color="secondary" className={classes.submitButton}>
            Oceń
          </Button>

        </form>

      </div>
    )
  }

  private handleClickThumbUp = () => {
    this.setState(({ isPositiveRating, reviewText }) => {
      if (isPositiveRating) return null

      return {
        isPositiveRating: true,
        reviewText: isEdited(reviewText) ? reviewText : defaultPositiveReviewText,
      }
    })
  }

  private handleClickThumbDown = () => {
    this.setState(({ isPositiveRating, reviewText }) => {
      if (!isPositiveRating) return null

      return {
        isPositiveRating: false,
        reviewText: isEdited(reviewText) ? reviewText : defaultNegativeReviewText,
      }
    })
  }

  private handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ reviewText: e.target.value })
}

const styles: StyleRulesCallback = theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: '0',
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
  title: {
    fontSize: '20px',
    margin: '0 auto',
    padding: '1em',
    textAlign: 'center',
  },
})

type RateState = Readonly<typeof initialState>

export interface RateProps extends WithStyles<typeof styles> {}
export default withStyles(styles)(Rate)
