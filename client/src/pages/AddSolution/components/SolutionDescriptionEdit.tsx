import {
  CardContent,
  StyleRulesCallback,
  TextField,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import LineSeparator from '~generic/LineSeparator'
import { OnChange } from '~typings/react'

const SolutionDescriptionEdit: FunctionComponent<TaskDescriptionEditProps> = ({
  classes,
  description,
  onDescriptionUpdate,
}) => {
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
          label="Wskazówki do treści rozwiązania"
          multiline
          value={description}
          onChange={onDescriptionUpdate}
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

interface TaskDescriptionEditProps extends WithStyles<typeof styles> {
  description: string
  onDescriptionUpdate: OnChange
}

export default withStyles(styles)(SolutionDescriptionEdit)
