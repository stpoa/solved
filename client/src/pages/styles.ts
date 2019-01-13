import { Theme } from '@material-ui/core/styles'
import { CSSProperties } from '@material-ui/core/styles/withStyles'

const setNotScrollablePageDimension = (cssPropName: string, theme: Theme) => ({
  [cssPropName]: 56,
  [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
    [cssPropName]: 48,
  },
  [theme.breakpoints.up('sm')]: {
    [cssPropName]: 64,
  },
})

const pageContentNotScrollable: CSSProperties = {
  position: 'fixed',
  overflow: 'hidden',
  width: '100%',
}

export const pageContentNotScrollableWithTopBar = (
  theme: Theme,
): CSSProperties => ({
  ...setNotScrollablePageDimension('top', theme),
  ...pageContentNotScrollable,
  bottom: 0,
})

export const pageContentNotScrollableWithNavigationBar = (
  theme: Theme,
): CSSProperties => ({
  ...setNotScrollablePageDimension('bottom', theme),
  ...pageContentNotScrollable,
  top: 0,
})

export const pageContentNotScrollableWithBothBars = (
  theme: Theme,
): CSSProperties => ({
  ...setNotScrollablePageDimension('top', theme),
  ...setNotScrollablePageDimension('bottom', theme),
  ...pageContentNotScrollable,
})
