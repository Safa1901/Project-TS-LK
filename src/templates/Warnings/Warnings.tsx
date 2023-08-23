import React from 'react'
//styles
import styles from './style.module.scss'
import { WarningIcon } from '@Files/icons'

export const WarningBall = React.memo(({}) => {
  return (
    <section className={styles.root__ball}>
      <WarningIcon />
    </section>
  )
})
export const WarningBallText = React.memo(({}) => {
  return (
    <section className={styles.root__ball_text}>
      <WarningBall />
      <div>Тревожная кнопка</div>
    </section>
  )
})
