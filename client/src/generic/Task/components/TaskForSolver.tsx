import { DoneAll as ConfirmIcon, Edit as EditIcon } from '@material-ui/icons'
import React, { FC } from 'react'
import Button from '~generic/Buttons/Button'
import ButtonsContainer from '~generic/Buttons/ButtonsContainer'
import { Task as TaskData } from '~interfaces'
import { getTaskStatus, TaskStatus } from '../utils'
import Solution from './Solution'
import TaskBase from './TaskBase'

const Task: FC<TaskProps> = ({ task }) => {
  const editSolutionButtons = (
    <ButtonsContainer>
      <Button styleVariant="empty">
        <EditIcon />
        Edytuj
      </Button>
      <Button>
        <ConfirmIcon />
        Zatwierdź
      </Button>
    </ButtonsContainer>
  )

  const taskStatus = getTaskStatus(task)

  const canEditSolution =
    taskStatus === TaskStatus.Taken || taskStatus === TaskStatus.Started

  return (
    <TaskBase {...{ task }}>
      {task.solution && <Solution solution={task.solution} />}
      {canEditSolution && editSolutionButtons}
    </TaskBase>
  )
}

interface TaskProps {
  task: TaskData
}

export default Task
