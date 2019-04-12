import { CssBaseline } from '@material-ui/core'
import React, { Fragment } from 'react'
import { render } from 'react-dom'
import App from '~App'

import './bootstrap'

const Root = () => (
  <Fragment>
    <CssBaseline />
    <App />
  </Fragment>
)

const root = document.getElementById('root')
render(<Root />, root)
