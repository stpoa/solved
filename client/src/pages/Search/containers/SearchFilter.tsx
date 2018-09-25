import React, { Component } from 'react'
import { categories, tags } from '~data'
import SearchFilter, { SearchFilterProps } from '../components/SearchFilter'

export default class SearchFilterContainer extends Component<{}, SearchFilterContainerState> {
  public readonly state: SearchFilterContainerState = {
    categories,
    categoryValue: '',
    tabValue: 0,
    tags: tags.map(tag => ({ name: tag, selected: false })),
  }

  public render () {
    return (
      <SearchFilter
        categories={this.state.categories}
        categoryValue={this.state.categoryValue}
        onClickCategory={this.selectCategory}
        onClickTag={this.selectTag}
        onSubmit={this.search}
        onChangeTab={this.selectTab}
        tabValue={this.state.tabValue}
        tags={this.state.tags}
      />
    )
  }

  private selectTab: SearchFilterProps['onChangeTab'] = (_, value) => {
    this.setState(prevState => ({
      tabValue: prevState.tabValue === value ? false : value,
    }))
  }

  private selectCategory: SearchFilterProps['onClickCategory'] = id => {
    this.setState({ categoryValue: id })
  }

  private selectTag: SearchFilterProps['onClickTag'] = tagName => {
    this.setState(prevState => ({
      tags: prevState.tags.map(tag => (
        tag.name !== tagName
          ? tag
          : {
            name: tag.name,
            selected: !tag.selected,
          }
      )),
    }))
  }

  private search: SearchFilterProps['onSubmit'] = () => { return }
}

interface SearchFilterContainerState {
  categoryValue: SearchFilterProps['categoryValue']
  categories: SearchFilterProps['categories'],
  tags: SearchFilterProps['tags'],
  tabValue: SearchFilterProps['tabValue']
}
