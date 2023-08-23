import React from 'react'
import styles from './styles.module.scss'
import { ButtonLink } from 'templates/Buttons/Buttons'

export const InfoPayment = React.memo(({}) => {
  return (
    <div className={styles.root_info}>
      <div className={styles.root_info__header}>Предыдущий платёж</div>
      <div className={styles.root_info__info}>
        Л/С: 1234567890 Cумма: 20 000 ₽
      </div>
      <div className={styles.root_info__action}>
        <ButtonLink text="Повторить" />
      </div>
    </div>
  )
})
