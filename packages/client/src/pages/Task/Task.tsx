import tasksData from '@stpoa/models/data/tasks'
import { Task as TaskData } from '@stpoa/models/interfaces'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { withAuth, WithAuth } from '~auth'
import { NavigationBar, PageHeader } from '~generic'
import LoadingOverlay from '~generic/LoadingOverlay'
import Task from '~generic/Task/components/Task'
import { useQuery } from '~hooks'

const TaskPage = ({ match, auth: { user } }: TaskPageProps) => {
  const taskId = match.params.id
  const GET_TASK = taskId + '?'

  const { data: task, error: errorTask, loading: loadingTask } = useQuery<
    TaskData
  >(GET_TASK, tasksData[Number(taskId) - 1])

  const Content = () => {
    if (errorTask) {
      return <div>Error</div>
    }

    return loadingTask || !task ? (
      <LoadingOverlay />
    ) : (
      <Task {...{ task, user }} />
    )
  }

  return (
    <>
      <PageHeader title={(task && task.category) || ''} />
      <Content />
      <NavigationBar />
    </>
  )
}

export default withAuth(TaskPage)

interface RouteParams {
  id: string
}

interface TaskPageProps extends RouteComponentProps<RouteParams>, WithAuth {}
