import { CSSProperties } from '@material-ui/core/styles/withStyles'

const pageStyles: CSSProperties = {
  display: 'grid',
  overflow: 'hidden',
}

export const pageWithoutNavStyles: CSSProperties = {
  ...pageStyles,
  gridTemplateRows: '1fr',
}

export const pageWithBottomNavStyles: CSSProperties = {
  ...pageStyles,
  gridTemplateRows: '1fr auto',
}

export const pageWithTopAndBottomNavStyles: CSSProperties = {
  ...pageStyles,
  gridTemplateRows: 'auto 1fr auto',
}

export const pageContentScrollableStyles: CSSProperties = {
  display: 'grid',
  WebkitOverflowScrolling: 'touch',
  overflow: 'auto',
}

export const pageContentNotScrollableStyles: CSSProperties = {
  display: 'grid',
  WebkitOverflowScrolling: 'auto',
  overflow: 'hidden',
}
