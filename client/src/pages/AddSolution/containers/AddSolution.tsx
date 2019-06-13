import {
  StyleRulesCallback,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles'
import React, { useState } from 'react'
import { PageHeader } from '~generic'
import { Step, StepList } from '~generic/Stepper'
import { ExtendedFile } from '~pages/CreateTask/components/TaskPhotoEdit'
import {
  validateDescriptionPage,
  validatePhotoPage,
} from '~pages/CreateTask/validations'
import { pageContentNotScrollableWithTopBar } from '~pages/styles'
import SolutionDescriptionEdit from '../components/SolutionDescriptionEdit'
import SolutionPhotoEdit from '../components/SolutionPhotoEdit'

const AddSolution = ({ classes }: AddSolutionProps) => {
  const [step, setStep] = useState(1)
  const [files, setFiles] = useState<ExtendedFile[]>([])
  const [description, setDescription] = useState('')

  const updateStep = setStep
  const onSubmitClick = () => window.alert('Submit')
  const onFilesUpdate = setFiles
  const onFilesLater = () => setStep(step + 1)
  const onDescriptionUpdate = ({ target: { value } }: any) =>
    setDescription(value)

  return (
    <>
      <PageHeader title="Dodaj rozwiązanie" />
      <div className={classes.container}>
        <StepList
          {...{ step, onSubmitClick, updateStep }}
          submitButtonName="Dodaj"
        >
          <Step isValid={validatePhotoPage(files)}>
            <SolutionPhotoEdit {...{ files, onFilesUpdate, onFilesLater }} />
          </Step>
          <Step isValid={validateDescriptionPage(description)}>
            <SolutionDescriptionEdit
              {...{ description, onDescriptionUpdate }}
            />
          </Step>
        </StepList>
      </div>
    </>
  )
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

export interface AddSolutionProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(AddSolution)
