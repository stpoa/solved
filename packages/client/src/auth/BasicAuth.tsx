import { calculateHash } from '@notowork/lib/crypto'
import { isProduction } from '@notowork/lib/env'
import { areArraysEqual } from '@notowork/lib/fp'
import { logError } from '@notowork/lib/log'
import React, { FC, useState } from 'react'
import { OnChange } from '~typings/react'

const BasicAuth: FC = ({ children }) => {
  const [password, setPassword] = useState('')
  const [hash, setHash] = useState([0])

  const expectedHash: number[] = JSON.parse(
    '[61,62,195,184,126,72,40,107,86,111,70,68,97,81,37,39,86,51,38,79,242,243,37,234,113,162,234,133,8,117,100,180,113,66,184,95,252,66,82,196,23,183,7,46,105,104,241,124,182,69,196,57,191,46,131,82,169,235,238,152,132,154,113,172]',
  )

  if (isProduction() && !areArraysEqual(hash, expectedHash)) {
    const onChange: OnChange = e => {
      const { value } = e.target
      setPassword(value)
      calculateHash(value)
        .then(setHash)
        .catch(logError)
    }

    return (
      <div>
        <input
          type="password"
          name="password"
          value={password}
          {...{ onChange }}
        />
      </div>
    )
  }

  return <>{children}</>
}

export default BasicAuth
