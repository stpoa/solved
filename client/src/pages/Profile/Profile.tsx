import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  StyleRulesCallback,
  Switch,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import {
  CreditCard,
  InfoOutlined,
  Settings,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from '@material-ui/icons'
import React, { FunctionComponent, useState } from 'react'
import { NavigationBar, PageHeader } from '~generic'
import avatar from '~icons/avatar.png'

const Profile: FunctionComponent<ProfileProps> = ({ classes }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const handleNotificationSwitch = (_: any, checked: boolean) => {
    setNotificationsEnabled(checked)
  }

  return (
    <>
      <PageHeader title="Profil" />
      <div className={classes.root}>
        <div
          className={[classes.group, classes.center, classes.profileGroup].join(
            ' ',
          )}
        >
          <img className={classes.avatar} src={avatar} />
          <div>
            <Typography className={classes.nick} color="textPrimary">
              olgusia_olgusia
            </Typography>
            <Typography className={classes.email} color="textSecondary">
              olgusia_olgusia@krolowaswiata.com
            </Typography>
            <Typography className={classes.ratings}>
              100
              <ThumbUpOutlined color="action" />
              <ThumbDownOutlined color="action" />0
            </Typography>
          </div>
        </div>

        <div className={classes.group}>
          <List>
            <ListItem color="secondary" className={classes.category}>
              <ListItemIcon className={classes.icon}>
                <Settings />
              </ListItemIcon>
              <ListItemText>
                <span className={classes.categoryText}>Ustawienia</span>
              </ListItemText>
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemText>Zmień nick</ListItemText>
            </ListItem>

            <Divider />

            <ListItem button className={classes.nested}>
              <ListItemText>Zmień hasło</ListItemText>
            </ListItem>

            <Divider />

            <ListItem className={classes.nested}>
              <ListItemText primary="Powiadomienia" />
              <ListItemSecondaryAction>
                <Switch
                  onChange={handleNotificationSwitch}
                  checked={notificationsEnabled}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>

        <div className={classes.group}>
          <List>
            <ListItem color="secondary" className={classes.category}>
              <ListItemIcon className={classes.icon}>
                <CreditCard />
              </ListItemIcon>
              <ListItemText>
                <span className={classes.categoryText}>Płatności</span>
              </ListItemText>
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemText>Jak to działa</ListItemText>
            </ListItem>

            <Divider />

            <ListItem button className={classes.nested}>
              <ListItemText>Doładowanie konta</ListItemText>
            </ListItem>

            <Divider />

            <ListItem button className={classes.nested}>
              <ListItemText>Konfiguracja</ListItemText>
            </ListItem>
          </List>
        </div>

        <div className={classes.group}>
          <List>
            <ListItem color="secondary" className={classes.category}>
              <ListItemIcon className={classes.icon}>
                <InfoOutlined />
              </ListItemIcon>
              <ListItemText>
                <span className={classes.categoryText}>Aplikacja</span>
              </ListItemText>
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemText>Feedback</ListItemText>
            </ListItem>

            <Divider />

            <ListItem button className={classes.nested}>
              <ListItemText>O aplikacji</ListItemText>
            </ListItem>

            <Divider />

            <ListItem button className={classes.nested}>
              <ListItemText>Usuń konto</ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
      <NavigationBar />
    </>
  )
}

const styles: StyleRulesCallback = theme => ({
  balance: {
    fontSize: '10em',
  },
  root: {
    // margin: theme.spacing.unit,
  },
  title: {
    margin: theme.spacing.unit * 2,
  },
  titleText: {
    color: theme.palette.grey['700'],
  },
  nested: {
    paddingLeft: theme.spacing.unit * 7,
  },
  icon: {
    marginRight: 0,
    color: theme.palette.secondary.main,
  },
  category: {
    color: theme.palette.secondary.main,
  },
  categoryText: {
    color: theme.palette.secondary.main,
  },
  group: {
    backgroundColor: 'white',
    marginTop: '2rem',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '150px',
    margin: '0px auto',
  },
  center: {
    textAlign: 'center',
  },
  profileGroup: {
    padding: '2rem',
  },
  nick: {
    lineHeight: 2,
  },
  email: {
    lineHeight: 3,
  },
  ratings: {
    display: 'grid',
    gridTemplateColumns: '1fr 0fr 0fr 1fr',
    color: theme.palette.text.primary,
    padding: '0 35%',
  },
})

export interface ProfileProps extends WithStyles<typeof styles> {
  balance?: number
  isPrivate?: boolean
}

export default withStyles(styles)(Profile)
