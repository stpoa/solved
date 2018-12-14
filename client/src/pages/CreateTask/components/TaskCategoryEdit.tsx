import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio,
  RadioGroup, StyleRulesCallback, Typography, WithStyles, withStyles,
} from '@material-ui/core'
import React, { SFC } from 'react'
import { OnChangeRadio } from '~typings/react'

const TaskCategoryEdit: SFC<TaskCategoryEditProps> = (
  { classes, category, categories, onCategoryUpdate },
) => (
  <div className={classes.container}>

    <Typography className={classes.title} gutterBottom variant="h6" component="h2">
      Opis
    </Typography>

    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Gender</FormLabel>

      <div style={{ maxHeight: '50vh', width: '80vw', overflow: 'scroll' }}>
        <RadioGroup
          aria-label="category"
          name="category"
          className={classes.group}
          value={category}
          onChange={onCategoryUpdate}
        >
        {categories.map((singleCategory, i) => (
          <FormControlLabel
            key={i}
            value={singleCategory}
            control={<Radio color="primary" />}
            label={singleCategory}
            labelPlacement="start"
          />
        ))}
        </RadioGroup>
      </div>
        <FormHelperText>labelPlacement start</FormHelperText>
      </FormControl>
    </div>
)

const styles: StyleRulesCallback = () => ({
  title: {
    textAlign: 'center',
  },
  container: {},
  form: {
    padding: '2rem',
  },
})

interface TaskCategoryEditProps extends WithStyles<typeof styles> {
  category: string
  categories: string[]
  onCategoryUpdate: OnChangeRadio
}

export default withStyles(styles)(TaskCategoryEdit)
