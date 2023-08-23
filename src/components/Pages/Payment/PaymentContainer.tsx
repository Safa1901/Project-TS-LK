import React from 'react'
//styles
import styles from './styles/container.module.scss'
import { SaleBar } from 'templates/SaleBar'
import { CustomizedTabs } from './CustomizedTabs'

export const PaymentContainer = React.memo(({}) => {
  return (
    <section className={styles.root}>
      <div className={styles.root__header}>Оплата услуг</div>
      <SaleBar
        title="Оплатите 11 месяцев и получите месяц в подарок"
        period="Акция до 1 июня 2020 г."
      />
      <div className={styles.root__tabs_wrapper}>
        <CustomizedTabs />
      </div>
    </section>
  )
})
