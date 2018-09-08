import React, { SFC } from 'react'
import { Link } from 'react-router-dom'

const WrappedLink: SFC<any> = ({ children, wrapper: Wrapper, ...rest }) => {
  return (
    <Wrapper component={Link} {...rest}>
      {children}
    </Wrapper>
  )
}

export default WrappedLink
