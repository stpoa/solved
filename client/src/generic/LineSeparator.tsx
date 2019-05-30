import { StyleRulesCallback, withStyles } from '@material-ui/core'
import { WithStyles } from '@material-ui/styles'
import React from 'react'

const LineSeparator = ({ classes }: LineSeparatorProps) => (
  <hr className={classes.underline} />
)

const styles: StyleRulesCallback = theme => ({
  underline: {
    height: '1px',
    border: 'none',
    backgroundColor: theme.palette.grey[300],
  },
})

interface LineSeparatorProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(LineSeparator)
