import React, { ChangeEvent } from 'react'
//styles
import styles from './style.module.scss'
interface IInputText {
  type: 'text' | 'number' | 'password'
  title?: string
  name: string
  value: string | number
  placeholder?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  helperText?: string
}
export const InputText: React.FC<IInputText> = React.memo(
  ({ title, type, helperText, placeholder, name, onChange, value }) => {
    return (
      <div className={styles.root_input_text}>
        <div className={styles.root_input_text__title}>{title}</div>
        <input
          type={type}
          name={name}
          onChange={(event) => onChange(event)}
          value={value}
          placeholder={placeholder}
        ></input>
        {helperText && (
          <div className={styles.root_input_text__helper_text}>
            {helperText}
          </div>
        )}
      </div>
    )
  }
)
