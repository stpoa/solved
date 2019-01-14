import React, { Component } from 'react'
import { NavigationBar } from '~generic'
import Profile from '~generic/Profile/Profile'

export default class ProfilePublic extends Component<{}, {}> {
  public render() {
    return (
      <>
        <Profile />
        <NavigationBar />
      </>
    )
  }
}
