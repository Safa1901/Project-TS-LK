import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

interface ICheckBox {
  checked: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const CheckBox: React.FC<ICheckBox> = React.memo(
  ({ checked, handleChange }) => {
    return (
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        color="primary"
        disableRipple={true}
        style={{
          padding: 0,
        }}
      />
    )
  }
)
