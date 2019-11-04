import { Task as TaskData } from '@notowork/models/interfaces'
import gql from 'graphql-tag'
import React, { FC } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { NavigationBar, TaskList } from '~generic'
import LoadingOverlay from '~generic/LoadingOverlay'

const Home: FC<HomeProps> = () => {
  const GET_TASKS = gql`
    {
      tasks {
        id
        dateExpired
        category
        tags
        shortDescription
        price
      }
    }
  `

  const { data, error, loading } = useQuery<{ tasks: TaskData[] }>(GET_TASKS)
  const tasks = (data && data.tasks) || []

  return (
    <>
      <LoadingOverlay {...{ loading, error }}>
        <TaskList {...{ tasks }} />
      </LoadingOverlay>
      <NavigationBar />
    </>
  )
}

interface HomeProps {}

export default Home
