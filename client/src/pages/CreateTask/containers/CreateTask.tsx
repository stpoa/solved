import { StyleRulesCallback } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import { tags as tagNames } from 'models/data'
import React, { FC, useState } from 'react'
import { PageHeader } from '~generic'
import { ExtendedFile } from '~generic/Photos'
import Step from '~generic/Stepper/Step'
import StepList from '~generic/Stepper/StepList'
import { pageContentNotScrollableWithTopBar } from '~pages/styles'
import { OnChange } from '~typings/react'
import TaskDescriptionEdit from '../components/TaskDescriptionEdit'
import TaskPhotoEdit from '../components/TaskPhotoEdit'
import TaskPriceTermEdit from '../components/TaskPriceTermEdit'
import TaskTagsEdit from '../components/TaskTagsEdit'
import {
  validateDescriptionPage,
  validatePhotoPage,
  validatePriceAndTermPage,
  validateTagsPage,
} from '../validations'

const CreateTask: FC<CreateTaskProps> = ({ classes }) => {
  const balance = 100 // TODO: Get this from props

  const [step, setStep] = useState(1)
  const [tags, setTags] = useState(
    tagNames.map(tag => ({ name: tag, selected: false, visible: true })),
  )
  const [tagsQuery, setTagsQuery] = useState('')
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState<ExtendedFile[]>([])
  const [startDate, setStartDate] = useState()
  const [finishDate, setFinishDate] = useState()
  const [price, setPrice] = useState()

  const onSubmitClick = () => window.alert('Submit')
  const updateStep = setStep
  const onDescriptionUpdate = ({ target: { value } }: any) =>
    setDescription(value)
  const onFilesUpdate = setFiles
  const onFilesLater = () => setStep(step + 1)

  const onTagSelectionUpdate = (name: string) => () => {
    const clickedTag = tags.find(t => t.name === name)!

    if (clickedTag.selected) {
      setTags(
        tags.map(tag =>
          tag.name === name ? { ...tag, selected: false } : { ...tag },
        ),
      )
    } else {
      setTags(
        tags.map(tag =>
          tag.name === name
            ? { ...tag, visible: true, selected: true }
            : { ...tag, visible: true },
        ),
      )
      setTagsQuery('')
    }
  }

  const onTagsQueryUpdate: OnChange = e => {
    const query = e.target.value

    setTags(
      tags.map(tag =>
        tag.selected || tag.name.toLowerCase().includes(tagsQuery.toLowerCase())
          ? { ...tag, visible: true }
          : { ...tag, visible: false },
      ),
    )
    setTagsQuery(query)
  }

  const onTagAdd = (name?: string) => () => {
    if (name) {
      const newTag = { name, selected: true, visible: true }
      setTags([
        ...tags.map(tag =>
          tag.name === name
            ? { ...tag, visible: true, selected: true }
            : { ...tag, visible: true },
        ),
        newTag,
      ])

      setTagsQuery('')
    }
  }

  const handleStartDateChange: OnChange = e => {
    const timeStamp = new Date(e.target.value).getTime()
    setStartDate(timeStamp)
  }

  const handleFinishDateChange: OnChange = e => {
    const timeStamp = new Date(e.target.value).getTime()
    setFinishDate(timeStamp)
  }

  const handlePriceChange: OnChange = e => setPrice(Number(e.target.value))

  return (
    <>
      <PageHeader title="Nowe zadanie" />
      <div className={classes.container}>
        <StepList
          {...{ step, onSubmitClick, updateStep }}
          submitButtonName="Utwórz"
        >
          <Step isValid={validateTagsPage(tags)}>
            <TaskTagsEdit
              {...{
                onTagSelectionUpdate,
                tags,
                onTagsQueryUpdate,
                tagsQuery,
                onTagAdd,
              }}
            />
          </Step>
          <Step isValid={validateDescriptionPage(description)}>
            <TaskDescriptionEdit {...{ description, onDescriptionUpdate }} />
          </Step>
          <Step isValid={validatePhotoPage(files)}>
            <TaskPhotoEdit {...{ files, onFilesUpdate, onFilesLater }} />
          </Step>
          <Step
            isValid={validatePriceAndTermPage(
              startDate,
              finishDate,
              price,
              balance,
            )}
          >
            <TaskPriceTermEdit
              {...{
                startDate,
                handleStartDateChange,
                finishDate,
                handleFinishDateChange,
                price,
                handlePriceChange,
                balance,
              }}
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

export interface CreateTaskProps extends WithStyles<typeof styles> {}
export default withStyles(styles)(CreateTask)
