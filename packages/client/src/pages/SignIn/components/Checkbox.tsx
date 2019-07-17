import CheckboxBase, {
  CheckboxProps as CheckboxBaseProps,
} from '@material-ui/core/Checkbox'
import FormControlLabel, {
  FormControlLabelProps,
} from '@material-ui/core/FormControlLabel'
import React, { FunctionComponent } from 'react'

const Checkbox: FunctionComponent<CheckboxProps> = ({ label, ...rest }) => (
  <FormControlLabel control={<CheckboxBase {...rest} />} label={label} />
)

interface CheckboxProps extends CheckboxBaseProps {
  label: FormControlLabelProps['label']
}

export default Checkbox
