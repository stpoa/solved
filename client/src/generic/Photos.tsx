import {
  Paper,
  StyleRulesCallback,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import { AddAPhoto as AddPhotoIcon, HighlightOff } from '@material-ui/icons'
import React, { ChangeEvent, FunctionComponent } from 'react'

const createFileId = (file: File) =>
  btoa(`${file.size}:${file.type}:${file.lastModified}`)

const Photos: FunctionComponent<PhotosProps> = ({
  classes,
  files,
  filesLength,
  fullWidth,
  onFilesUpdate,
}) => {
  const handleFileRemoval = (id?: string) => () => {
    const doesFileExist = (file: ExtendedFile) => file.id !== id
    onFilesUpdate(files.filter(doesFileExist))
  }

  const handleBrowsePhotoClick = (e: ChangeEvent<HTMLInputElement>) => {
    const eventFiles = e.target.files && Array.from(e.target.files)
    const extendFile = (file: File): ExtendedFile => {
      const fileUrl = URL.createObjectURL(file)
      Object.assign(file, { id: createFileId(file), url: fileUrl })
      return file as ExtendedFile
    }
    const isNewFile = (prevFiles: ExtendedFile[]) => (file: ExtendedFile) =>
      !prevFiles.map(prevFile => prevFile.id).includes(file.id)

    const newFiles =
      eventFiles && eventFiles.map(extendFile).filter(isNewFile(files))

    newFiles && newFiles.length && onFilesUpdate([...files, ...newFiles])
  }

  const browsePhotoHolder = (
    <Paper className={classes.photoContainer}>
      <label className={classes.browsePhotoContainer} htmlFor="upload-photo">
        <Typography
          className={classes.browsePhotoTitle}
          color="textSecondary"
          variant="subtitle1"
        >
          {fullWidth && (
            <p className={classes.browsePhotoParagraph}>
              Dodaj zdjęcia zadania
            </p>
          )}
          <AddPhotoIcon className={classes.photoIcon} />
        </Typography>
      </label>
    </Paper>
  )

  const photoItem = ({ id, url, name }: ExtendedFile) => {
    const backgroundImageStyle = { backgroundImage: `url(${url})` }
    return (
      <Paper
        key={id}
        className={fullWidth ? classes.photoPaperWithTitle : classes.photoPaper}
      >
        {fullWidth && (
          <div className={classes.photoNameContainer}>
            <Typography className={classes.photoName} color="textSecondary">
              {name}
            </Typography>
          </div>
        )}
        <div className={classes.filePicture} style={backgroundImageStyle} />
        <HighlightOff
          className={classes.closeIcon}
          onClick={handleFileRemoval(id)}
        />
      </Paper>
    )
  }

  return (
    <>
      <input
        className={classes.fileInput}
        onChange={handleBrowsePhotoClick}
        type="file"
        accept="image/*"
        id="upload-photo"
      />
      {files.length < filesLength && browsePhotoHolder}
      {Array.from(files).map(photoItem)}
    </>
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
    right: '-8px',
    color: theme.palette.secondary.main,
    backgroundColor: 'white',
    borderRadius: '100%',
    zIndex: 1,
    marginTop: '-9px',
    cursor: 'pointer',
  },
  photoPaper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    position: 'relative',
  },
  photoPaperWithTitle: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    position: 'relative',
    maxHeight: '15rem',
  },
  photoIcon: {
    margin: '1rem 0',
    fontSize: '6rem',
  },
  photoNameContainer: {
    overflow: 'hidden',
    display: 'flex',
    margin: '0 5px 0 5px',
    alignItems: 'center',
  },
  photoName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
    color: theme.palette.secondary.main,
    marginTop: '1rem',
    marginBottom: 0,
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

interface PhotosProps extends WithStyles<typeof styles> {
  files: ExtendedFile[]
  filesLength: number
  fullWidth?: boolean
  onFilesUpdate: (files: ExtendedFile[]) => void
}

export interface ExtendedFile extends File {
  id: string
  url: string
}

export default withStyles(styles)(Photos)
