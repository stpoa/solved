import {
  CardContent,
  StyleRulesCallback,
  TextField,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { ActionTypes } from '~/stores/CreateTask'
import SelectTags from '~generic/SelectTags'
import { useCreateTaskStore } from '~stores/CreateTask/connect'
import { OnChange } from '~typings/react'

const TaskTagsEdit: FunctionComponent<TaskTagsEditProps> = ({ classes }) => {
  const [store, dispatch] = useCreateTaskStore()

  const InputLabelProps = { shrink: true }

  const handleTagsQueryUpdate: OnChange = e => {
    const tagsQuery = e.target.value

    const tags = store.tags.map(tag =>
      tag.selected || tag.name.toLowerCase().includes(tagsQuery.toLowerCase())
        ? { ...tag, visible: true }
        : { ...tag, visible: false },
    )
    dispatch({ type: ActionTypes.updateTagsQuery, tagsQuery })
    dispatch({ type: ActionTypes.updateTags, tags })
  }

  const handleTagSelectionUpdate = (name: string) => () => {
    const clickedTag = store.tags.find(t => t.name === name)!

    if (clickedTag.selected) {
      const tags = store.tags.map(tag =>
        tag.name === name ? { ...tag, selected: false } : { ...tag },
      )
      dispatch({ type: ActionTypes.updateTags, tags })
    } else {
      const tags = store.tags.map(tag =>
        tag.name === name
          ? { ...tag, visible: true, selected: true }
          : { ...tag, visible: true },
      )
      dispatch({ type: ActionTypes.updateTagsQuery, tagsQuery: '' })
      dispatch({ type: ActionTypes.updateTags, tags })
    }
  }

  return (
    <CardContent className={classes.container}>
      <div className={classes.title}>
        <Typography variant="h3" component="h3">
          Tagi
          <hr className={classes.underline} />
        </Typography>
      </div>
      <div className={classes.search}>
        <TextField
          className={classes.input}
          label="Zacznij wpisywać"
          value={store.tagsQuery}
          onChange={handleTagsQueryUpdate}
          {...{ InputLabelProps }}
        />
      </div>
      <div className={classes.tags}>
        <SelectTags tags={store.tags} onTagSelect={handleTagSelectionUpdate} />
      </div>
    </CardContent>
  )
}

const styles: StyleRulesCallback = theme => ({
  container: {
    height: '100%',
    paddingBottom: '0 !important',
    display: 'grid',
    gridTemplateRows: 'auto auto minmax(10rem, 1fr)',
    gridGap: '2rem',
  },
  title: {
    textAlign: 'center',
  },
  search: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left',
    width: '100%',
  },
  tags: {
    overflowY: 'auto',
    overflowX: 'hidden',
    overflowScrolling: 'touch',
  },
  input: {
    width: '100%',
  },
  underline: {
    height: '1px',
    border: 'none',
    backgroundColor: theme.palette.grey[300],
  },
})

interface TaskTagsEditProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(TaskTagsEdit)
