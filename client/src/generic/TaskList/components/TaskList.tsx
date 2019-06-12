import {
  Button,
  createStyles,
  Grid,
  StyleRulesCallback,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { UnfoldMore } from '@material-ui/icons'
import React, { Component } from 'react'
import TaskListElement, { TaskListTask } from './TaskListElement'

export enum SortingOption {
  PRICE_LOW = 'PRICE_LOW',
  PRICE_HIGH = 'PRICE_HIGH',
  TIME_SHORT = 'TIME_SHORT',
  TIME_LONG = 'TIME_LONG',
}

class TaskList extends Component<TaskListProps, TaskListState> {
  public static defaultProps = {
    isEditable: false,
    isDeletable: false,
  }

  public state = {
    expandedDropdownId: null,
    expandedDropdownAnchorEl: null,
    dropDownOpen: false,
    dropDownValue: '',
  }

  public render() {
    const {
      classes,
      tasks,
      isEditable,
      isDeletable,
      infoBarWithSort,
    } = this.props
    const { expandedDropdownId, expandedDropdownAnchorEl } = this.state

    return (
      <div className={classes.container}>
        {infoBarWithSort && (
          <div className={classes.infoBarWithSort}>
            <Typography
              className={classes.taskLengthText}
              variant="h2"
              color="textSecondary"
            >
              Znaleziono {tasks.length} zadań
            </Typography>
            <form autoComplete="off">
              <Button
                className={classes.sortButton}
                onClick={this.handleDropDownButtonClick}
              >
                Sortuj
                <UnfoldMore />
              </Button>
              <FormControl className={classes.dropDownSelect}>
                <Select
                  open={this.state.dropDownOpen}
                  onClose={this.handleDropDownButtonClick}
                  onChange={this.handleDropDownChange}
                  value={this.props.selectedSortOption}
                >
                  <MenuItem
                    className={classes.dropDownItem}
                    value={SortingOption.PRICE_LOW}
                  >
                    Cena: od najnizszej
                  </MenuItem>
                  <MenuItem
                    className={classes.dropDownItem}
                    value={SortingOption.PRICE_HIGH}
                  >
                    Cena: od najwyzszej
                  </MenuItem>
                  <MenuItem
                    className={classes.dropDownItem}
                    value={SortingOption.TIME_SHORT}
                  >
                    Czas do końca: najmniej
                  </MenuItem>
                  <MenuItem
                    className={classes.dropDownItem}
                    value={SortingOption.TIME_LONG}
                  >
                    Czas do końca: najwięcej
                  </MenuItem>
                </Select>
              </FormControl>
            </form>
          </div>
        )}
        <Grid className={classes.grid} container>
          {tasks.map(task => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={task.id}
              className={classes.gridItem}
            >
              <TaskListElement
                anchorEl={expandedDropdownAnchorEl}
                onExpandedMenuLeave={this.handleExpandedMenuLeave}
                onMoreButtonClick={this.handleMoreButtonClick}
                isEditable={isEditable}
                isDeletable={isDeletable}
                isMoreExpanded={task.id === expandedDropdownId}
                {...{ task }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }

  private handleExpandedMenuLeave = () =>
    this.setState(prevState =>
      prevState.expandedDropdownId
        ? { expandedDropdownId: null, expandedDropdownAnchorEl: null }
        : null,
    )

  private handleMoreButtonClick = (id: string) => (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) =>
    this.setState({
      expandedDropdownId: id,
      expandedDropdownAnchorEl: e.currentTarget,
    })

  private handleDropDownButtonClick = () =>
    this.setState(prevState => ({ dropDownOpen: !prevState.dropDownOpen }))

  private handleDropDownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onSortChange &&
      this.props.onSortChange(e.target.value as SortingOption)
  }
}

const styles: StyleRulesCallback = ({ spacing: { unit }, palette }) =>
  createStyles({
    container: {
      margin: 0,
      overflow: 'auto',
      width: '100vw',
    },
    dropDownSelect: {
      position: 'absolute',
      visibility: 'hidden',
      right: 0,
    },
    dropDownItem: {
      fontSize: '1.4rem',
      padding: '0.5rem 1rem',
    },
    grid: {
      marginTop: unit,
      margin: 0,
      width: '100vw',
    },
    gridItem: {
      padding: `${0}px ${unit}px ${unit}px ${unit}px`,
    },
    sortButton: {
      paddingRight: '0.5rem',
      color: palette.secondary.main,
    },
    taskLengthText: {
      display: 'flex',
      fontSize: '1.4rem',
      height: '2.4rem',
      justifyContent: 'space-between',
      lineHeight: '2.3rem',
      padding: `0 ${unit}px 0 ${unit}px`,
    },
    infoBarWithSort: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      padding: `0 ${unit}px 0 ${unit}px`,
    },
  })

interface TaskListProps extends WithStyles<typeof styles> {
  isEditable: boolean
  isDeletable: boolean
  tasks: TaskListTask[]
  infoBarWithSort?: boolean
  onSortChange?: (option: SortingOption) => void
  selectedSortOption?: string
}

interface TaskListState {
  expandedDropdownId: string | null
  expandedDropdownAnchorEl: EventTarget | null
  dropDownOpen: boolean
}

export default withStyles(styles)(TaskList)
