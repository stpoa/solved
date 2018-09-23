import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import React, { SFC } from 'react'

const ProfileListButton: SFC<ProfileListButtonProps & Rest> = ({ handleListElementClick, Icon, text, ...rest }) => (
  <ListItem button onClick={handleListElementClick} {...rest}>
    <ListItemIcon><Icon/></ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
)

export interface ProfileListButtonProps {
  handleListElementClick: (event: React.MouseEvent<HTMLElement>) => void
  Icon: React.ComponentType
  text: string
}

interface Rest {
  className: string
}

export default ProfileListButton
