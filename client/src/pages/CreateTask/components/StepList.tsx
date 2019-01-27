import { StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core'
import { range } from 'ramda'
import React, { Component } from 'react'

class StepList extends Component<StepListProps, StepListState> {
  public goToPreviousStep = () => this.props.updateStep(this.props.step - 1)
  public goToNextStep = () => this.props.updateStep(this.props.step + 1)

  public render() {
    const { classes, children, step: currentStep } = this.props
    const totalSteps = children.length

    const steps = children.map((child, index) => {
      const step = index + 1

      return React.cloneElement(child, {
        key: step,
        isActive: step === currentStep,
        displayPrevious: currentStep > 1,
        displayNext: currentStep < totalSteps,
        displaySubmit: currentStep === totalSteps,
        goToPreviousStep: this.goToPreviousStep,
        goToNextStep: this.goToNextStep,
        submit: () => this.props.onSubmitClick(),
      })
    })

    const className = (...names: string[]) => names.join(' ')

    const stepsIndicator = (
      <div className={classes.progressBar}>
        {range(1, totalSteps + 1).map(step => {
          const isActive = step <= currentStep
          const isDisabled = step > currentStep
          const disabledClass = isDisabled ? classes.disabled : ''
          const activeClass = isActive ? classes.active : ''

          return (
            <div
              key={step}
              className={className(
                classes.indicator,
                disabledClass,
                activeClass,
              )}
            />
          )
        })}
      </div>
    )

    return (
      <div className={classes.container}>
        {stepsIndicator}
        {steps}
      </div>
    )
  }
}

const styles: StyleRulesCallback = theme => ({
  active: {
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: '100%',
    backgroundColor: theme.palette.primary.dark,
  },
  indicator: {
    height: '100%',
    width: '100%',
  },
  disabled: {
    color: theme.palette.grey[400],
    fill: theme.palette.grey[400],
  },
  progressBar: {
    marginBottom: '1.5rem',
    backgroundColor: theme.palette.grey[300],
    height: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
  },
})

interface StepListProps extends WithStyles<typeof styles> {
  children: Array<React.ReactElement<any>>
  onSubmitClick: () => void
  updateStep: (step: number) => void
  step: number
}

export default withStyles(styles)(StepList)

interface StepListState {
  currentStep: number
  totalSteps: number
}
