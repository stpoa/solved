import { Input } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import React from 'react'

const styles = createStyles({
  containerStyles: {
    width: '100%'
  }
})

interface SearchBarProps extends WithStyles <typeof styles> {
}

const SearchBar = ({ classes: { containerStyles } }: SearchBarProps) => (
  <div className={containerStyles}>
    <Input disableUnderline fullWidth />
  </div>
)

export default withStyles(styles)(SearchBar)
