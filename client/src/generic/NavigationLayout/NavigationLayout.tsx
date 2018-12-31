import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { NavigationBar, PageHeader } from '~generic'

const NavigationLayout: FunctionComponent<NavigationLayoutProps> = ({
  classes,
  children,
  title,
  withTopNavigation,
  withBottomNavigation,
}) => (
  <div className={classes.container}>
    {withTopNavigation && (
      <div className={classes.topNavigation}>
        <PageHeader title={withTopNavigation && title} />
      </div>
    )}
    <div className={classes.content}>{children}</div>
    {withBottomNavigation && (
      <div className={classes.bottomNavigation}>
        <NavigationBar />
      </div>
    )}
  </div>
)

const styles = createStyles({
  container: {
    overflow: 'scroll',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: '"topNavigation" "content" "bottomNavigation"',
  },
  content: {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridArea: 'content',
    overflow: 'scroll',
  },
  topNavigation: {
    gridArea: 'topNavigation',
  },
  bottomNavigation: {
    gridArea: 'bottomNavigation',
  },
})

interface NavigationLayoutProps extends WithStyles<typeof styles> {
  title?: string
  withTopNavigation?: boolean
  withBottomNavigation?: boolean
}

export default withStyles(styles)(NavigationLayout)
