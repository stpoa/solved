import React, { Component } from 'react'
import Profile, { ProfileProps } from '~generic/Profile/Profile'
import { wait } from '~lib/time'

const fetchBalance = () => wait(2).then(() => 121)

export default class ProfilePrivate extends Component<{}, ProfilePrivateState> {
  public readonly state: ProfilePrivateState = { balance: 0, loading: true }

  public render () {
    return (<Profile isPrivate balance={this.state.balance}/>)
  }

  public async componentDidMount () {
    const balance = await fetchBalance()
    this.setState({ balance })
  }
}

type ProfilePrivateState = Omit<ProfileProps, 'isPrivate'> & { loading: boolean }
