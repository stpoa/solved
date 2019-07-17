import {
  DialogContent,
  StyleRulesCallback,
  TextField,
  Typography,
  WithStyles,
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { passwordValidator } from '@stpoa/lib/validators'
import React, { ChangeEvent, FC, useState } from 'react'
import { ScreenModal } from '~generic'
import Button from '~generic/Sign/Button'

const ChangePassword: FC<ChangePasswordProps> = ({
  open,
  handleClose,
  classes,
}) => {
  const [oldPassword, updateOldPassword] = useState()
  const [newPassword, updateNewPassword] = useState()

  const handleOldPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateOldPassword(e.target.value)

  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateNewPassword(e.target.value)

  const handleSubmit = () => ''

  const oldPasswordError = passwordValidator(oldPassword)
  const newPasswordError = passwordValidator(newPassword)
  const samePasswordError =
    oldPassword === newPassword
      ? 'Nowe hasło musi być inne niż stare hasło'
      : ''

  return (
    <ScreenModal {...{ open, handleClose }} titleText="Zmień hasło">
      <DialogContent>
        <TextField
          error={oldPassword !== undefined && !!oldPasswordError}
          helperText={oldPassword !== undefined && oldPasswordError}
          label="Stare hasło"
          required
          name="oldPassword"
          type="password"
          fullWidth
          onChange={handleOldPasswordChange}
          value={oldPassword}
          variant="outlined"
        />
        <TextField
          className={classes.newPasswordField}
          error={
            newPassword !== undefined &&
            (!!newPasswordError || !!samePasswordError)
          }
          helperText={
            newPassword !== undefined && (newPasswordError || samePasswordError)
          }
          label="Nowe hasło"
          required
          name="newPassword"
          type="password"
          fullWidth
          onChange={handleNewPasswordChange}
          value={newPassword}
          variant="outlined"
        />
        <Typography className={classes.passwordInfo}>
          Hasło powinno zawierać minimum 6 znaków, w tym jedną wielką literę i
          cyfrę
        </Typography>
        <div className={classes.button}>
          <Button
            disabled={!!oldPasswordError || !!samePasswordError}
            onClick={handleSubmit}
          >
            Zapisz
          </Button>
        </div>
      </DialogContent>
    </ScreenModal>
  )
}

interface ChangePasswordProps extends WithStyles {
  open: boolean
  handleClose: () => void
}

const styles: StyleRulesCallback = _ => ({
  button: {
    position: 'absolute',
    bottom: '2rem',
    left: '0',
    right: '0',
  },
  infoText: {
    marginBottom: '1rem',
  },
  newPasswordField: {
    marginTop: '5%',
  },
  passwordInfo: {
    marginTop: '5%',
    fontSize: '1.2rem',
  },
})

export default withStyles(styles)(ChangePassword)
