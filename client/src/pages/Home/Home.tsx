import React from 'react'
import { tasks } from '~data'
import { NavigationBar, TaskList } from '~generic'
import { pageWithBottomNavStyles } from '~pages/styles'

class Home extends React.Component<{}> {
  public render() {
    return (
      <div style={{ ...pageWithBottomNavStyles }}>
        <TaskList tasks={tasks} />
        <NavigationBar />
      </div>
    )
  }
}

export default Home
