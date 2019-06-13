import { StyleRulesCallback, withStyles } from '@material-ui/core'
import {
  AssignmentTurnedIn as SolveIcon,
  MoneyOff as MoneyOffIcon,
} from '@material-ui/icons'
import { WithStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import Button from '~generic/Buttons/Button'
import ButtonContainer from '~generic/Buttons/ButtonsContainer'
import InfoDialog from '~generic/InfoDialog'
import { Task as TaskData } from '~interfaces'
import { getTaskStatus, TaskStatus } from '../utils'
import TaskBase from './TaskBase'

const Task = ({ task, classes, history }: TaskProps) => {
  const [isModalOpened, setModalOpened] = useState(false)
  const handleModalClose = () => {
    history.push('/task/' + task.id + '/add-solution')
    setModalOpened(false)
  }
  const handleOpenClick = () => setModalOpened(true)

  const title = 'Dodaj rozwiązania!'
  const text =
    'Dodaj zdjęcia rozwiązań wraz z odzielnym opisem każdego zdjęcia. Kolejne zdjęcie możesz dodać za pomocą przycisku "Edytuj". Po dodaniu wszystkich zdjęć prześlij ostateczne rozwiązanie za pomocą przycisku "Zatwierdź"'

  const solveButtons = (
    <>
      <ButtonContainer className={classes.buttonContainer}>
        <Button styleVariant="empty">
          <MoneyOffIcon />
          Negocjuj
        </Button>
        <Button onClick={handleOpenClick}>
          <SolveIcon />
          Rozwiąż
        </Button>
      </ButtonContainer>
      <InfoDialog
        {...{ title, text }}
        open={isModalOpened}
        handleClose={handleModalClose}
        confirmBtnName="Rozpocznij"
      />
    </>
  )

  return (
    <TaskBase {...{ task }}>
      {(() => {
        const taskStatus = getTaskStatus(task)

        if (taskStatus === TaskStatus.Created) {
          return <>{solveButtons}</>
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

interface TaskProps extends WithStyles<typeof styles>, RouteComponentProps<{}> {
  task: TaskData
}

export default withStyles(styles)(withRouter(Task))
