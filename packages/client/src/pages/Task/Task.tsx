import { Task as TaskData } from '@notowork/models/interfaces'
import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { RouteComponentProps } from 'react-router'
import { withAuth, WithAuth } from '~auth'
import { NavigationBar, PageHeader } from '~generic'
import LoadingOverlay from '~generic/LoadingOverlay'
import Task from '~generic/Task/components/Task'

const TaskPage = ({ match, auth: { user } }: TaskPageProps) => {
  const taskId = match.params.id

  const GET_TASK = gql`
    query Task($id: String!) {
      task(id: $id) {
        id
        author
        solver
        solution {
          comment
          image
          dateCreated
        }
        dateCreated
        dateExpired
        dateAssigned
        dateStarted
        category
        tags
        description
        # shortDescription
        photos
        price
      }
    }
  `

  const result = useQuery<{ task: TaskData }>(GET_TASK, {
    variables: { id: taskId },
  })

  const { data, error, loading } = result

  const Content = () => {
    if (error) {
      return <div>Error</div>
    }

    return loading || !data ? (
      <LoadingOverlay />
    ) : (
      <Task {...{ task: { ...data.task }, user }} />
    )
  }

  return (
    <>
      <PageHeader title={(data && data.task.category) || ''} />
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
