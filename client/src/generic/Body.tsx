import { createStyles, StyleRules, withStyles, WithStyles } from '@material-ui/core/styles'
import React, { SFC } from 'react'

const styles: StyleRules = createStyles({
  container: {
    height: 'calc(100vh - 64px)'
  }
})

interface IBodyProps extends WithStyles<typeof styles> {
  className?: string
}

const Body: SFC<IBodyProps> = ({ className, classes: { container }, children }) => (
  <div className={`${container} ${className || ''}`}>
    {children}
  </div>
)

export default withStyles(styles)(Body)
