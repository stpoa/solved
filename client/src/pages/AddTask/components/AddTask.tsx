import { Button, Tab, Tabs } from '@material-ui/core'
import { createStyles, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core/styles'
import React, { ChangeEvent, Fragment, MouseEventHandler, SFC } from 'react'
import { SelectCategory, SelectCategoryProps, SelectTags, SelectTagsProps } from '~generic'
import CapturePhoto, { CapturePhotoProps } from './CapturePhoto'
import Description, { DescriptionProps } from './Description'

const AddTask: SFC<AddTaskProps> = ({
  classes: { addTaskContainer, container, content, item },
  categories, onClickCategory, onChangeDescription, onChangeTab, onCapturePhoto,
  onClickTag, onSubmit, categoryValue, descriptionValue, image, tags, tabValue,
}) => (
    <div className={container}>
      <Tabs
        fullWidth
        onChange={onChangeTab}
        value={tabValue}
      >
        <Tab className={item} label="Kategorie" />
        <Tab className={item} label="Tagi" />
      </Tabs>
      <Fragment>
          {tabValue === false && <div className={addTaskContainer}>
            <div className={content}>
              <Description
                onChange={onChangeDescription}
                value={descriptionValue}
              />
              <CapturePhoto onCapture={onCapturePhoto} imgSrc={image} />
            </div>
            <Button fullWidth onClick={onSubmit}>Dodaj zadanie</Button>
          </div>}
          {tabValue === 0 && <SelectCategory
            categories={categories}
            onClick={onClickCategory}
            value={categoryValue}
          />}
          {tabValue === 1 && <SelectTags onClick={onClickTag} tags={tags} />}
      </Fragment>
    </div>
)

const styles: StyleRulesCallback = () => createStyles({
  addTaskContainer: {
    display: 'grid',
    gridTemplateRows: 'auto max-content',
  },
  container: {
    display: 'grid',
    gridTemplateRows: 'max-content auto',
  },
  content: {
    display: 'grid',
    gridTemplateRows: '50% 50%',
  },
  item: {
    justifyContent: 'center',
    maxWidth: '100%',
  },
})

export interface AddTaskProps extends WithStyles<typeof styles> {
  categories: SelectCategoryProps['categories']
  onClickCategory: SelectCategoryProps['onClick']
  onClickTag: SelectTagsProps['onClick']
  onSubmit: MouseEventHandler
  onCapturePhoto: CapturePhotoProps['onCapture']
  onChangeDescription: DescriptionProps['onChange']
  onChangeTab: (e: ChangeEvent<{}>, value: number) => void
  categoryValue: SelectCategoryProps['value']
  descriptionValue: DescriptionProps['value']
  image: CapturePhotoProps['imgSrc']
  tags: SelectTagsProps['tags']
  tabValue: boolean | number
}

export default withStyles(styles)(AddTask)
