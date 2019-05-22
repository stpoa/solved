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
  const additionalStyles = {
    deleteIcon: classes.deleteIcon,
    label: classes.label,
  }
  const handleDelete = selected ? onClick : undefined
  return visible ? (
    <Chip
      classes={additionalStyles}
      label={text}
      onClick={onClick}
      className={className}
      onDelete={handleDelete}
    />
  ) : null
}

const styles: StyleRulesCallback = theme => {
  const borderColor = theme.palette.secondary.main

  const unSelectedTagStyles = {
    backgroundColor: 'white',
    border: `1px dashed ${borderColor}`,
  }
  const selectedTagStyles = {
    backgroundColor: 'white',
    border: `1px solid ${borderColor}`,
    color: theme.palette.secondary.main,
  }

  return {
    chip: {
      backgroundColor: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.grey[400],
      fontSize: '1.4rem',
      height: '3.2rem',
      margin: `${theme.spacing.unit}px 0.3rem`,
      padding: '0.5rem',
      '&:hover': unSelectedTagStyles,
      '&:focus': unSelectedTagStyles,
    },
    selected: {
      '&:focus': selectedTagStyles,
      '&:hover': selectedTagStyles,
      ...selectedTagStyles,
    },
    label: {
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
    },
    deleteIcon: {
      margin: 0,
      color: theme.palette.secondary.main,
      width: '2rem',
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
