import { StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core'
import { range } from 'ramda'
import React, { Children, FC, ReactElement } from 'react'

const StepList: FC<StepListProps> = ({
  step,
  updateStep,
  onSubmitClick,
  classes,
  children,
  submitButtonName,
}) => {
  const goToPreviousStep = () => {
    updateStep(step - 1)
  }

  const goToNextStep = () => {
    updateStep(step + 1)
  }

  const totalSteps = children.length

  const steps = Children.toArray(children).map((child, index) => {
    const s = index + 1

    return React.cloneElement(child as ReactElement<any>, {
      key: s,
      isActive: s === step,
      displayPrevious: step > 1,
      displayNext: step < totalSteps,
      displaySubmit: step === totalSteps,
      goToPreviousStep,
      goToNextStep,
      submit: onSubmitClick,
      submitButtonName,
    })
  })

  const className = (...names: string[]) => names.join(' ')

  const stepsIndicator = (
    <div className={classes.progressBar}>
      {range(1, totalSteps + 1).map(s => {
        const isActive = s <= step
        const isDisabled = s > step
        const disabledClass = isDisabled ? classes.disabled : ''
        const activeClass = isActive ? classes.active : ''

        return (
          <div
            key={s}
            className={className(classes.indicator, disabledClass, activeClass)}
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
  submitButtonName: string
}

export default withStyles(styles)(StepList)
