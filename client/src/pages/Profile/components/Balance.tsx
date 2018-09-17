import React from 'react'

const Balance = ({ balance }: BalanceProps) => (
  <div>{balance}</div>
)

export interface BalanceProps {
  balance: number
}

export default Balance
