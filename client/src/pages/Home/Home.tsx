import React, { FC } from 'react'
import { tasks } from '~data'
import { NavigationBar, TaskList } from '~generic'

const Home: FC<HomeProps> = () => {
  return (
    <>
      <TaskList tasks={tasks} />
      <NavigationBar />
    </>
  )
}

interface HomeProps {}

export default Home
