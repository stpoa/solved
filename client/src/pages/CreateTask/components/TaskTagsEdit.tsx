import {
  Input,
  StyleRulesCallback,
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
  onTagSelectionUpdate,
  tagsQuery,
  onTagsQueryUpdate,
}) => {
  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h6"
        component="h2"
      >
        <div className={classes.search}>
          Search
          <Input value={tagsQuery} onChange={onTagsQueryUpdate} />
        </div>
        Tagi
      </Typography>
      <SelectTags {...{ tags }} onClick={onTagSelectionUpdate} />
    </div>
  )
}

const styles: StyleRulesCallback = () => ({
  title: {
    textAlign: 'center',
  },
  container: {},
})

interface TaskTagsEditProps extends WithStyles<typeof styles> {
  tags: TagValue[]
  tagsQuery: string
  onTagSelectionUpdate: (tagName: string) => () => void
  onTagsQueryUpdate: OnChange
}

export default withStyles(styles)(TaskTagsEdit)
