import React from 'react'
import InputMask from 'react-input-mask'
//! => Material UI stuff
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { InputText } from './InputText'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#283139',
    },
  },
})
export const NativeInputPhone = ({
  title,
  placeholder,
  beforeMaskedValueChange,
  name,
  value,
  onChange,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <InputMask
        mask="+7 999 999-99-99"
        maskChar={null}
        value={value}
        name={name}
        onChange={onChange}
        beforeMaskedValueChange={beforeMaskedValueChange}
      >
        {(inputProps) => {
          return (
            <InputText
              type="text"
              value={value}
              placeholder={placeholder}
              name={name}
              title={title}
            />
          )
        }}
      </InputMask>
    </ThemeProvider>
  )
}
