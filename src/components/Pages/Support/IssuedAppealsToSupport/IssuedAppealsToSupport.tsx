import React from 'react'
//styles
import styles from '../styles/IssuedAppealsToSupport.module.scss'
import { Link } from 'react-router-dom'
import { ButtonBefore } from 'templates/Buttons/Buttons'

interface IIssuedAppealsToSupport {
  id: string // id appeal
}

export const IssuedAppealsToSupport: React.FC<IIssuedAppealsToSupport> = React.memo(
  ({ id }) => {
    const [appeal] = React.useState({
      theme: 'Другой вопрос ',
      date: '24.03.2020',
      docNumber: '№456789',
      status: { id: 1, name: 'В работе / Обращение получено / Закрыто' },
      message: 'Не работает тревожная кнопка... ',
    })
    return (
      <section className={styles.root}>
        <div className={styles.root__header}>Обращения в службу поддержки</div>
        <div className={styles.root__before_link}>
          <Link to="/support">
            <ButtonBefore text="Назад" />
          </Link>
        </div>
        <div className={styles.root__appeal_wrapper}>
          <div>
            <span>Тема обращения:</span>
            &nbsp;
            <span>{appeal.theme}</span>
          </div>
          <div>
            <span>Дата:</span>
            &nbsp;
            <span>{appeal.date}</span>
          </div>
          <div>
            <span>Номер обращения:</span>
            &nbsp;
            <span>{appeal.docNumber}</span>
          </div>
          <div>
            <span>Статус:</span>
            &nbsp;
            <span>{appeal.status?.name}</span>
          </div>
          <div>
            <span>Сообщение:</span>
            &nbsp;
            <span>{appeal.message}</span>
          </div>
        </div>
      </section>
    )
  }
)
