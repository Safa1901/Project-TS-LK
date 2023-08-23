import React from 'react'
//styles
import styles from './styles/container.module.scss'
import { EventsTabs } from './EventsTabs'

export const EventsContainer = React.memo(({}) => {
  return (
    <section className={styles.root}>
      <div className={styles.root__header}>События и уведомления</div>
      <div>
        <EventsTabs />
      </div>
    </section>
  )
})
