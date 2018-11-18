import { StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core'
import React, { SFC } from 'react'
import StepButton from './StepButton'

const Step: SFC<StepProps> = props => {
  const { isActive, displayPrevious, displayNext, displaySubmit, component,
          children, goToPreviousStep, goToNextStep, submit } = props

  if (isActive === false) return null

  return (
    <div className={props.classes.container}>
      <div className={props.classes.stepContainer}>
        {component ? React.createElement(component) : children}
      </div>
      <div className={props.classes.buttons}>
        <StepButton
          key={0}
          isActive={displayPrevious}
          onClick={goToPreviousStep}
        >
          prev
        </StepButton>
        <StepButton
          key={1}
          isActive={displayNext}
          onClick={goToNextStep}
        >
        next
        </StepButton>
        <StepButton
          key={2}
          isActive={displaySubmit}
          type="submit"
          onClick={submit}
        >
          Submit
        </StepButton>
      </div>
   </div>
  )
}

const styles: StyleRulesCallback = () => ({
  stepContainer: {
    minHeight: '66vh',
  },
  buttons: {
    textAlign: 'center',
  },
})

interface StepProps extends WithStyles<typeof styles> {
  isActive?: boolean
  displayPrevious?: boolean,
  displayNext?: boolean
  displaySubmit?: boolean
  component?: React.ComponentClass
  goToPreviousStep?: () => void
  goToNextStep?: () => void
  submit?: () => void
}

export default withStyles(styles)(Step)
