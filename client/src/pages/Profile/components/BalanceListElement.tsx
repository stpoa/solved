import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet'

import React, { SFC } from 'react'

const BalanceListElement: SFC<BalanceListElementProps & RestProps> = ({ balance, ...rest }) => (
  <ListItem {...rest}>
    <ListItemIcon><AccountBalanceWallet /></ListItemIcon>
    <ListItemText>Balance: {balance}</ListItemText>
  </ListItem>
)

export interface BalanceListElementProps {
  balance: number
}

interface RestProps { className: string }

export default BalanceListElement
