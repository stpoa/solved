import React, { FC } from 'react'
import { Task as TaskData } from '~interfaces'
import TaskBase from './TaskBase'

const Task: FC<TaskProps> = ({ task }) => {
  return <TaskBase {...{ task }} />
}

interface TaskProps {
  task: TaskData
}

export default Task
