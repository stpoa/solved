import { StyleRulesCallback } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import PageHeader from '~generic/PageHeader/PageHeader'
import Step from '../components/Step'
import StepList from '../components/StepList'
import { TaskCategoryEdit } from '../components/TaskCategoryEdit'
import { TaskDescriptionEdit } from '../components/TaskDescriptionEdit'
import TaskPhotoEdit from '../components/TaskPhotoEdit'
import { TaskPriceTermEdit } from '../components/TaskPriceTermEdit'
import { TaskTagsEdit } from '../components/TaskTagsEdit'

const initialState = {}
const onSubmitClick = () => window.alert('Submit')

class CreateTask extends Component<CreateTaskProps, CreateTaskState> {

  public readonly state: CreateTaskState = initialState

  public render () {
    const { classes } = this.props

    return (
      <div className={classes.container}>

        <PageHeader title="Nowe zadanie"/>
        <StepList onSubmitClick={onSubmitClick}>
          <Step><TaskDescriptionEdit/></Step>
          <Step><TaskPhotoEdit/></Step>
          <Step><TaskCategoryEdit/></Step>
          <Step><TaskTagsEdit/></Step>
          <Step><TaskPriceTermEdit/></Step>
        </StepList>

      </div>
    )
  }
}

const styles: StyleRulesCallback = theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    display: 'grid',
    gridTemplateRows: 'max-content auto',
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

type CreateTaskState = Readonly<typeof initialState>

export interface CreateTaskProps extends WithStyles<typeof styles> {}
export default withStyles(styles)(CreateTask)
