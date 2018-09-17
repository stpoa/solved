import React, { Component } from 'react'
import { wait } from '~lib/time'
import ProfilePrivate, { ProfilePrivateProps } from '../components/ProfilePrivate'

const fetchBalance = () => wait(2).then(() => 121)

export default class ProfilePrivateContainer extends Component<{}, ProfileContainerState> {
  public readonly state: ProfileContainerState = { balance: 0, loading: true }

  public render () {
    return (<ProfilePrivate balance={this.state.balance}/>)
  }

  public async componentDidMount () {
    const balance = await fetchBalance()
    this.setState({ balance })
  }
}

type ProfileContainerState = ProfilePrivateProps & { loading: boolean }
