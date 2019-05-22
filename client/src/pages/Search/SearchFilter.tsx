import { Divider, IconButton, InputBase, Paper } from '@material-ui/core'
import {
  createStyles,
  StyleRulesCallback,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles'
import { Close, Search } from '@material-ui/icons'
import React, {
  ChangeEvent,
  FunctionComponent,
  MouseEventHandler,
  useState,
} from 'react'
import { tags, tasks } from '~data'
import { NavigationBar, SelectTags, TaskList } from '~generic'
import { SortingOption } from '~generic/TaskList/components/TaskList'
import { TagValue } from '~stores/CreateTask'
import { extendTags } from '~utils/tags'

const fetchTasks = (
  prefferedTags: TagValue[],
  sortingOption: SortingOption,
  searchInputValue: string,
) => {
  // tslint:disable-next-line:no-console
  console.log(prefferedTags, sortingOption, searchInputValue)
}

const SearchFilter: FunctionComponent<SearchFilterProps> = ({ classes }) => {
  const [searchValue, setSearchValue] = useState('')
  const [savedTags, updateTags] = useState(extendTags(tags))
  const [selectedSortOption, updateSortOption] = useState(
    SortingOption.TIME_SHORT,
  )

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fetchTasks(savedTags, selectedSortOption, e.target.value)
    setSearchValue(e.target.value)
  }

  const handleSearchClear = () => {
    fetchTasks(savedTags, selectedSortOption, '')
    setSearchValue('')
  }

  const handleTagChange = (name: string) => () => {
    const clickedTag = savedTags.find(t => t.name === name)!
    if (clickedTag.selected) {
      const newTags = savedTags.map(tag =>
        tag.name === name ? { ...tag, selected: false } : { ...tag },
      )
      updateTags(newTags)
      fetchTasks(newTags, selectedSortOption, searchValue)
    } else {
      const newTags = savedTags.map(tag =>
        tag.name === name
          ? { ...tag, visible: true, selected: true }
          : { ...tag, visible: true },
      )
      updateTags(newTags)
      fetchTasks(newTags, selectedSortOption, searchValue)
    }
  }

  const handleSortChange = (option: SortingOption) => {
    updateSortOption(option)
    fetchTasks(savedTags, option, searchValue)
  }

  return (
    <div>
      <div className={classes.container}>
        <Paper className={classes.root} elevation={1}>
          <IconButton className={classes.iconButton}>
            <Search />
          </IconButton>
          <InputBase
            className={classes.input}
            onChange={handleSearchChange}
            placeholder="Szukaj"
            value={searchValue}
          />
          <Divider className={classes.divider} />
          <IconButton
            className={classes.iconButton}
            onClick={handleSearchClear}
          >
            <Close />
          </IconButton>
        </Paper>
        <div className={classes.tagsWrapper}>
          <div className={classes.tags}>
            <SelectTags
              tags={savedTags}
              selectedTagsLimit={100}
              onTagSelect={handleTagChange}
            />
          </div>
        </div>
        <TaskList
          infoBarWithSort
          selectedSortOption={selectedSortOption}
          onSortChange={handleSortChange}
          tasks={tasks}
        />
      </div>
      <NavigationBar />
    </div>
  )
}

const styles: StyleRulesCallback = theme =>
  createStyles({
    item: {
      justifyContent: 'center',
      maxWidth: '100%',
    },
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing.unit,
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    tagsWrapper: {
      overflowX: 'auto',
      overflowY: 'hidden',
      overflowScrolling: 'touch',
    },
    tags: {
      display: 'inline-flex',
      marginLeft: '0.5rem',
      marginRight: '0.5rem',
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
  })

export default withStyles(styles)(SearchFilter)

export interface SearchFilterProps extends WithStyles<typeof styles> {
  onSubmit: MouseEventHandler
  onChangeTab: (e: ChangeEvent<{}>, value: number) => void
  tabValue: boolean | number
}
