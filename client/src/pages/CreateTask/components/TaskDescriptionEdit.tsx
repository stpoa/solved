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
import LineSeparator from '~generic/LineSeparator'
import { useCreateTaskStore } from '~stores/CreateTask/connect'
import { OnChange } from '~typings/react'

const TaskDescriptionEdit: FunctionComponent<TaskDescriptionEditProps> = ({
  classes,
}) => {
  const [{ description }, dispatch] = useCreateTaskStore()
  const handleDescriptionChange: OnChange = e =>
    dispatch({
      type: ActionTypes.updateDescription,
      payload: { description: e.target.value },
    })

  return (
    <CardContent className={classes.cardContent}>
      <Typography variant="h3" component="h3">
        Opis
        <LineSeparator />
      </Typography>

      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          fullWidth
          id="multiline-static"
          margin="normal"
          label="Tutaj wpisz lub wklej treść zadania"
          multiline
          value={description}
          onChange={handleDescriptionChange}
        />
      </form>
    </CardContent>
  )
}

const styles: StyleRulesCallback = theme => ({
  title: {
    textAlign: 'center',
    color: theme.palette.secondary.main,
  },
  cardContent: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'max-content minmax(200px, 50vh)',
  },
  form: {
    padding: '2rem',
    overflowY: 'auto',
    overflowX: 'hidden',
    overflowScrolling: 'touch',
  },
})

interface TaskDescriptionEditProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(TaskDescriptionEdit)
