import React from 'react'
import { render } from 'react-dom'
import App from './App'

const Root = () => <App />

const root = document.getElementById('root')
render(<Root />, root)
