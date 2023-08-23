import * as React from 'react'
import styles from './styles/ObjectStatusIndicator.module.scss'
import clsx from 'clsx'
//statuses ids
/* 
1 - alarm
2 - guarded
3 - disarm
4 - inactive
 */
interface TProps {
  statusId: number
}
export const ObjectStatusIndicator: React.FC<TProps> = React.memo(
  ({ statusId }) => {
    const classIndicator = clsx({
      [styles.alarm]: statusId === 1,
      [styles.guarded]: statusId === 2,
      [styles.disarm]: statusId === 3,
      [styles.inactive]: statusId === 4,
    })
    return (
      <section className={styles.root}>
        <div className={classIndicator}></div>
      </section>
    )
  }
)
export const ObjectStatusIndicatorBall: React.FC<TProps> = React.memo(
  ({ statusId }) => {
    const classIndicator = clsx({
      [styles.alarm]: statusId === 1,
      [styles.guarded]: statusId === 2,
      [styles.disarm]: statusId === 3,
      [styles.inactive]: statusId === 4,
    })
    return (
      <section className={styles.root__ball}>
        <div className={classIndicator}></div>
      </section>
    )
  }
)
