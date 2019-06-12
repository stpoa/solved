import React, { ComponentType } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { withAuth, WithAuth } from '~auth'

const PrivateRoute = ({
  auth: { signedIn },
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const renderComponentOrRedirect = () =>
    signedIn ? <Component /> : <Redirect to="/sign-in" />

  return <Route {...rest} render={renderComponentOrRedirect} />
}

export const PrivateRouteWithAuth = withAuth(
  ({ auth, component: Component, ...rest }: PrivateRouteWithAuthProps) => {
    const renderComponentOrRedirect = () =>
      auth.signedIn ? <Component auth={auth} /> : <Redirect to="/sign-in" />

    return <Route {...rest} render={renderComponentOrRedirect} />
  },
)

interface PrivateRouteProps extends WithAuth, RouteProps {
  component: ComponentType<{}>
}

interface PrivateRouteWithAuthProps extends WithAuth, RouteProps {
  component: ComponentType<any>
}

export default withAuth(PrivateRoute)
