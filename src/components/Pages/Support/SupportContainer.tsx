import React from 'react'
//styles
import styles from './styles/container.module.scss'
import { ButtonBase } from 'templates/Buttons/Buttons'
import { DefaultTable } from 'templates/Tables/DefaultTable'
import { Link, useHistory } from 'react-router-dom'

export const SupportContainer = React.memo(({}) => {
  const [changeData, setChangeData] = React.useState<any>({})
  const history = useHistory()
  const [data] = React.useState([
    {
      id: 1,
      date: '11.05.2020',
      docNumber: '512345',
      responsible: 'Иванов Иван',
      status: { id: 1, name: 'Открыто' },
    },
    {
      id: 2,
      date: '02.03.2020',
      docNumber: '456789',
      responsible: 'Иванов Иван',
      status: { id: 2, name: 'Закрыто' },
    },
  ])
  //
  const forwardHist = (path: string) => history.push(path)
  return (
    <section className={styles.root}>
      <div className={styles.root__header}>Обращения в службу поддержки</div>
      <div className={styles.root__info}>
        В данный момент у вас нет активных обращений в службу поддержки
      </div>
      <div className={styles.root__action}>
        <Link to="/add/new/appeals/to/suport">
          <ButtonBase text="Написать обращение" disabled={false} />
        </Link>
      </div>
      <div className={styles.root__data_table}>
        <DefaultTable
          type="supportAppeals"
          data={data}
          headers={['Дата', '№', 'Ответственный', 'Статус']}
          onChangeRow={(data) => setChangeData(data)}
          onDoubleClickRow={(data) => forwardHist(`/support/appeal/${data.id}`)}
        />
      </div>
    </section>
  )
})
