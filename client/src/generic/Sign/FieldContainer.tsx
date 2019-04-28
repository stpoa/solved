import { StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core'
import React, { FC } from 'react'

const FieldContainer: FC<FieldContainerProps> = ({
  children,
  classes,
  secondary,
}) => (
  <div className={classes.fieldContainer} style={gridRow[secondary ? 6 : 4]}>
    {children}
  </div>
)

const gridRow = {
  4: { gridRow: 4 },
  6: { gridRow: 6 },
}

const styles: StyleRulesCallback = theme => ({
  fieldContainer: {
    fontSize: theme.typography.body2.fontSize,
  },
})

interface FieldContainerProps extends WithStyles<typeof styles> {
  secondary?: boolean
}

export default withStyles(styles)(FieldContainer)
