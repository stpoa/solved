import React, { ComponentType } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { withAuth, WithAuth } from '~auth'

const PrivateRoute = (
  { auth: { signedIn }, component: Component, ...rest }: PrivateRouteProps,
 ) => {
  const renderComponentOrRedirect = () => signedIn ? <Component /> : <Redirect to="/sign-in" />
  return <Route {...rest} render={renderComponentOrRedirect} />
}

interface PrivateRouteProps extends WithAuth, RouteProps {
  component: ComponentType<{}>
}

export default withAuth(PrivateRoute)
