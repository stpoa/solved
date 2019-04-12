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
  ExitToApp,
  InfoOutlined,
  Settings,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from '@material-ui/icons'
import React, { FunctionComponent, useState } from 'react'
import {
  ConfirmationDialog,
  NavigationBar,
  PageHeader,
  ScreenModal,
} from '~generic'
import avatar from '~icons/avatar.png'

const Profile: FunctionComponent<ProfileProps> = ({ classes }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [logoutModalVisible, setLogoutModalVisible] = useState(false)
  const [deleteAccountModalVisible, setDeleteAccountModalVisible] = useState(
    false,
  )
  const [notificationsModalVisible, setNotificationsModalVisible] = useState(
    false,
  )

  const handleNotificationSwitch = (_: any, checked: boolean) => {
    setNotificationsEnabled(checked)
  }
  const handleNotificationsButtonClick = () =>
    setNotificationsModalVisible(true)

  const handleLogoutClick = () => setLogoutModalVisible(true)
  const handleLogoutModalConfirm = () => setLogoutModalVisible(false)
  const handleLogoutModalClose = () => setLogoutModalVisible(false)

  const handleDeleteAccountClick = () => setDeleteAccountModalVisible(true)
  const handleDeleteAccountModalConfirm = () =>
    setDeleteAccountModalVisible(false)
  const handleDeleteAccountModalClose = () =>
    setDeleteAccountModalVisible(false)
  const handleNotificationsModalClose = () =>
    setNotificationsModalVisible(false)

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
              843
              <ThumbUpOutlined color="action" />
              <ThumbDownOutlined color="action" />
              134
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

            <ListItem
              button
              className={classes.nested}
              onClick={handleNotificationsButtonClick}
            >
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

            <ListItem
              button
              onClick={handleDeleteAccountClick}
              className={classes.nested}
            >
              <ListItemText>Usuń konto</ListItemText>
            </ListItem>
          </List>
        </div>

        <div className={classes.group}>
          <List>
            <ListItem
              button
              onClick={handleLogoutClick}
              color="secondary"
              className={classes.category}
            >
              <ListItemIcon className={classes.icon}>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText>
                <span className={classes.categoryText}>Wyloguj</span>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </div>

      <ConfirmationDialog
        open={deleteAccountModalVisible}
        handleClose={handleDeleteAccountModalClose}
        handleConfirm={handleDeleteAccountModalConfirm}
        titleText={'Usunięcie konta'}
        contentText={
          'Usunięcie konta wymaga potwierdzenia poprzez kliknięcie w link znajdujący się w wiadomości email. Czy chcesz otrzymać wiadomość z linkiem usuwającym konto?'
        }
        confirmText={'Wyślij email'}
      />

      <ConfirmationDialog
        open={logoutModalVisible}
        handleClose={handleLogoutModalClose}
        handleConfirm={handleLogoutModalConfirm}
        confirmText={'Wyloguj'}
      />

      <ScreenModal
        open={notificationsModalVisible}
        handleClose={handleNotificationsModalClose}
        titleText="Powiadomienia"
      >
        <List>
          <ListItem
            button
            className={classes.nested}
            onClick={handleNotificationsButtonClick}
          >
            <ListItemText primary="Powiadomienia" />
            <ListItemSecondaryAction>
              <Switch
                onChange={handleNotificationSwitch}
                checked={notificationsEnabled}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </ScreenModal>

      <NavigationBar />
    </>
  )
}

const styles: StyleRulesCallback = theme => ({
  balance: {
    fontSize: '10em',
  },
  root: {
    marginBottom: theme.spacing.unit * 6,
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
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    color: theme.palette.text.primary,
    padding: '0 35%',
  },
})

export interface ProfileProps extends WithStyles<typeof styles> {
  balance?: number
  isPrivate?: boolean
}

export default withStyles(styles)(Profile)
