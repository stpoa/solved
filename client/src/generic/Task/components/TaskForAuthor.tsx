import { StyleRulesCallback, withStyles } from '@material-ui/core'
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons'
import { WithStyles } from '@material-ui/styles'
import React from 'react'
import Button from '~generic/Buttons/Button'
import ButtonContainer from '~generic/Buttons/ButtonsContainer'
import { Task as TaskData } from '~interfaces'
import { getTaskStatus, TaskStatus } from '../utils'
import Solution from './Solution'
import TaskBase from './TaskBase'

const Task = ({ task, classes }: TaskProps) => {
  const editButtons = (
    <ButtonContainer className={classes.buttonContainer}>
      <Button styleVariant="empty">
        <DeleteIcon />
        Usuń
      </Button>
      <Button>
        <EditIcon />
        Edytuj
      </Button>
    </ButtonContainer>
  )

  const rateButtons = (
    <ButtonContainer className={classes.buttonContainer}>
      <Button styleVariant="empty">
        <DeleteIcon />
        Oceń
      </Button>
    </ButtonContainer>
  )

  return (
    <TaskBase {...{ task }}>
      {(() => {
        const taskStatus = getTaskStatus(task)
        if (
          taskStatus === TaskStatus.Created ||
          taskStatus === TaskStatus.Taken
        ) {
          return editButtons
        } else if (taskStatus === TaskStatus.Ended) {
          return rateButtons
        } else {
          return null
        }
      })()}
      {task.solution && <Solution solution={task.solution} />}
    </TaskBase>
  )
}

const styles: StyleRulesCallback = _ => ({
  buttonContainer: {
    marginTop: '2.5rem',
  },
})

interface TaskProps extends WithStyles<typeof styles> {
  task: TaskData
}

export default withStyles(styles)(Task)
