import { tasks } from '@notowork/models/data'
import React, { FC } from 'react'
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
