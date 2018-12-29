import { ButtonProps } from '@material-ui/core/Button'
import { omit } from 'ramda'
import React, { FunctionComponent } from 'react'
import { Button } from '~generic'

interface StepButtonProps extends ButtonProps {
  isActive?: boolean
}

const StepButton: FunctionComponent<StepButtonProps> = props => {
  const style = { display: 'inlineBlock', margin: '1rem' }

  return props.isActive ? (
    <Button style={style} {...omit(['isActive', 'children'], props)}>
      {props.children!}
    </Button>
  ) : null
}

export default StepButton
