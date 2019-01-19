import { Tab, Tabs } from '@material-ui/core'
import {
  createStyles,
  StyleRulesCallback,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles'
import React, {
  ChangeEvent,
  Fragment,
  FunctionComponent,
  MouseEventHandler,
} from 'react'
import {
  SelectCategory,
  SelectCategoryProps,
  SelectTags,
  SelectTagsProps,
} from '~generic'
import { pageContentNotScrollableWithNavigationBar } from '~pages/styles'

const SearchFilter: FunctionComponent<SearchFilterProps> = ({
  classes,
  categories,
  onClickCategory,
  onChangeTab,
  onClickTag,
  categoryValue,
  tags,
  tabValue,
}) => (
  <div className={classes.container}>
    <Tabs fullWidth onChange={onChangeTab} value={tabValue}>
      <Tab className={classes.item} label="Kategorie" />
      <Tab className={classes.item} label="Tagi" />
    </Tabs>
    <Fragment>
      {tabValue === 0 && (
        <SelectCategory
          categories={categories}
          onClick={onClickCategory}
          value={categoryValue}
        />
      )}
      {tabValue === 1 && <SelectTags onTagSelect={onClickTag} tags={tags} />}
    </Fragment>
  </div>
)

const styles: StyleRulesCallback = theme =>
  createStyles({
    container: {
      ...pageContentNotScrollableWithNavigationBar(theme),
    },
    item: {
      justifyContent: 'center',
      maxWidth: '100%',
    },
  })

export default withStyles(styles)(SearchFilter)

export interface SearchFilterProps extends WithStyles<typeof styles> {
  categories: SelectCategoryProps['categories']
  onClickCategory: SelectCategoryProps['onClick']
  onClickTag: SelectTagsProps['onTagSelect']
  onSubmit: MouseEventHandler
  onChangeTab: (e: ChangeEvent<{}>, value: number) => void
  categoryValue: SelectCategoryProps['value']
  tags: SelectTagsProps['tags']
  tabValue: boolean | number
}
