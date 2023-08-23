import React from 'react'
//styles
import styles from './styles/notifications.module.scss'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'

export const Notifications = React.memo(({}) => {
  const history = useHistory()
  const [selectedNotification, setSelectedNotification] = React.useState<
    number | null
  >(null)
  const [data] = React.useState([
    {
      date: 'Май 2020',
      notifications: [
        {
          type: 1, //default
          id: 1,
          message: 'Акт выполненных работ по договору № 123-456 сформирован',
          date: '01.05.2020',
        },
        {
          type: 2, //sale,
          id: 2,
          message:
            'Тревожная кнопка в приложении «НеваОнлайн» – бесплатно до 1 июня!',
          date: '24.04.2020',
        },
        {
          type: 1, //default
          id: 3,
          message: 'Акт выполненных работ по договору № 123-456 сформирован',
          date: '01.05.2020',
        },
        {
          type: 2, //sale,
          id: 4,
          message:
            'Тревожная кнопка в приложении «НеваОнлайн» – бесплатно до 1 июня!',
          date: '24.04.2020',
        },
      ],
    },
    {
      date: 'Май 2020',
      notifications: [
        {
          type: 1, //default
          id: 5,
          message: 'Акт выполненных работ по договору № 123-456 сформирован',
          date: '01.05.2020',
        },
        {
          type: 2, //sale,
          id: 6,
          message:
            'Тревожная кнопка в приложении «НеваОнлайн» – бесплатно до 1 июня!',
          date: '24.04.2020',
        },
        {
          type: 1, //default
          id: 7,
          message: 'Акт выполненных работ по договору № 123-456 сформирован',
          date: '01.05.2020',
        },
        {
          type: 2, //sale,
          id: 8,
          message:
            'Тревожная кнопка в приложении «НеваОнлайн» – бесплатно до 1 июня!',
          date: '24.04.2020',
        },
      ],
    },
  ])
  const forwardHist = (path: string) => history.push(path)
  return (
    <section className={styles.root}>
      {data &&
        Array.isArray(data) &&
        data.map((d, index) => {
          return (
            <section key={index} className={styles.root__notifications_wrapper}>
              <div className={styles.root__notifications_wrapper__date}>
                {d.date}
              </div>
              {d.notifications &&
                Array.isArray(d.notifications) &&
                d.notifications.map((n, idx) => {
                  const selected = selectedNotification === n.id
                  switch (n.type) {
                    case 1:
                      return (
                        <div
                          key={idx}
                          className={clsx({
                            [styles.root__notifications_wrapper__default]: true,
                            [styles.selected]: selected,
                          })}
                          onClick={() => setSelectedNotification(n.id)}
                          onDoubleClick={() =>
                            forwardHist(`/events/notification/${n.id}`)
                          }
                        >
                          <div>{n.message}</div>
                          <div>{n.date}</div>
                        </div>
                      )
                    case 2:
                      return (
                        <div
                          key={idx}
                          className={clsx({
                            [styles.root__notifications_wrapper__sale]: true,
                            [styles.selected]: selected,
                          })}
                          onClick={() => setSelectedNotification(n.id)}
                          onDoubleClick={() =>
                            forwardHist(`/events/notification/${n.id}`)
                          }
                        >
                          <div>
                            <span>Акция</span>
                          </div>
                          <div>{n.message}</div>
                          <div>{n.date}</div>
                        </div>
                      )
                    default:
                      return null
                  }
                })}
            </section>
          )
        })}
      <div className={styles.root__issued_active_notifications}>
        В данный момент у вас нет активных уведомлений
      </div>
    </section>
  )
})
