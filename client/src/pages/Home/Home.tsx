import { Button } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import React from 'react'
import { TaskList } from '~generic'

const now = new Date().getTime()

const tasks = [{
  category: 'Matematyka',
  expiredAt: now + 1000 * 60 * 100,
  price: 100,
  shortDescription: 'Rownanie różniczkowe analiza matematyczna',
  tags: ['rownania', 'analiza']
}, {
  category: 'Fizyka',
  expiredAt: now + 1000 * 60 * 10,
  price: 100,
  shortDescription: 'Masa marsa',
  tags: ['astrologia']
}, {
  category: 'Muzyka',
  expiredAt: now + 1000 * 60 * 10,
  price: 140,
  shortDescription: 'Odczytaj nuty i zagraj',
  tags: ['nuty']
}]

const styles = createStyles({
  containerStyles: {
    height: '100%'
  }
})

interface HomeProps extends WithStyles <typeof styles> {}

class Home extends React.Component <HomeProps> {
  public render () {
    const { containerStyles } = this.props.classes
    return (
      <div className={containerStyles}>
        <TaskList tasks={tasks} />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
