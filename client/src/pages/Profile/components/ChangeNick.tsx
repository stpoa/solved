import {
  DialogContent,
  StyleRulesCallback,
  TextField,
  Typography,
  WithStyles,
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { pipe } from 'ramda'
import React, { FC, useState } from 'react'
import { ScreenModal } from '~generic'
import { FieldContainer } from '~generic/Sign'
import Button from '~generic/Sign/Button'
import {
  makeAlphanumeric,
  makeLengthLimit,
  makeNoFirstDigit,
  nickValidator,
} from '~lib/validators'

const Feedback: FC<FeedbackProps> = ({ open, handleClose, classes }) => {
  const [nickText, setNickText] = useState('')

  const handleChangeNick = (e: any) => {
    const value: string = e.target.value
    setNickText(
      pipe(
        makeAlphanumeric,
        makeNoFirstDigit,
        makeLengthLimit(15),
      )(value),
    )
  }
  const handleSubmit = () => ''

  const nickError = nickValidator(nickText)

  return (
    <ScreenModal {...{ open, handleClose }} titleText="Feedback">
      <DialogContent>
        <Typography className={classes.infoText}>
          Pamiętaj, ze nick mozna zmieniac raz na 3 miesiace
        </Typography>

        <FieldContainer>
          <TextField
            error={!!nickError}
            helperText={nickError}
            label="Nowy nick"
            required
            name="nick"
            type="nick"
            fullWidth
            onChange={handleChangeNick}
            value={nickText}
            variant="outlined"
          />
        </FieldContainer>
        <div className={classes.button}>
          <Button disabled={!!nickError} onClick={handleSubmit}>
            Zmień nick
          </Button>
        </div>
      </DialogContent>
    </ScreenModal>
  )
}

interface FeedbackProps extends WithStyles {
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
})

export default withStyles(styles)(Feedback)
