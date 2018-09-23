import React, { ComponentType } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { withAuth, WithAuth } from '~auth'

class PrivateRoute extends React.Component<PrivateRouteProps> {
  public render () {
    const { auth, component, ...rest } = this.props

    return <Route {...rest} render={this.renderComponent} />
  }

  private renderComponent: RouteProps['render'] = () => {
    const {
      auth,
      /* tslint:disable */
      // https://github.com/palantir/tslint/issues/2551
      component: Component
      /* tslint:enable */
    } = this.props

    return auth.signedIn ? <Component /> : <Redirect to="/sign-in" />
  }
}

interface PrivateRouteProps extends WithAuth, RouteProps {
  component: ComponentType<{}>
}

export default withAuth(PrivateRoute)
