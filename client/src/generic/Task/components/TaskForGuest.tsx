import { StyleRulesCallback, withStyles } from '@material-ui/core'
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons'
import { WithStyles } from '@material-ui/styles'
import React from 'react'
import Button from '~generic/Buttons/Button'
import ButtonContainer from '~generic/Buttons/ButtonsContainer'
import { Task as TaskData } from '~interfaces'
import { logDebug } from '~lib/log'
import { getTaskStatus, TaskStatus } from '../utils'
import TaskBase from './TaskBase'

const Task = ({ task, classes }: TaskProps) => {
  const solveButtons = (
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

  return (
    <TaskBase {...{ task }}>
      {(() => {
        const taskStatus = getTaskStatus(task)
        logDebug({ taskStatus })

        if (taskStatus === TaskStatus.Created) {
          return solveButtons
        } else {
          return null
        }
      })()}
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
