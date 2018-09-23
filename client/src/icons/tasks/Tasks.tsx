import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import React, { SFC } from 'react'
import SVGInline from 'react-svg-inline'
import tasksSvgIcon from './tasks-solid.svg'

const Tasks: SFC<TasksProps> = ({ classes, className }) => (
    <SVGInline className={`${classes.imageWrapper} ${className}`} width="24" svg={tasksSvgIcon} />
)

const styles = createStyles({
  imageWrapper: {
    display: 'flex'
  }
})

interface TasksProps extends WithStyles<typeof styles> {
  className: string,
}

export default withStyles(styles)(Tasks)
