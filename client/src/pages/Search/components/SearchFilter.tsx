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
import { pageContentNotScrollableStyles } from '~pages/styles'

const SearchFilter: FunctionComponent<SearchFilterProps> = ({
  classes: { container, item },
  categories,
  onClickCategory,
  onChangeTab,
  onClickTag,
  categoryValue,
  tags,
  tabValue,
}) => (
  <div className={container}>
    <Tabs fullWidth onChange={onChangeTab} value={tabValue}>
      <Tab className={item} label="Kategorie" />
      <Tab className={item} label="Tagi" />
    </Tabs>
    <Fragment>
      {tabValue === 0 && (
        <SelectCategory
          categories={categories}
          onClick={onClickCategory}
          value={categoryValue}
        />
      )}
      {tabValue === 1 && <SelectTags onClick={onClickTag} tags={tags} />}
    </Fragment>
  </div>
)

const styles: StyleRulesCallback = () =>
  createStyles({
    container: {
      ...pageContentNotScrollableStyles,
      gridTemplateRows: 'max-content auto',
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
  onClickTag: SelectTagsProps['onClick']
  onSubmit: MouseEventHandler
  onChangeTab: (e: ChangeEvent<{}>, value: number) => void
  categoryValue: SelectCategoryProps['value']
  tags: SelectTagsProps['tags']
  tabValue: boolean | number
}
