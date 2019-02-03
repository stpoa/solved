import { StyleRulesCallback } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { PageHeader } from '~generic'
import { pageContentNotScrollableWithTopBar } from '~pages/styles'
import { reducer } from '~stores/CreateTask'
import { CreateTaskProvider } from '~stores/CreateTask/connect'
import Step from '../components/Step'
import StepList from '../components/StepList'
import TaskDescriptionEdit from '../components/TaskDescriptionEdit'
import TaskPhotoEdit from '../components/TaskPhotoEdit'
import TaskPriceTermEdit from '../components/TaskPriceTermEdit'
import TaskTagsEdit from '../components/TaskTagsEdit'

const CreateTask: FC<CreateTaskProps> = ({ classes }) => (
  <>
    <PageHeader title="Nowe zadanie" />
    <div className={classes.container}>
      <CreateTaskProvider {...{ reducer }}>
        <StepList>
          <Step>
            <TaskTagsEdit />
          </Step>
          <Step>
            <TaskDescriptionEdit />
          </Step>
          <Step>
            <TaskPhotoEdit />
          </Step>
          <Step>
            <TaskPriceTermEdit balance={100} />
          </Step>
        </StepList>
      </CreateTaskProvider>
    </div>
  </>
)
const styles: StyleRulesCallback = theme => ({
  container: {
    ...pageContentNotScrollableWithTopBar(theme),
    backgroundColor: theme.palette.background.paper,
    padding: '0',
  },
  form: {
    margin: '0 auto',
    marginTop: '4em',
    textAlign: 'center',
    width: '50%',
  },
  submitButton: {
    display: 'inline',
    marginTop: '2em',
  },
  thumbIcon: {
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: '20px',
    margin: '0 auto',
    padding: '1em',
    textAlign: 'center',
  },
})

export interface CreateTaskProps extends WithStyles<typeof styles> {}
export default withStyles(styles)(CreateTask)
