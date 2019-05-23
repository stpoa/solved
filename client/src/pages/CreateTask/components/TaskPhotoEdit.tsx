import {
  CardContent,
  Paper,
  StyleRulesCallback,
  Theme,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { ActionTypes } from '~/stores/CreateTask'
import Photos from '~generic/Photos'
import { useCreateTaskStore } from '~stores/CreateTask/connect'

const TaskPhotoEdit: FunctionComponent<TaskPhotoEditProps> = ({ classes }) => {
  const [{ files, step }, dispatch] = useCreateTaskStore()

  const handleFilesUpdate = (newFiles: ExtendedFile[]) =>
    dispatch({ type: ActionTypes.updateFiles, payload: { files: newFiles } })

  const handleaddPhotosLaterClick = () =>
    dispatch({ type: ActionTypes.updateStep, payload: { step: step + 1 } })

  return (
    <CardContent className={classes.cardContent}>
      <Typography variant="h3" component="h3">
        Zdjęcia
        <hr className={classes.underline} />
      </Typography>
      <div className={classes.content}>
        <div className={classes.photosWrapper}>
          <Photos
            files={files}
            filesLength={4}
            fullWidth
            onFilesUpdate={handleFilesUpdate}
          />
        </div>
        {!files.length && (
          <div className={classes.addPhotosLaterContainer}>
            <Typography
              color="textPrimary"
              variant="subtitle2"
              className={classes.orTitle}
            >
              LUB
            </Typography>
            <Paper
              className={classes.addPhotosLater}
              onClick={handleaddPhotosLaterClick}
            >
              <Typography
                color="textPrimary"
                variant="subtitle1"
                className={classes.addPhotosLaterTitle}
              >
                Dodaj zdjęcia w innym terminie
              </Typography>
              <Typography
                color="textSecondary"
                variant="subtitle2"
                className={classes.addPhotosLaterSubtitle}
              >
                Później zdeklarujesz termin dodania
              </Typography>
            </Paper>
          </div>
        )}
      </div>
    </CardContent>
  )
}

const styles: StyleRulesCallback = (theme: Theme) => ({
  cardContent: {
    height: '100%',
    paddingBottom: '0 !important',
    display: 'grid',
    gridTemplateRows: 'max-content',
  },
  content: {
    height: '100%',
  },
  closeIcon: {
    position: 'absolute',
    right: '8px',
    color: theme.palette.secondary.main,
    backgroundColor: 'white',
    borderRadius: '100%',
    zIndex: 1,
    marginTop: '-9px',
    cursor: 'pointer',
  },
  paper: {
    maxHeight: '100%',
    margin: '0.5rem 0 0.5rem',
    cursor: 'pointer',
  },
  photosWrapper: {
    display: 'grid',
    gridAutoRows: '1fr',
    gridGap: '1rem',
    gridTemplateRows: 'max-content',
  },
  photoPaper: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    margin: '0.5rem 0 0.5rem',
  },
  photoIcon: {
    fontSize: '6rem',
  },
  photoNameContainer: {
    display: 'flex',
    margin: '0 5px 0 5px',
    alignItems: 'center',
  },
  photoName: {
    width: '100%',
    wordBreak: 'break-all',
  },
  browsePhotoContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
  },
  browsePhotoTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  browsePhotoParagraph: {
    margin: '0 0 2rem',
  },
  addPhotosLater: {
    padding: '2rem',
  },
  addPhotosLaterTitle: {
    padding: '1rem',
  },
  addPhotosLaterSubtitle: {
    padding: '1rem',
  },
  orTitle: {
    margin: '1rem',
  },
  fileInput: {
    display: 'none',
  },
  filePicture: {
    backgroundColor: 'black',
    borderRadius: '5px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  underline: {
    height: '1px',
    border: 'none',
    backgroundColor: theme.palette.grey[300],
  },
})

interface TaskPhotoEditProps extends WithStyles<typeof styles> {}

export interface ExtendedFile extends File {
  id: string
  url: string
}

export default withStyles(styles)(TaskPhotoEdit)
