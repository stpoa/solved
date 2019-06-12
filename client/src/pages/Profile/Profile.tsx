import {
  DialogContent,
  DialogContentText,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  StyleRulesCallback,
  Switch,
  Typography,
  withStyles,
  WithStyles,
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
import { WithAuth, withAuth } from '~auth'
import { termsAndConditionsText, users } from '~data'
import {
  ConfirmationDialog,
  NavigationBar,
  PageHeader,
  ScreenModal,
} from '~generic'
import avatar from '~icons/avatar.png'
import About from '~pages/Profile/components/About/About'
import ChangeNick from '~pages/Profile/components/ChangeNick'
import ChangePassword from '~pages/Profile/components/ChangePassword'
import Feedback from '~pages/Profile/components/Feedback'

const Profile: FunctionComponent<ProfileProps> = ({ classes, auth }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  enum modals {
    Logout = 'LOGOUT',
    DeleteAccount = 'DELETE_ACCOUNT',
    ChangeNick = 'CHANGE_NICK',
    ChangePassword = 'CHANGE_PASSWORD',
    Notifications = 'NOTIFICATIONS',
    Terms = 'TERMS',
    Feedback = 'FEEDBACK',
    About = 'ABOUT',
    None = 'NONE',
  }
  const [modalVisible, setModalVisible] = useState(modals.None)
  const [user] = useState(users[0])

  const handleNotificationSwitch = (_: any, checked: boolean) => {
    setNotificationsEnabled(checked)
  }
  const showModal = (modal: modals) => () => setModalVisible(modal)
  const hideModals = () => setModalVisible(modals.None)
  const handleLogout = () => {
    auth.signOut()
    hideModals()
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
              {user.nick}
            </Typography>
            <Typography className={classes.email} color="textSecondary">
              {user.email}
            </Typography>
            <Typography className={classes.ratings}>
              <div className={classes.raitingElement}>
                <div className={classes.raitingNumber}>843</div>
                <ThumbUpOutlined color="action" />
              </div>
              <div className={classes.raitingElement}>
                <ThumbDownOutlined color="action" />
                <div className={classes.raitingNumber}>134</div>
              </div>
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

            <ListItem
              button
              onClick={showModal(modals.ChangeNick)}
              className={classes.nested}
            >
              <ListItemText>Zmień nick</ListItemText>
            </ListItem>

            <Divider />

            <ListItem
              button
              onClick={showModal(modals.ChangePassword)}
              className={classes.nested}
            >
              <ListItemText>Zmień hasło</ListItemText>
            </ListItem>

            <Divider />

            <ListItem
              button
              className={classes.nested}
              onClick={showModal(modals.Notifications)}
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

            <ListItem
              button
              onClick={showModal(modals.Feedback)}
              className={classes.nested}
            >
              <ListItemText>Feedback</ListItemText>
            </ListItem>

            <Divider />

            <ListItem
              button
              onClick={showModal(modals.Terms)}
              className={classes.nested}
            >
              <ListItemText>Regulamin</ListItemText>
            </ListItem>

            <Divider />

            <ListItem
              button
              onClick={showModal(modals.About)}
              className={classes.nested}
            >
              <ListItemText>O aplikacji</ListItemText>
            </ListItem>

            <Divider />

            <ListItem
              button
              onClick={showModal(modals.DeleteAccount)}
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
              onClick={showModal(modals.Logout)}
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
        open={modalVisible === modals.DeleteAccount}
        handleClose={hideModals}
        handleConfirm={hideModals}
        titleText={'Usunięcie konta'}
        contentText={
          'Usunięcie konta wymaga potwierdzenia poprzez kliknięcie w link znajdujący się w wiadomości email. Czy chcesz otrzymać wiadomość z linkiem usuwającym konto?'
        }
        confirmText={'Wyślij email'}
      />

      <ConfirmationDialog
        open={modalVisible === modals.Logout}
        handleClose={hideModals}
        handleConfirm={handleLogout}
        confirmText={'Wyloguj'}
      />

      <ScreenModal
        open={modalVisible === modals.Notifications}
        handleClose={hideModals}
        titleText="Powiadomienia"
      >
        <List>
          <ListItem
            button
            className={classes.nested}
            onClick={showModal(modals.Notifications)}
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

      <ScreenModal
        open={modalVisible === modals.Terms}
        handleClose={showModal(modals.None)}
        titleText="Regulamin"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {termsAndConditionsText}
          </DialogContentText>
        </DialogContent>
      </ScreenModal>

      <Feedback
        open={modalVisible === modals.Feedback}
        handleClose={showModal(modals.None)}
      />

      <ChangeNick
        open={modalVisible === modals.ChangeNick}
        handleClose={showModal(modals.None)}
      />

      <ChangePassword
        open={modalVisible === modals.ChangePassword}
        handleClose={showModal(modals.None)}
      />

      <NavigationBar />

      <About
        open={modalVisible === modals.About}
        handleClose={showModal(modals.None)}
      />
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
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.text.primary,
  },
  raitingElement: {
    display: 'flex',
    margin: '1rem',
  },
  raitingNumber: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
  fileInput: {
    display: 'none',
  },
})

export interface ProfileProps extends WithStyles<typeof styles>, WithAuth {
  balance?: number
  isPrivate?: boolean
}

export default withAuth(withStyles(styles)(Profile))
