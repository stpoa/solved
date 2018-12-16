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
import React, { ChangeEvent, SFC } from 'react'

const filesLength = 3

const createFileId = (file: File) =>
  btoa(`${file.name}:${file.size}:${file.type}:${file.lastModified}`)

const TaskPhotoEdit: SFC<TaskPhotoEditProps> = ({
  files,
  classes,
  onFilesUpdate,
}) => {
  const handleFileRemoval = (id?: string) => () => {
    const doesFileExist = (file: ExtendedFile) => file.id !== id
    onFilesUpdate(files.filter(doesFileExist))
  }

  const handleBrowsePhotoClick = (e: ChangeEvent<HTMLInputElement>) => {
    const eventFiles = e.target.files && Array.from(e.target.files)
    const mapFileToExtendedFile = (file: ExtendedFile) => {
      const fileUrl = URL.createObjectURL(file)
      file.id = createFileId(file)
      file.url = fileUrl
      return file
    }
    const filterNewFile = (prevFiles: ExtendedFile[]) => (file: ExtendedFile) =>
      !prevFiles.map(prevFile => prevFile.id).includes(file.id)

    const newFiles =
      eventFiles &&
      eventFiles.map(mapFileToExtendedFile).filter(filterNewFile(files))

    newFiles && newFiles.length && onFilesUpdate([...files, ...newFiles])
  }

  const browsePhotoHolder = (
    <Paper className={classes.paper}>
      <label className={classes.browsePhotoContainer} htmlFor="upload-photo">
        <Typography
          className={classes.browsePhotoTitle}
          color="textSecondary"
          variant="title"
        >
          <p className={classes.browsePhotoParagraph}>Browse photo</p>
          <AddAPhoto className={classes.photoIcon} />
        </Typography>
      </label>
    </Paper>
  )

  const photoItem = ({ id, url, name }: ExtendedFile) => (
    <Paper key={id} className={classes.photoPaper}>
      <div className={classes.photoNameContainer}>
        <Typography className={classes.photoName} color="textSecondary">
          {name}
        </Typography>
      </div>
      <div className={classes.filePicture}>
        <img className={classes.image} src={url} />
      </div>
      <HighlightOff
        className={classes.closeIcon}
        onClick={handleFileRemoval(id)}
      />
    </Paper>
  )

  return (
    <CardContent className={classes.cardContent}>
      <Typography className={classes.header} color="secondary" variant="h5">
        Photos
      </Typography>
      <input
        className={classes.fileInput}
        onChange={handleBrowsePhotoClick}
        type="file"
        accept="image/*"
        id="upload-photo"
      />
      {files.length < filesLength && browsePhotoHolder}
      {Array.from(files).map(photoItem)}
    </CardContent>
  )
}

const styles: StyleRulesCallback = (theme: Theme) => ({
  cardContent: {
    display: 'grid',
    gridTemplateRows: 'max-content',
    height: '100%',
    paddingBottom: '0 !important',
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
    gridTemplateColumns: '60% 40%',
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
  header: {
    margin: '0 0 20px',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
})

interface TaskPhotoEditProps extends WithStyles<typeof styles> {
  files: ExtendedFile[]
  onFilesUpdate: (files: ExtendedFile[]) => void
}

export interface ExtendedFile extends File {
  id?: string
  url?: string
}

export default withStyles(styles)(TaskPhotoEdit)
