import { StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core'
import React, { FC } from 'react'
import Link from './Link'

const Advice: FC<AdviceProps> = ({ classes, text, linkText, linkTo }) => (
  <div className={classes.advice}>
    <span>
      {text}
      <Link to={linkTo}>{linkText}</Link>
    </span>
  </div>
)

const styles: StyleRulesCallback = () => ({
  advice: {
    textAlign: 'center',
    gridRow: '12',
  },
})

interface AdviceProps extends WithStyles<typeof styles> {
  text: string
  linkText: string
  linkTo: string
}

export default withStyles(styles)(Advice)
