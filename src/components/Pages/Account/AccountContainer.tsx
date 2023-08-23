import React from 'react'
//styles
import styles from './styles/container.module.scss'
import { CustomizedTabs } from './CustomizedTabs'

export const AccountContainer = React.memo(({}) => {
  return (
    <section className={styles.root}>
      <div className={styles.root__header}>Настройки аккаунта</div>
      <div>
        <CustomizedTabs />
      </div>
    </section>
  )
})
