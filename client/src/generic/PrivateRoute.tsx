import React, { ComponentType } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { withAuth, WithAuth } from '~auth'
import { isDevelopment } from '~lib/env'

const PrivateRoute = ({
  auth: { signedIn },
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const renderComponentOrRedirect = () =>
    signedIn ? <Component /> : <Redirect to="/sign-in" />

  if (isDevelopment()) {
    return <Route {...{ ...rest, component: Component }} />
  }

  return <Route {...rest} render={renderComponentOrRedirect} />
}

interface PrivateRouteProps extends WithAuth, RouteProps {
  component: ComponentType<{}>
}

export default withAuth(PrivateRoute)
