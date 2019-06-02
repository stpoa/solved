import React from 'react'
import { Task as TaskData, User as UserData } from '~interfaces'
import { getUserType, UserType } from '../utils'
import TaskForAuthor from './TaskForAuthor'
import TaskForGuest from './TaskForGuest'
import TaskForSolver from './TaskForSolver'

const Task = ({ task, user }: TaskProps) => {
  const userType = getUserType(task)(user)

  if (userType === UserType.Guest) {
    return <TaskForGuest {...{ task }} />
  } else if (userType === UserType.Author) {
    return <TaskForAuthor {...{ task }} />
  } else if (userType === UserType.Solver) {
    return <TaskForSolver {...{ task }} />
  } else {
    return null
  }
}

interface TaskProps {
  task: TaskData
  user: UserData
}

export default Task
