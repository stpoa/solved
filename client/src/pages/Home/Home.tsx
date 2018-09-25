import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import React from 'react'
import { tasks } from '~data'
import { TaskList } from '~generic'

class Home extends React.Component <HomeProps> {
  public render () {
    const { containerStyles } = this.props.classes
    return (
      <div className={containerStyles}>
        <TaskList tasks={tasks} />
      </div>
    )
  }
}

const styles = createStyles({
  containerStyles: {
    height: '100%',
  },
})

interface HomeProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(Home)
