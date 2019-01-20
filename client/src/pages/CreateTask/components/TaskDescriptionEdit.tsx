import {
  CardContent,
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
  <CardContent className={classes.cardContent}>
    <Typography variant="h3" component="h3">
      Opis
      <hr className={classes.underline} />
    </Typography>

    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        fullWidth
        id="multiline-static"
        margin="normal"
        label="Tutaj wpisz lub wklej treść zadania"
        multiline
        value={description}
        onChange={onDescriptionUpdate}
      />
    </form>
  </CardContent>
)

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
  underline: {
    height: '1px',
    border: 'none',
    backgroundColor: theme.palette.grey[300],
  },
})

interface TaskDescriptionEditProps extends WithStyles<typeof styles> {
  description: string
  onDescriptionUpdate: (e: any) => void
}

export default withStyles(styles)(TaskDescriptionEdit)
