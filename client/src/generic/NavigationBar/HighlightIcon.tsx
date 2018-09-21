import { createStyles, withStyles } from '@material-ui/core/styles'
import React, { ReactElement, SFC } from 'react'

const pathRegex = /^[\/][^/]*/

const HighlightIcon: SFC<any> = ({ children, classes }) =>
  children.map((child: ReactElement<any>, index: number) => {
    const expectedPath = child.props.to
    const actualPath = window.location.pathname.match(pathRegex)

    return actualPath && actualPath[0] === expectedPath
      ? <div key={index} className={classes.highlight}>{child}</div>
      : child
  })

const styles = createStyles({
  highlight: {
    color: '#4481EB'
  }
})

export default withStyles(styles)(HighlightIcon)
