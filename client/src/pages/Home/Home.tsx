import React from 'react'
import { tasks } from '~data'
import { TaskList } from '~generic'

class Home extends React.Component<{}> {
  public render() {
    return <TaskList tasks={tasks} />
  }
}

export default Home
