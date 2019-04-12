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
  AccessTime,
  Delete,
  Edit,
  MonetizationOn,
  MoreVertRounded,
} from '@material-ui/icons'
import { distanceInWordsToNow } from 'date-fns'
import * as locale from 'date-fns/locale/en'
import React, { Fragment } from 'react'
import { Task } from '~interfaces'
import { OnClick } from '~typings/react'
import TagList from './TagList'

const TaskListElement = ({
  anchorEl,
  id,
  isMoreExpanded,
  isEditable,
  isDeletable,
  category,
  onExpandedMenuLeave,
  onMoreButtonClick,
  tags,
  shortDescription,
  price,
  expiredAt,
  classes,
}: TaskListElementProps) => (
  <Card className={classes.root} elevation={1}>
    <CardContent className={classes.content}>
      <div className={classes.headerWrapper}>
        <Typography color="secondary" className={classes.header} variant="h5">
          {category}
        </Typography>
        {(isEditable || isDeletable) && (
          <Fragment>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={onMoreButtonClick.bind(null, id)}
              className={classes.moreButton}
            >
              <MoreVertRounded />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMoreExpanded}
              onBlur={onExpandedMenuLeave}
            >
              {isEditable && (
                <MenuItem className={classes.expandedMenu}>
                  <Typography
                    className={classes.menuItemElement}
                    color="textSecondary"
                  >
                    <Edit className={classes.expandedMenuIcon} />
                    Edit
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
                    Delete
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Fragment>
        )}
      </div>
      <Typography variant="h2" color="textSecondary">
        <p className={classes.shortDescription}>{shortDescription}</p>
        <TagList tags={tags} />
        <div className={classes.footer}>
          <span className={classes.indicator}>
            <AccessTime className={classes.indicatorIconLeft} />
            <span className={classes.indicatorText}>
              {distanceInWordsToNow(expiredAt, { locale })}
            </span>
          </span>
          <span className={classes.indicator}>
            <span className={classes.indicator}>{price}</span>
            <MonetizationOn className={classes.indicatorIconRight} />
          </span>
        </div>
      </Typography>
    </CardContent>
  </Card>
)

const styles: StyleRulesCallback = ({ spacing: { unit } }: Theme) => ({
  card: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    alignItems: 'center',
    display: 'flex',
    paddingBottom: unit,
    paddingLeft: unit,
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
    justifyContent: 'space-between',
    lineHeight: '2.4rem',
    marginTop: unit,
  },
  header: {
    fontSize: '1.6rem',
  },
  indicator: {
    verticalAlign: 'middle',
  },
  indicatorIconLeft: { verticalAlign: 'middle', marginRight: '0.4rem' },
  indicatorIconRight: { verticalAlign: 'middle', marginLeft: '0.4rem' },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
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
    margin: '1rem 0',
  },
})

interface TaskListElementProps extends WithStyles<typeof styles>, Task {
  anchorEl: HTMLElement | null
  onMoreButtonClick: (id: string) => OnClick
  onExpandedMenuLeave: () => void
  isMoreExpanded: boolean
  isEditable: boolean
  isDeletable: boolean
}

export default withStyles(styles)(TaskListElement)
