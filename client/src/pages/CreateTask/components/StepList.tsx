import { StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core'
import { range } from 'ramda'
import React, { FC } from 'react'
import { ActionTypes } from '~/stores/CreateTask'
import { useCreateTaskStore } from '~/stores/CreateTask/connect'
import { steps as orderedSteps } from '../containers/CreateTask'
import { validateCurrentPage } from '../validations'

const StepList: FC<StepListProps> = props => {
  const [store, dispatch] = useCreateTaskStore()
  const goToPreviousStep = () => {
    store.pageValid &&
      dispatch({
        type: ActionTypes.updatePageValidation,
        payload: { pageValid: false },
      })
    dispatch({
      type: ActionTypes.updateStep,
      payload: { step: store.step - 1 },
    })
  }

  const isPageValid = validateCurrentPage(store, orderedSteps)

  const goToNextStep = () => {
    if (isPageValid && !store.pageValid) {
      dispatch({
        type: ActionTypes.updateStep,
        payload: { step: store.step + 1 },
      })
      dispatch({
        type: ActionTypes.updatePageValidation,
        payload: { pageValid: false },
      })
    }
  }
  const submit = () => {
    if (isPageValid && !store.pageValid) {
      window.alert('Submit')
    }
  }

  const { classes, children } = props
  const totalSteps = children.length

  const steps = children.map((child, index) => {
    const step = index + 1
    return React.cloneElement(child, {
      key: step,
      isActive: step === store.step,
      displayPrevious: store.step > 1,
      displayNext: store.step < totalSteps,
      displaySubmit: store.step === totalSteps,
      goToPreviousStep,
      goToNextStep,
      submit,
      isPageValid,
    })
  })

  const className = (...names: string[]) => names.join(' ')

  const stepsIndicator = (
    <div className={classes.progressBar}>
      {range(1, totalSteps + 1).map(step => {
        const isActive = step <= store.step
        const isDisabled = step > store.step
        const disabledClass = isDisabled ? classes.disabled : ''
        const activeClass = isActive ? classes.active : ''

        return (
          <div
            key={step}
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
}

export default withStyles(styles)(StepList)
