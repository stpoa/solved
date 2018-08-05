import { TextField } from '@material-ui/core'
import { createStyles, StyleRules, withStyles, WithStyles } from '@material-ui/core/styles'
import React, { ChangeEventHandler, SFC } from 'react'

const styles: StyleRules = createStyles({
})

export interface DescriptionProps extends WithStyles<typeof styles> {
  onChange: ChangeEventHandler<HTMLInputElement>,
  value: string
}

const Description: SFC<DescriptionProps> = ({ onChange, value }) => (
  <TextField
    id="multiline-static"
    multiline
    rows="20"
    placeholder="Opis zadania"
    onChange={onChange}
    style={{ margin: 0 }}
    InputProps={{ disableUnderline: true, style: { padding: 0 } }}
    value={value}
    margin="normal"
  />
)

export default withStyles(styles)(Description)
