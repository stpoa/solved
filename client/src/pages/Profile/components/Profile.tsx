import React, { SFC } from 'react'

import Balance, { BalanceProps } from '../components/Balance'

const Profile: SFC<ProfileProps> = ({ balance }) => (
  <div>
    <Balance balance={balance}/>
  </div>
)

export type ProfileProps = BalanceProps

export default Profile
