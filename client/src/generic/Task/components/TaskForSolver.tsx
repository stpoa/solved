import {
  Add as AddIcon,
  DoneAll as ConfirmIcon,
  Edit as EditIcon,
} from '@material-ui/icons'
import { Task as TaskData } from 'models/interfaces'
import React, { FC } from 'react'
import Button from '~generic/Buttons/Button'
import ButtonsContainer from '~generic/Buttons/ButtonsContainer'
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

  const addSolutionButtons = (
    <ButtonsContainer>
      <Button>
        <AddIcon />
        Dodaj
      </Button>
    </ButtonsContainer>
  )

  const taskStatus = getTaskStatus(task)

  const canEditSolution =
    taskStatus === TaskStatus.Taken || taskStatus === TaskStatus.Started

  return (
    <TaskBase {...{ task }}>
      {task.solution && <Solution solution={task.solution} />}
      {canEditSolution && task.solution![0]
        ? editSolutionButtons
        : addSolutionButtons}
    </TaskBase>
  )
}

interface TaskProps {
  task: TaskData
}

export default Task
