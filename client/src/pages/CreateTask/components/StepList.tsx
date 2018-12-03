import { StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core'
import { Check } from '@material-ui/icons'
import { range } from 'ramda'
import React, { Component } from 'react'

class StepList extends Component<StepListProps, StepListState> {

  public state = {
    currentStep: 1,
    totalSteps: this.props.children.length,
  }

  public goToPreviousStep = () => this.setState(state => ({
    currentStep: state.currentStep - 1,
  }))

  public goToNextStep = () => this.setState(state => ({
    currentStep: state.currentStep + 1,
  }))

  public render () {
    const { currentStep, totalSteps } = this.state
    const { classes, children } = this.props

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
      <div className={classes.indicatorContainer}>
        {range(1, totalSteps + 1).map(step => {
          const isActive = step === currentStep
          const isDisabled = step > currentStep
          const disabledClass = isDisabled ? 'disabled' : ''
          const activeClass = isActive ? 'active' : ''
          const icon = isActive
            ? step
            : isDisabled ? '' : <Check />

          return (
            <div
              key={step}
              className={className(
                classes.indicator, disabledClass, activeClass,
              )}
            >
              <div className={classes.circle}>
                <span className={classes.current}>{icon}</span>
              </div>
            </div>
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
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'max-content auto',
  },
  circle: {
    background: theme.palette.secondary.main,
    width: '25px',
    height: '25px',
    borderRadius: '50%',
  },
  indicatorContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1.6rem',
    textAlign: 'center',
  },
  indicator: {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.body1.fontFamily,
    textAlign: 'center',
    lineHeight: '2.4rem',
    fontSize: '1.4rem',
    display: 'inline-block',
    width: '2.4rem',
    paddingRight: '2.4rem',
    height: '2.4rem',
    margin: '0px 0.8rem',
  },
  disabled: {
    color: theme.palette.grey[400],
    fill: theme.palette.grey[400],
  },
})

interface StepListProps extends WithStyles<typeof styles> {
  children: Array<React.ReactElement<any>>
  onSubmitClick: () => void
}

export default withStyles(styles)(StepList)

interface StepListState {
  currentStep: number
  totalSteps: number
}
