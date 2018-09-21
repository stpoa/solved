import { createStyles, withStyles } from '@material-ui/core/styles'
import React, { ReactElement, SFC } from 'react'

const HighlightIcon: SFC<any> = ({ children, classes }) =>
  children.map((child: ReactElement<any>, index: number) => {
    const { selected } = child.props
    return selected ?
      <div key={index} className={classes.highlight}>{child}</div> : child
  })

const styles = createStyles({
  highlight: {
    color: '#4481EB'
  }
})

export default withStyles(styles)(HighlightIcon)
