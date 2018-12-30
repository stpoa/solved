import React from 'react'
import { tasks } from '~data'
import { NavigationLayout, TaskList } from '~generic'

class Home extends React.Component<{}> {
  public render() {
    return (
      <NavigationLayout withBottomNavigation>
        <TaskList tasks={tasks} />
      </NavigationLayout>
    )
  }
}

export default Home
