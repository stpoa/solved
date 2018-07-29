import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import React, { Fragment } from 'react'

const styles = createStyles({
  containerStyles: {
    height: '100%',
    position: 'absolute',
    width: '100%'
  }
})

interface SearchBarProps extends WithStyles <typeof styles> {
  searchBarVisible: boolean
}

const SearchBar = ({ searchBarVisible, classes: { containerStyles } }: SearchBarProps) => {
  if (searchBarVisible) {
    return (
      <div className={containerStyles}>
        Search
      </div>
    )
  } else {
    return <Fragment />
  }
}

export default withStyles(styles)(SearchBar)
