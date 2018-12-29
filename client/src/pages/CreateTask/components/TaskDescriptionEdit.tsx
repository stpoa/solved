import {
  StyleRulesCallback,
  TextField,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const TaskDescriptionEdit: FunctionComponent<TaskDescriptionEditProps> = ({
  classes,
  description,
  onDescriptionUpdate,
}) => (
  <div className={classes.container}>
    <Typography
      className={classes.title}
      gutterBottom
      variant="h6"
      component="h2"
    >
      Opis
    </Typography>

    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        fullWidth
        id="multiline-static"
        className={classes.textField}
        margin="normal"
        label="Tutaj wpisz lub wklej treść zadania"
        multiline
        rows="4"
        value={description}
        onChange={onDescriptionUpdate}
      />
    </form>
  </div>
)

const styles: StyleRulesCallback = () => ({
  title: {
    textAlign: 'center',
  },
  container: {},
  form: {
    padding: '2rem',
  },
})

interface TaskDescriptionEditProps extends WithStyles<typeof styles> {
  description: string
  onDescriptionUpdate: (e: any) => void
}

export default withStyles(styles)(TaskDescriptionEdit)
