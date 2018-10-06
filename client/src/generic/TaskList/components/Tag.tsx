import { Chip, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core'
import React, { MouseEventHandler } from 'react'

const Tag = ({ classes, children, onClick, selected = false }: TagProps) => {
  const className = `${classes.chip} ${selected ? classes.selected : ''}`

  return (
    <Chip
      label={children}
      onClick={onClick}
      className={className}
    />
  )
}

const styles: StyleRulesCallback = theme => {
  const backgroundColor = theme.palette.secondary.light

  return ({
    chip: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: '0px 0px 4px 0px #000000',
      fontSize: '1.1rem',
      height: '2rem',
      margin: theme.spacing.unit,
    },
    selected: {
      '&:focus': {
        backgroundColor,
      },
      '&:hover': {
        backgroundColor,
      },
      backgroundColor,
    },
  })
}

interface TagProps extends WithStyles<typeof styles> {
  onClick?: MouseEventHandler<HTMLElement>,
  selected?: boolean,
  clickable?: boolean,
  children: string,
}

export default withStyles(styles)(Tag)
