import React, { SFC } from 'react'
import { tasks } from '~data'
import { TaskList } from '~generic'

const Home: SFC<{}> = () => (
  <TaskList tasks={tasks} />
)

export default Home
