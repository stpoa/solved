import React, { Component } from 'react'
import { wait } from '~lib/time'
import Profile from '~pages/Profile/components/ProfilePrivate'
import { ProfilePrivateProps } from '../components/ProfilePrivate'

const fetchBalance = () => wait(2).then(() => 121)

export default class ProfileContainer extends Component<{}, ProfileContainerState> {
  public readonly state: ProfileContainerState = { balance: 0, loading: true }

  public render () {
    return (<Profile balance={this.state.balance}/>)
  }

  public async componentDidMount () {
    const balance = await fetchBalance()
    this.setState({ balance })
  }
}

interface ProfileContainerState extends ProfilePrivateProps { loading: boolean }
