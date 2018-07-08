import { Button } from '@material-ui/core'
import React from 'react'

export default class Home extends React.Component {

  public render () {
    return (
      <div>
        Home Page
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    )
  }

}
