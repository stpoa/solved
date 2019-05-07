import {
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  StyleRulesCallback,
  TextField,
  Typography,
  WithStyles,
} from '@material-ui/core'
import { AddAPhoto as AddPhotoIcon } from '@material-ui/icons'
import { withStyles } from '@material-ui/styles'
import React, { FC, MouseEventHandler, useState } from 'react'
import { ScreenModal } from '~generic'
import Button from '~generic/Sign/Button'

const handleFeedbackSubmit: MouseEventHandler<HTMLElement> = e => {
  e.preventDefault()
}

const radioOptions = {
  Problem: 'problem',
  Review: 'review',
  Feature: 'feature',
}

const Feedback: FC<FeedbackProps> = ({ open, handleClose, classes }) => {
  const [selected, setSelected] = useState()
  const [text, setText] = useState('')

  const handleRadioSelect = (e: any) => setSelected(e.target.value)
  const handleTextChange = (e: any) => setText(e.target.value)

  const disabled =
    !Object.values(radioOptions).some(v => selected === v) || text.length < 20

  return (
    <ScreenModal {...{ open, handleClose }} titleText="Feedback">
      <DialogContent>
        <FormControl className={classes.formControl}>
          <FormLabel>Co chcesz zrobić?</FormLabel>
          <RadioGroup
            onChange={handleRadioSelect}
            aria-label="Co chcesz zrobić?"
            className={classes.group}
            value={selected}
          >
            {[
              { value: radioOptions.Problem, label: 'Zgłoś problem' },
              { value: radioOptions.Review, label: 'Prześlij opinie' },
              {
                value: radioOptions.Feature,
                label: 'Zaproponuj nową funkcjonalność',
              },
            ].map(({ value, label }) => (
              <FormControlLabel
                control={<Radio />}
                key={value}
                {...{ value, label }}
                checked={selected === value}
              />
            ))}
          </RadioGroup>

          <TextField
            id="multiline-static"
            className={classes.textField}
            margin="normal"
            label="Tutaj napisz kilka zdań od siebie (min. 20 znaków)"
            multiline
            rows="4"
            variant="outlined"
            value={text}
            onChange={handleTextChange}
          />

          <input
            {...{ disabled }}
            className={classes.fileInput}
            type="file"
            accept="image/*"
            id="upload-photo"
            hidden
          />

          <Typography component="h2">Możesz załączyć zdjęcie</Typography>
          <label
            className={classes.browsePhotoContainer}
            htmlFor="upload-photo"
          >
            <AddPhotoIcon className={classes.photoIcon} />
          </label>

          <Button
            {...{ disabled }}
            type="submit"
            onClick={handleFeedbackSubmit}
          >
            Wyślij
          </Button>
        </FormControl>
      </DialogContent>
    </ScreenModal>
  )
}

interface FeedbackProps extends WithStyles {
  open: boolean
  handleClose: () => void
}

const styles: StyleRulesCallback = _ => ({
  browsePhotoContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: '1px solid #bbb',
    color: '#bbb',
    borderRadius: '5px',
    width: 'fit-content',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  photoIcon: {
    display: 'block',
    fontSize: '6rem',
    padding: '1rem',
  },
  formControl: {
    width: '100%',
  },
})

export default withStyles(styles)(Feedback)
