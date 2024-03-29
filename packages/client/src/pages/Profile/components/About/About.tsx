import { StyleRulesCallback, Typography, WithStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import MobileStepper from '@material-ui/core/MobileStepper'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { withStyles } from '@material-ui/styles'
import React, { FC } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { ScreenModal } from '~generic'
import { aboutText, images } from './data'

const About: FC<AboutProps> = ({ open, handleClose, classes }) => {
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = 3

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  function handleStepChange(step: number) {
    setActiveStep(step)
  }

  const backButton = (
    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
      <KeyboardArrowLeft />
    </Button>
  )

  const nextButton = (
    <Button
      size="small"
      onClick={handleNext}
      disabled={activeStep === maxSteps - 1}
    >
      <KeyboardArrowRight />
    </Button>
  )

  return (
    <ScreenModal {...{ open, handleClose }} titleText="O Aplikacji">
      <div className={classes.root}>
        <SwipeableViews
          axis={'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {aboutText.map((text, index) => (
            <div key={index}>
              <div className={classes.content}>
                <img className={classes.image} src={images[index]} />
                <Typography className={classes.contentText}>{text}</Typography>
              </div>
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.stepper}
          {...{ nextButton, backButton }}
        />
      </div>
    </ScreenModal>
  )
}

interface AboutProps extends WithStyles {
  open: boolean
  handleClose: () => void
}

const styles: StyleRulesCallback = _ => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: '4 rem',
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  image: {
    width: '250px',
    height: '250px',
  },
  content: {
    padding: '3rem',
    textAlign: 'center',
  },
  stepper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
})

export default withStyles(styles)(About)
