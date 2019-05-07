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
import { termsAndConditionsText } from '~data/tasks'
import {
  ConfirmationDialog,
  NavigationBar,
  PageHeader,
  ScreenModal,
} from '~generic'
import avatar from '~icons/avatar.png'
import Feedback from '~pages/Profile/components/Feedback'

const Profile: FunctionComponent<ProfileProps> = ({ classes }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const handleNotificationSwitch = (_: any, checked: boolean) => {
    setNotificationsEnabled(checked)
  }
  enum modals {
    Logout = 'LOGOUT',
    DeleteAccount = 'DELETE_ACCOUNT',
    Notifications = 'NOTIFICATIONS',
    Terms = 'TERMS',
    Feedback = 'FEEDBACK',
    None = 'NONE',
  }
  const [modalVisible, setModalVisible] = useState<modals>(modals.None)
  const showModal = (modal: modals) => () => setModalVisible(modal)
  const hideModals = () => setModalVisible(modals.None)

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

            <ListItem button className={classes.nested}>
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
        handleConfirm={hideModals}
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
  fileInput: {
    display: 'none',
  },
})

export interface ProfileProps extends WithStyles<typeof styles> {
  balance?: number
  isPrivate?: boolean
}

export default withStyles(styles)(Profile)
