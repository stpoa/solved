import { Button } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import React from 'react'

const styles = createStyles({
  containerStyles: {
    height: '100%'
  }
})

interface IHomeProps extends WithStyles <typeof styles> {}

class Home extends React.Component <IHomeProps> {
  public render () {
    const { containerStyles } = this.props.classes
    return (
      <div className={containerStyles}>
        Home Page
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
