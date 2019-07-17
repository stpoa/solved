import {
  CardContent,
  StyleRulesCallback,
  Theme,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import Photos from '~generic/Photos'
import { OnClick } from '~typings/react'

const TaskPhotoEdit: FunctionComponent<TaskPhotoEditProps> = ({
  classes,
  files,
  onFilesUpdate,
}) => {
  return (
    <CardContent className={classes.cardContent}>
      <Typography variant="h3" component="h3">
        Zdjęcia
        <hr className={classes.underline} />
      </Typography>
      <div
        className={
          !files.length ? classes.contentWithAddPhotoLater : classes.content
        }
      >
        <div className={classes.photosWrapper}>
          <Photos
            photosPlaceholderText="Dodaj zdjęcie rozwiązania"
            filesLength={1}
            fullWidth
            {...{ files, onFilesUpdate }}
          />
        </div>
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
  contentWithAddPhotoLater: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: '6fr 5fr',
  },
  content: {
    display: 'grid',
    gridTemplateRows: '1fr',
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
    gridGap: '1rem',
    marginTop: '2rem',
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

interface TaskPhotoEditProps extends WithStyles<typeof styles> {
  files: ExtendedFile[]
  onFilesUpdate: (files: ExtendedFile[]) => void
  onFilesLater: OnClick
}

export interface ExtendedFile extends File {
  id: string
  url: string
}

export default withStyles(styles)(TaskPhotoEdit)
