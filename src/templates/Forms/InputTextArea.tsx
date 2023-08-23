import React, { ChangeEvent } from 'react'
//styles
import styles from './style.module.scss'

interface IInputTextArea {
  name: string
  value: string | number
  placeholder?: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
export const InputTextArea: React.FC<IInputTextArea> = React.memo(
  ({ placeholder, name, onChange, value }) => {
    return (
      <textarea
        className={styles.root_input_textarea}
        name={name}
        onChange={(event) => onChange(event)}
        value={value}
        placeholder={placeholder}
      />
    )
  }
)
