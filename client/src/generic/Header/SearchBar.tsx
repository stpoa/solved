import { Input } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import React, { SFC } from 'react'

const SearchBar: SFC<SearchBarProps> = ({ classes: { containerStyles } }) => (
  <div className={containerStyles}>
    <Input disableUnderline fullWidth />
  </div>
)

const styles = createStyles({
  containerStyles: {
    width: '100%'
  }
})

interface SearchBarProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(SearchBar)
