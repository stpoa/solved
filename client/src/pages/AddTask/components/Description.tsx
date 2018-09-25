import { TextField } from '@material-ui/core'
import { createStyles, StyleRules, withStyles, WithStyles } from '@material-ui/core/styles'
import React, { ChangeEventHandler, SFC } from 'react'

const Description: SFC<DescriptionProps> = ({ classes, onChange, value }) => (
  <TextField
    id="multiline-static"
    multiline
    rows="20"
    placeholder="Opis zadania"
    onChange={onChange}
    className={classes.description}
    InputProps={{ disableUnderline: true, style: { padding: 0 } }}
    value={value}
    margin="normal"
  />
)

const styles: StyleRules = createStyles({
  description: {
    margin: 0,
  },
})

export interface DescriptionProps extends WithStyles<typeof styles> {
  onChange: ChangeEventHandler<HTMLInputElement>,
  value: string
}

export default withStyles(styles)(Description)
