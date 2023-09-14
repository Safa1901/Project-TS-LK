import React from 'react'
//styles
import styles from './styles/container.module.scss'
import { CustomizedTabs } from './CustomizedTabs'

export const PaymentContainer = React.memo(({}) => {
  return (
    <section className={styles.root}>
      <div className={styles.root__header}>Оплата услуг</div>
      <div className={styles.root__tabs_wrapper}>
        <CustomizedTabs />
      </div>
    </section>
  )
})
