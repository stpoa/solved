import React, { Component } from 'react'
import { categories, tags } from '~data'
import AddTask, { AddTaskProps } from './../components/AddTask'

interface AddTaskContainerState {
  categoryValue: AddTaskProps['categoryValue']
  categories: AddTaskProps['categories'],
  descriptionValue: AddTaskProps['descriptionValue'],
  image: AddTaskProps['image'],
  tags: AddTaskProps['tags'],
  tabValue: AddTaskProps['tabValue']
}

export default class AddTaskContainer extends Component<{}, AddTaskContainerState> {
  public readonly state: AddTaskContainerState = {
    categories,
    categoryValue: '',
    descriptionValue: '',
    image: '',
    tabValue: false,
    tags: tags.map((tag) => ({ name: tag, selected: false }))
  }

  public render () {
    return (
      <AddTask
        categories={this.state.categories}
        categoryValue={this.state.categoryValue}
        descriptionValue={this.state.descriptionValue}
        onClickCategory={this.selectCategory}
        onClickTag={this.selectTag}
        onSubmit={this.addTask}
        onChangeDescription={this.changeDescription}
        onChangeTab={this.selectTab}
        onCapturePhoto={this.capturePhoto}
        image={this.state.image}
        tabValue={this.state.tabValue}
        tags={this.state.tags}
      />
    )
  }

  private changeDescription: AddTaskProps['onChangeDescription'] = (e) => {
    this.setState({
      descriptionValue: e.target.value
    })
  }

  private selectTab: AddTaskProps['onChangeTab'] = (_, value) => {
    this.setState((prevState) => ({
      tabValue: prevState.tabValue === value ? false : value
    }))
  }

  private selectCategory: AddTaskProps['onClickCategory'] = (id) => {
    this.setState({ categoryValue: id })
  }

  private selectTag: AddTaskProps['onClickTag'] = (tagName) => {
    this.setState((prevState) => ({
      tags: prevState.tags.map((tag) => (
        tag.name !== tagName
          ? tag
          : {
            name: tag.name,
            selected: !tag.selected
          }
      ))
    }))
  }

  private capturePhoto: AddTaskProps['onCapturePhoto'] = (image) => {
    this.setState({ image })
  }

  private addTask: AddTaskProps['onSubmit'] = () => { return }
}
