import React, { SFC } from 'react'
import { NavLink } from 'react-router-dom'

const WrappedLink: SFC<any> = ({ children, wrapper: Wrapper, ...rest }) => {
  return (
    <Wrapper component={NavLink} {...rest}>
      {children}
    </Wrapper>
  )
}

export default WrappedLink
