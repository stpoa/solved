import {
  Chip,
  StyleRulesCallback,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React, { MouseEventHandler } from 'react'

const TagAdd = ({ classes, text, onClick, visible = true }: TagAddProps) => {
  return visible ? (
    <Chip
      label={
        <>
          <Add className={classes.icon} /> {text}
        </>
      }
      onClick={onClick}
      className={classes.chip}
    />
  ) : null
}

const styles: StyleRulesCallback = theme => {
  return {
    chip: {
      backgroundColor: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.secondary.main,
      fontSize: '1.4rem',
      height: '3.2rem',
      margin: theme.spacing.unit,
      padding: '0.5rem',
    },
    icon: {
      color: theme.palette.secondary.main,
    },
  }
}

interface TagAddProps extends WithStyles<typeof styles> {
  onClick?: MouseEventHandler<HTMLElement>
  text?: string
  visible?: boolean
}

export default withStyles(styles)(TagAdd)
