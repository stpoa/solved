import {
  StyleRulesCallback,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import React, { FC } from 'react'
import { NavigationBar } from '~generic'
import { pageContentNotScrollableWithNavigationBar } from '~pages/styles'

const SignBaseContainer: FC<SignBaseContainerProps> = ({
  children,
  classes,
  header,
}) => (
  <div className={classes.container}>
    <div className={classes.header}>
      <Typography
        align="left"
        variant="h1"
        component="header"
        className={classes.headerItem}
      >
        {header}
      </Typography>
    </div>
    {children}
    <NavigationBar />
  </div>
)

const gridTemplateRows = [100, 48, 70, 52, 34, 52, 57, 19, 103, 48, 24, 19, 98]
  .map(width => ((width / 724) * 100).toFixed(0) + '%')
  .join(' ')

const styles: StyleRulesCallback = theme => {
  const paddingLeftAndRight = theme.spacing.unit * 2

  return {
    container: {
      ...pageContentNotScrollableWithNavigationBar(theme),
      height: '100%',
      width: '100%',
      padding: `0 ${paddingLeftAndRight}px 0 ${paddingLeftAndRight}px`,
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows,
    },
    header: {
      gridRow: '2',
      paddingLeft: '1rem',
    },
    headerItem: {
      fontSize: '2.8rem',
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
      paddingBottom: '4%',
      display: 'inline-block',
    },
  }
}

interface SignBaseContainerProps extends WithStyles<typeof styles> {
  header: string
}

export default withStyles(styles)(SignBaseContainer)
