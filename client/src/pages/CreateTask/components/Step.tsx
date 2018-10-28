import { Button } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import { omit } from 'ramda'
import React, { SFC } from 'react'

interface StepProps {
  isActive: boolean
  displayPrevious: boolean,
  displayNext: boolean
  displaySubmit: boolean
  component: React.ComponentClass
  children: React.ReactNode
  goToPreviousStep: () => void
  goToNextStep: () => void
  submit: () => void
}

export const Step = (props: StepProps) => {
  const { isActive, displayPrevious, displayNext, displaySubmit, component,
          children, goToPreviousStep, goToNextStep, submit } = props

  if (isActive === false) return null

  return (
    <React.Fragment>
      {component ? React.createElement(component) : children}
      <StepButton
        isActive={displayPrevious}
        onClick={goToPreviousStep}
      />
      <StepButton
        isActive={displayNext}
        onClick={goToNextStep}
      />
      <StepButton isActive={displaySubmit} type="submit" onClick={submit} />
    </React.Fragment>
  )
}

interface StepButtonProps extends ButtonProps {
  isActive: boolean,
}

const StepButton: SFC<StepButtonProps> = props => (
  props.isActive ? <Button {...omit(['isActive'], props)} /> : null
)
