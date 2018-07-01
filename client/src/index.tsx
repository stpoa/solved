import * as React from 'react'
import { render } from 'react-dom'

import Home from './pages/Home/Home'

const Root = () =>
    <div>
        <div>Header</div>
        <Home />
        <div>Footer</div>
    </div>

// main
const root = document.getElementById('root')
render(<Root />, root)