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
            >
              Dalej
            </Button>
          )}
          {displaySubmit && (
            <Button
              className={props.classes.button}
              variant="extendedFab"
              onClick={submit}
            >
              Utwórz
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
  isActive?: boolean
  displayPrevious?: boolean
  displayNext?: boolean
  displaySubmit?: boolean
  component?: React.ComponentClass
  goToPreviousStep?: () => void
  goToNextStep?: () => void
  submit?: () => void
}

export interface StepItem {
  stepperState: { [key: string]: any }
  onUpdateStepperState: () => void
}

export default withStyles(styles)(Step)
