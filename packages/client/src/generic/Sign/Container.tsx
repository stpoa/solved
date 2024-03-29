import {
  StyleRulesCallback,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import React, { FC } from 'react'
import { NavigationBar } from '~generic'
import { pageContentNotScrollableWithNavigationBar } from '~pages/styles'

const Container: FC<ContainerProps> = ({ children, classes, header }) => (
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

// calculating each row height in terms of percentages
// the height values are taken from the design and divided by
// the height of the viewport in the design
// 56 / 2 is 1/2 height of the navigation
const gridTemplateRows = [
  100,
  48,
  70 - 56 / 2,
  52,
  34 - 8,
  52 + 56 / 2 + 8,
  57,
  19,
  103,
  48,
  24,
  19,
  98,
]
  .map(width => ((width / 724) * 100).toFixed(0) + '%')
  .join(' ')

const styles: StyleRulesCallback = theme => ({
  container: {
    ...pageContentNotScrollableWithNavigationBar(theme),
    height: '100%',
    width: '100%',
    padding: `0 ${theme.spacing.unit * 2}px 0`,
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
})

interface ContainerProps extends WithStyles<typeof styles> {
  header: string
}

export default withStyles(styles)(Container)
