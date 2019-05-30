import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useQuery } from '~data/hooks'
import taskData from '~data/task'
import { NavigationBar, PageHeader } from '~generic'
import Task from '~generic/Task'
import { Task as TaskData } from '~interfaces'

const TaskPage = ({ match }: TaskPageProps) => {
  const taskId = match.params.id
  const GET_TASK = taskId + '?' // TODO: Add query
  const { data: task, error, loading } = useQuery<TaskData>(GET_TASK, taskData)

  const Content = () => {
    if (error) {
      return <div>Error</div> // TODO: Create error component
    }

    if (loading || !task) {
      return <div>Loading</div> // TODO: Create loading component
    }

    return <Task {...task} />
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
