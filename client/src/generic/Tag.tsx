import {
  Chip,
  StyleRulesCallback,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import React, { MouseEventHandler } from 'react'

const Tag = ({
  classes,
  text,
  onClick,
  selected = false,
  visible = true,
}: TagProps) => {
  const className = `${classes.chip} ${selected ? classes.selected : ''}`

  return visible ? (
    <Chip label={text} onClick={onClick} className={className} />
  ) : null
}

const styles: StyleRulesCallback = theme => {
  const backgroundColor = theme.palette.secondary.main
  const borderColor = theme.palette.secondary.main

  return {
    chip: {
      backgroundColor: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.grey[400],
      fontSize: '1.4rem',
      height: '3.2rem',
      margin: `${theme.spacing.unit}px 0.3rem`,
      padding: '0.5rem',
    },
    selected: {
      '&:focus': {
        backgroundColor,
        borderColor,
      },
      '&:hover': {
        backgroundColor,
        borderColor,
      },
      backgroundColor,
      borderColor,
    },
  }
}

interface TagProps extends WithStyles<typeof styles> {
  onClick?: MouseEventHandler<HTMLElement>
  selected?: boolean
  clickable?: boolean
  visible?: boolean
  text: string
}

export default withStyles(styles)(Tag)
