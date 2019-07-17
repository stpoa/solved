import {
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  StyleRulesCallback,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import {
  AccessTime as TimeIcon,
  Delete,
  Edit,
  MonetizationOnOutlined as MoneyIcon,
  MoreVertRounded,
} from '@material-ui/icons'
import { distanceInWordsToNow } from 'date-fns'
import * as locale from 'date-fns/locale/pl'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import TagList from './TagList'

const TaskListElement = ({
  task: { id, tags, shortDescription, price, dateExpired },
  anchorEl,
  isMoreExpanded,
  isEditable,
  isDeletable,
  onExpandedMenuLeave,
  onMoreButtonClick,
  classes,
}: TaskListElementProps) => (
  <Card className={classes.root} elevation={1}>
    <CardContent className={classes.content}>
      <NavLink className={classes.navLink} to={'task/' + id}>
        <Typography variant="h2" color="textSecondary">
          <p className={classes.shortDescription}>{shortDescription}</p>
          <div className={classes.tags}>
            <TagList tags={tags} />
          </div>
          <div className={classes.footer}>
            <span className={classes.indicatorIconLeft}>
              <TimeIcon className={classes.indicatorIcon} />
              <span className={classes.indicatorText}>
                {distanceInWordsToNow(dateExpired, { locale })}
              </span>
            </span>
            <span className={classes.indicatorIconRight}>
              <MoneyIcon className={classes.indicatorIcon} />
              <span>{price}</span>
            </span>
          </div>
        </Typography>
      </NavLink>
      <div className={classes.moreOptionsWrapper}>
        {(isEditable || isDeletable) && (
          <Fragment>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={onMoreButtonClick(id)}
              className={classes.moreButton}
            >
              <MoreVertRounded />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMoreExpanded}
              onClose={onExpandedMenuLeave}
            >
              {isEditable && (
                <MenuItem className={classes.expandedMenu}>
                  <Typography
                    className={classes.menuItemElement}
                    color="textSecondary"
                  >
                    <Edit className={classes.expandedMenuIcon} />
                    Edytuj
                  </Typography>
                </MenuItem>
              )}
              {isDeletable && (
                <MenuItem className={classes.expandedMenu}>
                  <Typography
                    className={classes.menuItemElement}
                    color="textSecondary"
                  >
                    <Delete className={classes.expandedMenuIcon} />
                    Usuń
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Fragment>
        )}
      </div>
    </CardContent>
  </Card>
)

const styles: StyleRulesCallback = (theme: Theme) => ({
  card: {
    display: 'flex',
  },
  content: {
    padding: '1rem',
    flex: '1 0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    '&:last-child': {
      padding: '1rem',
    },
  },
  controls: {
    alignItems: 'center',
    display: 'flex',
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
  },
  cover: {
    height: 151,
    width: 151,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    display: 'flex',
    fontSize: '1.2rem',
    height: '2.4rem',
    lineHeight: '2.4rem',
    marginTop: theme.spacing.unit,
  },
  header: {
    fontSize: '1.6rem',
  },
  indicatorIconLeft: { display: 'flex', marginRight: '0.4rem' },
  indicatorIconRight: { display: 'flex', marginLeft: '0.4rem' },
  indicatorIcon: {
    verticalAlign: 'middle',
    marginRight: '0.5rem',
  },
  moreButton: {
    paddingTop: 0,
    paddingRight: 0,
  },
  expandedMenu: {
    fontSize: '1.4rem',
  },
  expandedMenuIcon: {
    fontSize: '2rem',
    paddingRight: '2px',
  },
  menuItemElement: {
    display: 'flex',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  root: {
    margin: 0,
  },
  shortDescription: {
    color: 'black',
    fontSize: '1.4rem',
    fontWeight: 300,
    lineHeight: '1.4',
    margin: '0',
  },
  tags: {
    marginLeft: -theme.spacing.unit,
    marginRight: -theme.spacing.unit,
  },
  navLink: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
})

export interface TaskListTask {
  id: string
  category: string
  tags: string[]
  shortDescription: string
  price: number
  dateExpired: number
}

interface TaskListElementProps extends WithStyles<typeof styles> {
  task: TaskListTask
  anchorEl: HTMLElement | null
  onMoreButtonClick: (
    id: string,
  ) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onExpandedMenuLeave: () => void
  isMoreExpanded: boolean
  isEditable: boolean
  isDeletable: boolean
}

export default withStyles(styles)(TaskListElement)
