import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useQuery } from '~data/hooks'
import taskData from '~data/task'
import usersData from '~data/users'
import { NavigationBar, PageHeader } from '~generic'
import Task from '~generic/Task/components/Task'
import { Task as TaskData, User as UserData } from '~interfaces'
import { random } from '~lib/math'

const TaskPage = ({ match }: TaskPageProps) => {
  const taskId = match.params.id
  const GET_TASK = taskId + '?'
  const GET_USER = '?'

  const { data: task, error: errorTask, loading: loadingTask } = useQuery<
    TaskData
  >(GET_TASK, taskData)

  const { data: user, error: errorUser, loading: loadingUser } = useQuery<
    UserData
  >(GET_USER, usersData[random(0)(4)])

  const Content = () => {
    if (errorTask || errorUser) {
      return <div>Error</div>
    }

    if (loadingTask || loadingUser || !task || !user) {
      return <div>Loading</div> // TODO: Create loading component
    }

    return <Task {...{ task, user }} />
  }

  return (
    <>
      <PageHeader title={(task && task.category) || ''} />
      <Content />
      <NavigationBar />
    </>
  )
}

export default TaskPage

interface RouteParams {
  id: string
}

interface TaskPageProps extends RouteComponentProps<RouteParams> {}
