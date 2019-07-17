import { WithStyles, withStyles } from '@material-ui/styles'
import React, { FC, ReactElement } from 'react'

const ButtonContainer: FC<ButtonContainerProps> = ({
  children,
  classes,
  className,
  ...props
}) => {
  const childrenWithStyles = React.Children.toArray(children)
    .filter(child => !!child)
    .map((child, i) =>
      React.cloneElement(child as ReactElement<any>, {
        style: { gridColumn: i + 1 },
      }),
    )

  return (
    <div {...props} className={[classes.container, className || ''].join(' ')}>
      {childrenWithStyles}
    </div>
  )
}

const styles = {
  container: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'auto',
    columnGap: '2rem',
  },
}

type ButtonContainerProps = WithStyles<typeof styles> & { className?: string }

export default withStyles(styles)(ButtonContainer)
