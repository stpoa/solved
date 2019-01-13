import {
  AppBar,
  IconButton,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { ArrowBack } from '@material-ui/icons'
import { History } from 'history'
import React, { FunctionComponent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

const handleClick = (history: History) => () => history.goBack()

const PageHeader: FunctionComponent<PageHeaderProps> = ({
  classes,
  title,
  history,
}) => (
  <div className={classes.container}>
    <AppBar position="fixed">
      <Toolbar disableGutters>
        <IconButton className={classes.button} onClick={handleClick(history)}>
          <ArrowBack className={classes.backIcon} />
        </IconButton>
        <Typography className={classes.typography} align="center" variant="h6">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

const styles = ({ mixins }: Theme) =>
  createStyles({
    button: {
      zIndex: 1,
    },
    container: {
      ...mixins.toolbar,
    },
    backIcon: {
      fontSize: 32,
    },
    typography: {
      position: 'absolute',
      width: '100%',
    },
  })

interface PageHeaderProps
  extends RouteComponentProps<{}>,
    WithStyles<typeof styles> {
  title: string
}

export default withStyles(styles)(withRouter(PageHeader))
