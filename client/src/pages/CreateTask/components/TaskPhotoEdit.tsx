import { CardContent, Paper, StyleRulesCallback, Theme, Typography, withStyles, WithStyles } from '@material-ui/core'
import { AddAPhoto, HighlightOff } from '@material-ui/icons'
import React, { ChangeEvent, Component } from 'react'

const filesLength = 3

const handlePhotoLoad = (e: ChangeEvent<HTMLImageElement>) =>
  URL.revokeObjectURL(e.target.src)

const createFileId = (file: File) => btoa(`${file.name}:${file.size}:${file.type}:${file.lastModified}`)

class TaskPhotoEdit extends Component<TaskPhotoEditProps, TaskPhotoEditState> {

  public state = {
    files: [],
  }

  public render () {
    const { classes } = this.props
    const { files } = this.state

    const browsePhotoHolder = (
      <Paper className={classes.paper}>
        <label className={classes.browsePhotoContainer} htmlFor="upload-photo">
          <Typography className={classes.browsePhotoTitle} color="textSecondary" variant="title">
            <p className={classes.browsePhotoParagraph}>Browse photo</p>
            <AddAPhoto className={classes.photoIcon} />
          </Typography>
        </label>
      </Paper>
    )

    const photoItem = ({ id, url, name }: ExtendedFile) => (
      <Paper key={id} className={classes.photoPaper}>
        <div className={classes.photoNameContainer}>
          <Typography className={classes.photoName} color="secondary">{name}</Typography>
        </div>
        <div className={classes.filePicture}>
          <img onLoad={handlePhotoLoad} className={classes.image} src={url} />
        </div>
        <HighlightOff className={classes.closeIcon} onClick={this.handleFileRemoval.bind(null, id)} />
      </Paper>
    )

    return (
      <CardContent className={classes.cardContent}>
        <Typography className={classes.header} color="secondary" variant="h5">Photos</Typography>
        <input
          className={classes.fileInput}
          onChange={this.handleBrowsePhotoClick}
          type="file"
          accept="image/*"
          id="upload-photo"
        />
        {files.length < filesLength && browsePhotoHolder}
        {Array.from(files).map(photoItem)}
      </CardContent>
    )
  }

  private handleFileRemoval = (id: string, _: Event) => {
    const filterFiles = (file: ExtendedFile) => file.id !== id
    this.setState(prevState => ({ files: prevState.files.filter(filterFiles) }))
  }

  private handleBrowsePhotoClick = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files && Array.from(e.target.files)
    const mapFile = (file: ExtendedFile) => {
      const fileUrl = URL.createObjectURL(file)
      file.id = createFileId(file)
      file.url = fileUrl
      return file
    }
    const filterFile = (prevFiles: ExtendedFile[]) => (file: ExtendedFile) =>
      !prevFiles.map(prevFile => prevFile.id).includes(file.id)

    this.setState(prevState => {
      const newFiles = files &&
        files
          .map(mapFile)
          .filter(filterFile(prevState.files))

      return newFiles && newFiles.length
        ? ({ files: [...prevState.files, ...newFiles] })
        : null
    })
  }

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

interface TaskPhotoEditProps extends WithStyles<typeof styles> { }
interface TaskPhotoEditState {
  files: ExtendedFile[]
}

interface ExtendedFile extends File {
  id?: string,
  url?: string
}

export default withStyles(styles)(TaskPhotoEdit)
