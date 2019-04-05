import {
  Chip,
  StyleRulesCallback,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import React, { MouseEventHandler } from 'react'

const TagAdd = ({ classes, text, onClick, visible = true }: TagAddProps) => {
  return visible ? (
    <Chip label={'+ ' + text} onClick={onClick} className={classes.chip} />
  ) : null
}

const styles: StyleRulesCallback = theme => {
  return {
    chip: {
      backgroundColor: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.grey[400],
      fontSize: '1.4rem',
      height: '3.2rem',
      margin: theme.spacing.unit,
      padding: '0.5rem',
    },
  }
}

interface TagAddProps extends WithStyles<typeof styles> {
  onClick?: MouseEventHandler<HTMLElement>
  text?: string
  visible?: boolean
}

export default withStyles(styles)(TagAdd)
