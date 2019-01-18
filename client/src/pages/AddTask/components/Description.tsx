import { TextField } from '@material-ui/core'
import {
  createStyles,
  StyleRules,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import React, { ChangeEventHandler, FunctionComponent } from 'react'

const Description: FunctionComponent<DescriptionProps> = ({
  classes,
  onChange,
  value,
}) => {
  const InputProps = { disableUnderline: true, style: { padding: 0 } }

  return (
    <TextField
      id="multiline-static"
      multiline
      rows="20"
      placeholder="Opis zadania"
      className={classes.description}
      margin="normal"
      {...{ InputProps, value, onChange }}
    />
  )
}

const styles: StyleRules = createStyles({
  description: {
    margin: 0,
  },
})

export interface DescriptionProps extends WithStyles<typeof styles> {
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
}

export default withStyles(styles)(Description)
