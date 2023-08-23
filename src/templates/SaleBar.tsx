import * as React from 'react'
import styles from '../scss/saleBar.module.scss'
import { ReactComponent as GiftIcon } from '@Files/gift.svg'

interface ISaleBar {
  title: string
  period: string
}
export const SaleBar: React.FC<ISaleBar> = React.memo(({ title, period }) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__icon}>
        <GiftIcon />
      </div>
      <div className={styles.root__titles}>
        <div className={styles.root__titles__main}>{period}</div>
        <div className={styles.root__titles__context}>{title}</div>
      </div>
      <div className={styles.root__action}>
        <button className={styles.root__action__btn}>Подробнее</button>
      </div>
    </div>
  )
})
