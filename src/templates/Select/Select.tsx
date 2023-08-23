import React from 'react'
//styles
import styles from './style.module.scss'

interface INativeSelect {
  data: { id: number; name: string }[]
  name: string
  value: string
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const NativeSelect: React.FC<INativeSelect> = React.memo(
  ({ data, onChange, name, value, placeholder }) => {
    return (
      <select
        className={styles.root}
        name={name}
        onChange={(event) => {
          if (onChange && typeof onChange === 'function') return onChange(event)
        }}
        value={value}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {data &&
          Array.isArray(data) &&
          data.map((d, index) => {
            return (
              <option key={index} value={d.id}>
                {d.name}
              </option>
            )
          })}
      </select>
    )
  }
)
