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
      <div className={classes.mainGrid}>
        <div className={classes.header}>
          <Typography align="center" variant="h1" component="header">
            Miej zdane
          </Typography>
        </div>
        <div className={classes.info}>
          <Typography align="center">
            Serwis miej zdane jest platformą umożliwiającą zdobywanie odpowiedzi
            na udostępnione treści. Serwis skierowany jest głównie do studentów,
            którzy potrzebują zdalnej pomocy związanej z rozwiązywaniem zadań z
            wszelakich przedmiotów oraz chcą zostać anonimowi.
          </Typography>
        </div>
        <div className={classes.dots}>
          <span
            className={[classes.dot, classes.dot1, classes.activeDot].join(' ')}
          />
          <span className={[classes.dot, classes.dot2].join(' ')} />
          <span className={[classes.dot, classes.dot3].join(' ')} />
        </div>
        <div className={classes.buttons}>
          <WrappedLink
            wrapper={Button}
            className={[classes.button, classes.reverseButton].join(' ')}
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
    height: '100vh',
    width: '100vw',
    padding: theme.spacing.unit,
  },
  mainGrid: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr auto auto auto auto 1fr',
    gridRowGap: '10%',
  },
  header: {
    gridRow: '2/3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    gridRow: '3/4',
    margin: '0 15%',
    fontSize: '1.5rem',
  },
  dots: {
    display: 'grid',
    gridRow: '4/5',
    gridTemplateColumns: '1fr auto auto auto 1fr',
    gridTemplateRows: 'auto',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '1rem',
    gridRow: '5/6',
  },
  headerItem: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    borderWidth: '0.2vh',
    display: 'inline-block',
    fontSize: '2.5em',
    padding: '0 7% 4% 7%',
  },
  dot: {
    height: '1rem',
    width: '1rem',
    borderRadius: '50%',
    backgroundColor: '#D3D3D3',
    display: 'block',
  },
  dot1: {
    gridColumn: '2/3',
  },
  dot2: {
    gridColumn: '3/4',
  },
  dot3: {
    gridColumn: '4/5',
  },
  activeDot: {
    backgroundColor: theme.palette.secondary.main,
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
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
