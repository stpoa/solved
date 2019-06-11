import React from 'react'
import { RouteComponentProps } from 'react-router'
import { withAuth, WithAuth } from '~auth'
import { useQuery } from '~data/hooks'
import tasksData from '~data/tasks'
import { NavigationBar, PageHeader } from '~generic'
import Task from '~generic/Task/components/Task'
import { Task as TaskData } from '~interfaces'

const TaskPage = ({ match, auth: { user } }: TaskPageProps) => {
  const taskId = match.params.id
  const GET_TASK = taskId + '?'

  const { data: task, error: errorTask, loading: loadingTask } = useQuery<
    TaskData
  >(GET_TASK, tasksData[0])

  const Content = () => {
    if (errorTask) {
      return <div>Error</div>
    }

    if (loadingTask || !task) {
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

export default withAuth(TaskPage)

interface RouteParams {
  id: string
}

interface TaskPageProps extends RouteComponentProps<RouteParams>, WithAuth {}
