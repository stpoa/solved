import FormControlLabel, {
  FormControlLabelProps,
} from '@material-ui/core/FormControlLabel'
import {
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import SwitchBase, {
  SwitchProps as SwitchBaseProps,
} from '@material-ui/core/Switch'
import React, { FC } from 'react'

const Switch: FC<SwitchProps> = ({ classes, label, ...rest }) => (
  <FormControlLabel
    classes={{ label: classes.label }}
    control={
      <SwitchBase
        color="secondary"
        classes={{
          bar: classes.bar,
          checked: classes.checked,
          icon: classes.icon,
        }}
        {...rest}
      />
    }
    label={label}
  />
)

const styles: StyleRulesCallback = theme => ({
  bar: {
    borderRadius: 15,
    height: 30,
    marginLeft: -25,
    marginTop: -15,
    width: 55,
  },
  checked: {
    transform: 'translateX(20px)',
  },
  icon: {
    color: theme.palette.common.white,
    height: 24,
    width: 24,
  },
  label: {
    color: theme.typography.body1.color,
    marginLeft: 15,
  },
})

interface SwitchProps
  extends Omit<SwitchBaseProps, 'classes'>,
    WithStyles<typeof styles> {
  label: FormControlLabelProps['label']
}

export default withStyles(styles)(Switch)
