import {
  CardContent,
  StyleRulesCallback,
  TextField,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import { AccountBalanceWallet, Event, EventAvailable } from '@material-ui/icons'
import { format } from 'date-fns'
import React, { FC } from 'react'
import { OnChange } from '~typings/react'
import {
  invalidateDateWithActualTime,
  invalidatePrice,
  invalidateStartDateWithFinishDate,
} from '../validations'

const TaskPriceTermEdit: FC<TaskPriceTermEditProps> = ({
  balance,
  classes,
  startDate,
  handleStartDateChange,
  finishDate,
  handleFinishDateChange,
  price,
  handlePriceChange,
}) => {
  const withTaskContent = false // TODO get from checkbox in photoEdit page
  const dateInputStyles = {
    classes: {
      input: classes.input,
    },
  }
  const dateInputProps = { min: format(Date.now(), 'YYYY-MM-DDTHH:MM') }
  const priceInputStyles = {
    classes: {
      input: classes.input,
    },
    endAdornment: <div className={classes.endAdornment}>PLN</div>,
  }

  const startDateErrorMessage = invalidateDateWithActualTime(startDate)
  const finishDateErrorMessages = [
    invalidateDateWithActualTime(finishDate),
    invalidateStartDateWithFinishDate(startDate, finishDate),
  ]
  const priceErrorMessage = invalidatePrice(balance, price)

  return (
    <CardContent className={classes.cardContent}>
      <Typography variant="h3" component="h3">
        Termin i cena
        <hr className={classes.underline} />
      </Typography>
      <div className={classes.formWrapper}>
        <div className={classes.form}>
          <div>
            {!withTaskContent && (
              <div>
                <Typography align="left" variant="body1">
                  Treść zadania dodam przed:
                </Typography>
                <div className={classes.textFieldWithIcon}>
                  <div className={classes.icons}>
                    <Event />
                  </div>
                  <TextField
                    autoFocus={false}
                    type="datetime-local"
                    className={classes.textField}
                    fullWidth
                    required
                    variant="outlined"
                    error={!!startDateErrorMessage}
                    helperText={startDateErrorMessage}
                    value={
                      startDate ? format(startDate, 'YYYY-MM-DDTHH:MM') : ''
                    }
                    onChange={handleStartDateChange}
                    InputProps={dateInputStyles}
                    inputProps={dateInputProps}
                  />
                </div>
              </div>
            )}
            <div>
              <Typography align="left" variant="body1">
                Zadanie ma zostać rozwiązane przed:
              </Typography>
              <div className={classes.textFieldWithIcon}>
                <div className={classes.icons}>
                  <EventAvailable />
                </div>
                <TextField
                  autoFocus={false}
                  type="datetime-local"
                  className={classes.textField}
                  fullWidth
                  required
                  value={
                    finishDate ? format(finishDate, 'YYYY-MM-DDTHH:MM') : ''
                  }
                  error={
                    !!finishDateErrorMessages[0] || !!finishDateErrorMessages[1]
                  }
                  helperText={
                    finishDateErrorMessages[0] || finishDateErrorMessages[1]
                  }
                  onChange={handleFinishDateChange}
                  variant="outlined"
                  InputProps={dateInputStyles}
                  inputProps={dateInputProps}
                />
              </div>
            </div>
            <div>
              <Typography align="left" variant="body1">
                Za rozwiązanie zadania zapłacę:
              </Typography>
              <div className={classes.textFieldWithIcon}>
                <div className={classes.icons}>
                  <AccountBalanceWallet />
                </div>
                <TextField
                  autoFocus={false}
                  type="number"
                  className={classes.textField}
                  fullWidth
                  required
                  value={price || ''}
                  onChange={handlePriceChange}
                  error={!!priceErrorMessage}
                  helperText={priceErrorMessage}
                  variant="outlined"
                  InputProps={priceInputStyles}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  )
}

const styles: StyleRulesCallback = theme => ({
  title: {
    textAlign: 'center',
    color: theme.palette.secondary.main,
  },
  cardContent: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: '1rem 1rem 1rem 1.5rem',
    height: 75,
    color: theme.palette.secondary.main,
  },
  input: {
    paddingLeft: '5rem',
  },
  textField: {
    color: theme.palette.secondary.main,
    padding: '1rem 0 1rem 0',
  },
  textFieldWithIcon: {
    position: 'relative',
  },
  form: {
    height: 0,
  },
  formWrapper: {
    overflowY: 'auto',
    overflowX: 'hidden',
    overflowScrolling: 'touch',
  },
  underline: {
    height: '1px',
    border: 'none',
    backgroundColor: theme.palette.grey[300],
  },
  endAdornment: {
    color: 'black',
    padding: '1rem',
  },
})

interface TaskPriceTermEditProps extends WithStyles<typeof styles> {
  balance: number
  startDate: number
  handleStartDateChange: OnChange
  finishDate: number
  handleFinishDateChange: OnChange
  price: number
  handlePriceChange: OnChange
  withTaskContent?: boolean
}

export default withStyles(styles)(TaskPriceTermEdit)
