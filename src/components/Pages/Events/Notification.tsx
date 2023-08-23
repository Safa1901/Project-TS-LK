import React from 'react'
//styles
import styles from './styles/notification.module.scss'
import { Link } from 'react-router-dom'
import { ButtonBefore } from 'templates/Buttons/Buttons'

interface INotification {
  id: string
}

export const Notification: React.FC<INotification> = React.memo(({}) => {
  return (
    <section className={styles.root}>
      <div className={styles.root__header}>Технические работы</div>
      <div className={styles.root__before_link}>
        <Link to="/events">
          <ButtonBefore text="Назад" />
        </Link>
      </div>
      <div className={styles.root__notification}>
        <div className={styles.root__notification__date}>22.04.2020</div>
        <div className={styles.root__notification__header}>
          Уважаемые пользователи!
        </div>
        <div className={styles.root__notification__message}>
          Доводим до вашего сведения, что 1.05.2020 г. в личном кабинете «Нева»
          проводятся технические работы по обновлению программного обеспечения с
          целью улучшения качества предоставляемых услуг. В связи с этим
          возможны перерывы в работе контрольной панели и сайта «Нева».
          Клиентские сервисы продолжают работать в нормальном режиме. Приносим
          извинения за доставленные неудобства.
        </div>
      </div>
    </section>
  )
})
