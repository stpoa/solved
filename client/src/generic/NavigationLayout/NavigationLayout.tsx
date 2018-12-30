import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { NavigationBar, PageHeader } from '~generic'

const NavigationLayout: FunctionComponent<NavigationBarProps> = ({
  classes,
  children,
  title,
  withTopNavigation,
  withBottomNavigation,
}) => (
  <div className={classes.container}>
    {withTopNavigation && (
      <div className={classes.topNavigation}>
        <div className={classes.navSpacing} />
        <PageHeader title={withTopNavigation && title} />
      </div>
    )}
    <div className={classes.content}>{children}</div>
    {withBottomNavigation && (
      <div className={classes.bottomNavigation}>
        <div className={classes.navSpacing} />
        <NavigationBar />
      </div>
    )}
  </div>
)

const styles = ({ mixins }: Theme) =>
  createStyles({
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
    },
    topNavigation: {
      gridArea: 'topNavigation',
    },
    bottomNavigation: {
      gridArea: 'bottomNavigation',
    },
    navSpacing: mixins.toolbar,
  })

interface NavigationBarProps extends WithStyles<typeof styles> {
  title?: string
  withTopNavigation?: boolean
  withBottomNavigation?: boolean
}

export default withStyles(styles)(NavigationLayout)
