import React, { Component } from 'react'

interface StepListProps {
  children: Array<React.ReactElement<any>>,
}

interface StepListState {
  currentStep: number
  totalSteps: number
}

class StepList extends Component<StepListProps, StepListState> {
  constructor (props: StepListProps) {
    super(props)

    this.state = {
      currentStep: 0,
      totalSteps: this.props.children.length,
    }
  }

  public goToPreviousStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 })
  }

  public goToNextStep = () => {
    this.setState({ currentStep: this.state.currentStep + 1 })
  }

  public render () {
    const children = this.props.children.map((child, index) => {
      const { currentStep, totalSteps } = this.state
      console.log(index, currentStep === totalSteps)

      return React.cloneElement(child, {
        isActive: index === currentStep,
        displayPrevious: currentStep > 0,
        displayNext: currentStep < totalSteps,
        displaySubmit: currentStep === totalSteps,
        goToPreviousStep: () => this.goToPreviousStep(),
        goToNextStep: () => this.goToNextStep(),
      })
    })

    return children
  }
}

export { StepList }
