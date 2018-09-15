import React, { Component } from 'react'
import { categories, tags as tagsData } from '~data'
import { Status } from '~interfaces'
import AddTask, { AddTaskProps } from './../components/AddTask'
import addTask from './../service'

class AddTaskContainer extends Component<{}, AddTaskContainerState> {
  public readonly state: AddTaskContainerState = {
    categories,
    categoryValue: '',
    descriptionValue: '',
    image: '',
    status: undefined,
    tabValue: false,
    tags: tagsData.map((tag) => ({ name: tag, selected: false }))
  }

  public async componentDidUpdate (_: {}, prevState: AddTaskContainerState) {
    const { categoryValue, descriptionValue, status } = this.state

    if (prevState.status !== Status.Pending && status === Status.Pending) {
      await addTask({
        category: categoryValue,
        shortDescription: descriptionValue,
        tags: this.state.tags.filter((tag) => tag.selected).map((tag) => tag.name)
      })
    }
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
    this.setState({ descriptionValue: e.target.value })
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

  private validate (state: AddTaskContainerState): boolean {

    const { categoryValue, descriptionValue, tags } = state

    return Boolean(
      categoryValue &&
      descriptionValue.length > 10 &&
      tags.filter((tag) => tag.selected).length
    )
  }

  private addTask: AddTaskProps['onSubmit'] = () => {
    this.setState((state) => {
      return this.validate(state) ? { status: Status.Pending } : null
    })
  }
}

interface AddTaskContainerState {
  categoryValue: AddTaskProps['categoryValue']
  categories: AddTaskProps['categories'],
  descriptionValue: AddTaskProps['descriptionValue'],
  image: AddTaskProps['image'],
  status: Status | undefined,
  tags: AddTaskProps['tags'],
  tabValue: AddTaskProps['tabValue']
}

export default AddTaskContainer
