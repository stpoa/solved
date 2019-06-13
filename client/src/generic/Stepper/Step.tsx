import {
  Button,
  Card,
  StyleRulesCallback,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const Step: FunctionComponent<StepProps> = props => {
  const {
    isActive,
    displayPrevious,
    displayNext,
    displaySubmit,
    component,
    children,
    goToPreviousStep,
    goToNextStep,
    submit,
    isValid,
    submitButtonName,
  } = props

  if (isActive === false) return null

  return (
    <Card className={props.classes.cardContainer} elevation={1}>
      <div className={props.classes.container}>
        <div>{component ? React.createElement(component) : children}</div>
        <div
          className={
            displayPrevious ? props.classes.buttons : props.classes.singleButton
          }
        >
          {displayPrevious && (
            <Button
              className={[
                props.classes.button,
                props.classes.reverseButton,
              ].join(' ')}
              variant="outlined"
              onClick={goToPreviousStep}
            >
              Wstecz
            </Button>
          )}
          {displayNext && (
            <Button
              className={props.classes.button}
              variant="extendedFab"
              onClick={goToNextStep}
              disabled={!isValid}
            >
              Dalej
            </Button>
          )}
          {displaySubmit && (
            <Button
              className={props.classes.button}
              variant="extendedFab"
              onClick={submit}
              disabled={!isValid}
            >
              {submitButtonName}
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

const styles: StyleRulesCallback = theme => ({
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto max-content',
  },
  cardContainer: {
    height: '100%',
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  singleButton: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: '0.5fr',
    padding: theme.spacing.unit,
  },
  buttons: {
    display: 'grid',
    gridColumnGap: '1rem',
    gridTemplateColumns: '1fr 1fr',
    padding: theme.spacing.unit,
  },
  reverseButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    borderRadius: '24px',
    borderWidth: '0.2vh',
  },
})

interface StepProps extends WithStyles<typeof styles> {
  isValid: boolean
  isActive?: boolean
  isPageVa?: boolean
  displayPrevious?: boolean
  displayNext?: boolean
  displaySubmit?: boolean
  component?: React.ComponentClass<any>
  goToPreviousStep?: () => void
  goToNextStep?: () => void
  submit?: () => void
  submitButtonName?: string
}

export interface StepItem {
  stepperState: { [key: string]: any }
  onUpdateStepperState: () => void
}

export default withStyles(styles)(Step)
