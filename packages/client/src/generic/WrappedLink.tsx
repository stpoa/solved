import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'

const WrappedLink: FunctionComponent<any> = ({
  children,
  wrapper: Wrapper,
  ...rest
}) => {
  return (
    <Wrapper component={NavLink} {...rest}>
      {children}
    </Wrapper>
  )
}

export default WrappedLink
