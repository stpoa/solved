import {
  CardContent,
  StyleRulesCallback,
  TextField,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import SelectTags, { TagValue } from '~generic/SelectTags'
import { OnChange } from '~typings/react'

const TaskTagsEdit: FunctionComponent<TaskTagsEditProps> = ({
  classes,
  tags,
  tagsQuery,
  onTagSelectionUpdate: onTagSelect,
  onTagsQueryUpdate,
  onTagAdd,
}) => {
  const InputLabelProps = { shrink: true }

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
          value={tagsQuery}
          onChange={onTagsQueryUpdate}
          {...{ InputLabelProps }}
        />
      </div>
      <div className={classes.tagsContainer}>
        <div className={classes.tags}>
          <SelectTags {...{ tags, tagsQuery, onTagSelect, onTagAdd }} />
        </div>
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
  tagsContainer: {
    overflowY: 'auto',
    overflowX: 'hidden',
    overflowScrolling: 'touch',
  },
  tags: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 0,
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

interface TaskTagsEditProps extends WithStyles<typeof styles> {
  tags: TagValue[]
  tagsQuery: string
  onTagSelectionUpdate: (tagName: string) => () => void
  onTagAdd: (tagName?: string) => () => void
  onTagsQueryUpdate: OnChange
}

export default withStyles(styles)(TaskTagsEdit)
