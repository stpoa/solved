import {
  CardContent,
  Paper,
  StyleRulesCallback,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import { AddAPhoto, HighlightOff } from '@material-ui/icons'
import React, { ChangeEvent, FunctionComponent } from 'react'
import { ActionTypes } from '~/stores/CreateTask'
import { useCreateTaskStore } from '~stores/CreateTask/connect'

const filesLength = 3

const createFileId = (file: File) =>
  btoa(`${file.size}:${file.type}:${file.lastModified}`)

const TaskPhotoEdit: FunctionComponent<TaskPhotoEditProps> = ({ classes }) => {
  const [store, dispatch] = useCreateTaskStore()

  const handleFileRemoval = (id?: string) => () => {
    const doesFileExist = (file: ExtendedFile) => file.id !== id
    dispatch({
      type: ActionTypes.updateFiles,
      payload: store.files.filter(doesFileExist),
    })
  }

  const handleBrowsePhotoClick = (e: ChangeEvent<HTMLInputElement>) => {
    const eventFiles = e.target.files && Array.from(e.target.files)
    const extendFile = (file: ExtendedFile) => {
      const fileUrl = URL.createObjectURL(file)
      file.id = createFileId(file)
      file.url = fileUrl
      return file
    }
    const isNewFile = (prevFiles: ExtendedFile[]) => (file: ExtendedFile) =>
      !prevFiles.map(prevFile => prevFile.id).includes(file.id)

    const newFiles =
      eventFiles && eventFiles.map(extendFile).filter(isNewFile(store.files))

    newFiles &&
      newFiles.length &&
      dispatch({
        type: ActionTypes.updateFiles,
        payload: [...store.files, ...newFiles],
      })
  }

  const browsePhotoHolder = (
    <Paper className={classes.paper}>
      <label className={classes.browsePhotoContainer} htmlFor="upload-photo">
        <Typography
          className={classes.browsePhotoTitle}
          color="textSecondary"
          variant="title"
        >
          <p className={classes.browsePhotoParagraph}>Wybierz zdjęcie</p>
          <AddAPhoto className={classes.photoIcon} />
        </Typography>
      </label>
    </Paper>
  )

  const photoItem = ({ id, url, name }: ExtendedFile) => {
    const backgroundImageStyle = { backgroundImage: `url(${url})` }
    return (
      <Paper key={id} className={classes.photoPaper}>
        <div className={classes.photoNameContainer}>
          <Typography className={classes.photoName} color="textSecondary">
            {name}
          </Typography>
        </div>
        <div className={classes.filePicture} style={backgroundImageStyle} />
        <HighlightOff
          className={classes.closeIcon}
          onClick={handleFileRemoval(id)}
        />
      </Paper>
    )
  }

  return (
    <CardContent className={classes.cardContent}>
      <Typography variant="h3" component="h3">
        Zdjęcia
        <hr className={classes.underline} />
      </Typography>
      <input
        className={classes.fileInput}
        onChange={handleBrowsePhotoClick}
        type="file"
        accept="image/*"
        id="upload-photo"
      />
      {store.files.length < filesLength && browsePhotoHolder}
      {Array.from(store.files).map(photoItem)}
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

interface TaskPhotoEditProps extends WithStyles<typeof styles> {}

export interface ExtendedFile extends File {
  id?: string
  url?: string
}

export default withStyles(styles)(TaskPhotoEdit)
