import { createStyles, List, ListSubheader, WithStyles, withStyles } from '@material-ui/core'
import { StyleRules } from '@material-ui/core/styles'
import React, { SFC } from 'react'
import BalanceListElement, { BalanceListElementProps } from './BalanceListElement'

const ProfilePrivate: SFC<ProfilePrivatePropsStyled> = ({ balance, classes }) => (
  <div className={classes.root}>
    <List subheader={<ListSubheader>Profile</ListSubheader>}>
      <BalanceListElement className={classes.balance} balance={balance}/>
    </List>
  </div>
)

const styles: StyleRules = createStyles({
  balance: {
    fontSize: '10em',
    position: 'absolute'
  },
  root: {}
})

export interface ProfilePrivateProps extends BalanceListElementProps {}
interface ProfilePrivatePropsStyled extends ProfilePrivateProps, WithStyles<typeof styles> {}

export default withStyles(styles)(ProfilePrivate)
