import { Button, Typography } from '@material-ui/core'
import {
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import React, { FunctionComponent } from 'react'
import { WrappedLink } from '~generic'

const Prelogin: FunctionComponent<PreloginProps> = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <header className={classes.headerItem}>Miej zdane</header>
      </div>
      <div className={classes.body}>
        <div className={classes.info}>
          <Typography align="center">
            Serwis miej zdane jest platformą umożliwiającą zdobywanie odpowiedzi
            na udostępnione treści. Serwis skierowany jest głównie do studentów,
            którzy potrzebują zdalnej pomocy związanej z rozwiązywaniem zadań z
            wszelakich przedmiotów oraz chcą zostać anonimowi.
          </Typography>
        </div>
        <div className={classes.center}>
          <span className={`${classes.dot} ${classes.activeDot}`} />
          <span className={classes.dot} />
          <span className={classes.dot} />
        </div>
        <div className={classes.center}>
          <WrappedLink
            wrapper={Button}
            className={`${classes.button} ${classes.reverseButton}`}
            to="/register"
            variant="outlined"
          >
            Zarejestruj
          </WrappedLink>
          <WrappedLink
            wrapper={Button}
            className={classes.button}
            to="/sign-in"
            variant="extendedFab"
          >
            Zaloguj
          </WrappedLink>
        </div>
      </div>
    </div>
  )
}

const styles: StyleRulesCallback = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '3fr 4fr',
    margin: '5%',
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  headerItem: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    borderWidth: '0.2vh',
    display: 'inline-block',
    fontSize: '2.5em',
    padding: '0 7% 4% 7%',
  },
  info: {
    margin: '0 15%',
    fontSize: '1.5rem',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  dot: {
    height: '1.75vh',
    width: '1.75vh',
    borderRadius: '50%',
    backgroundColor: '#D3D3D3',
    display: 'inline-block',
    margin: '5% 4% 0 4%',
  },
  activeDot: {
    backgroundColor: theme.palette.secondary.main,
  },
  button: {
    margin: '20% 4% 0 4%',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    minWidth: '20rem',
  },
  reverseButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    borderRadius: '24px',
    borderWidth: '0.2vh',
  },
})

interface PreloginProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(Prelogin)
