import { List, MenuItem } from '@material-ui/core'
import { createStyles, StyleRules, withStyles, WithStyles } from '@material-ui/core/styles'
import React, { SFC } from 'react'
import { Category, CategoryList } from '~interfaces'

const styles: StyleRules = createStyles({
  container: {
    height: '100%',
    overflow: 'auto'
  },
  item: {
    display: 'block',
    textAlign: 'center'
  },
  list: {
    height: 0
  }
})

export interface SelectCategoryProps extends WithStyles<typeof styles> {
  categories: CategoryList,
  onClick: (id: Category['id']) => void,
  value: Category['id'] | null
}

const SelectCategory: SFC<SelectCategoryProps> = ({
  categories,
  classes: { container, item, list },
  onClick,
  value
}) => (
  <div className={container}>
    <List
      disablePadding
      classes={{ root: list }}
    >
      {categories.map(({ id, name }) => (
        <MenuItem
          button
          className={item}
          key={id}
          onClick={onClick.bind(null, id)}
          selected={value === id}
        >
          {name}
        </MenuItem>
      ))}
    </List>
  </div>
)

export default withStyles(styles)(SelectCategory)
