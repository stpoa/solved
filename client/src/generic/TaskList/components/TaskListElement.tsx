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
  MonetizationOnOutlined,
  MoreVertRounded,
} from '@material-ui/icons'
import { distanceInWordsToNow } from 'date-fns'
import * as locale from 'date-fns/locale/en'
import React, { Fragment } from 'react'
import { Task } from '~interfaces'
import TagList from './TagList'

const TaskListElement = ({
  anchorEl,
  id,
  isMoreExpanded,
  isEditable,
  isDeletable,
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
      <Typography variant="h2" color="textSecondary">
        <p className={classes.shortDescription}>{shortDescription}</p>
        <TagList tags={tags} />
        <div className={classes.footer}>
          <span className={classes.indicatorIconLeft}>
            <AccessTime className={classes.indicatorIcon} />
            <span className={classes.indicatorText}>
              {distanceInWordsToNow(expiredAt, { locale })}
            </span>
          </span>
          <span className={classes.indicatorIconRight}>
            <MonetizationOnOutlined className={classes.indicatorIcon} />
            <span>{price}</span>
          </span>
        </div>
      </Typography>
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
    </CardContent>
  </Card>
)

const styles: StyleRulesCallback = ({ spacing: { unit } }: Theme) => ({
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
    lineHeight: '2.4rem',
    marginTop: unit,
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
})

interface TaskListElementProps extends WithStyles<typeof styles>, Task {
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
