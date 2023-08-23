import React from 'react'
//styles
import styles from '../styles/payment.module.scss'
import { CardPayment } from './CardPayment'
import { PersonAccountPayment } from './PersonAccountPayment'

export const Payment = React.memo(({}) => {
  return (
    <section className={styles.root}>
      <div className={styles.root__payment_block}>
        <CardPayment />
      </div>
      <div className={styles.root__payment_block}>
        <PersonAccountPayment />
      </div>
    </section>
  )
})
