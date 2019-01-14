import { StyleRulesCallback } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { PageHeader } from '~generic'
import { pageContentNotScrollableWithTopBar } from '~pages/styles'
import { OnChange } from '~typings/react'
import Step from '../components/Step'
import StepList from '../components/StepList'
import { TaskCategoryEdit } from '../components/TaskCategoryEdit'
import TaskDescriptionEdit from '../components/TaskDescriptionEdit'
import TaskPhotoEdit, { ExtendedFile } from '../components/TaskPhotoEdit'
import { TaskPriceTermEdit } from '../components/TaskPriceTermEdit'
import { TaskTagsEdit } from '../components/TaskTagsEdit'

const initialState = {
  step: 1,
  description: '',
  files: [] as ExtendedFile[],
}

class CreateTask extends Component<CreateTaskProps, CreateTaskState> {
  public readonly state: CreateTaskState = initialState

  public render() {
    const {
      props: { classes },
      state: { description, step, files },
      onDescriptionUpdate,
      onFilesUpdate,
      updateStep,
      onSubmitClick,
    } = this

    return (
      <>
        <PageHeader title="Nowe zadanie" />
        <div className={classes.container}>
          <StepList {...{ step, onSubmitClick, updateStep }}>
            <Step>
              <TaskDescriptionEdit {...{ description, onDescriptionUpdate }} />
            </Step>
            <Step>
              <TaskPhotoEdit files={files} onFilesUpdate={onFilesUpdate} />
            </Step>
            <Step>
              <TaskCategoryEdit />
            </Step>
            <Step>
              <TaskTagsEdit />
            </Step>
            <Step>
              <TaskPriceTermEdit />
            </Step>
          </StepList>
        </div>
      </>
    )
  }

  public onDescriptionUpdate: OnChange = e => {
    this.setState({ description: e.target.value })
  }

  public onFilesUpdate = (files: ExtendedFile[]) => this.setState({ files })

  public updateStep = (step: number) => {
    this.setState({ step })
  }

  public onSubmitClick = () => window.alert('Submit')
}

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

interface CreateTaskState extends Readonly<typeof initialState> {}
export interface CreateTaskProps extends WithStyles<typeof styles> {}
export default withStyles(styles)(CreateTask)
