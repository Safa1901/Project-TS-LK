import React from 'react'
//styles
import styles from './styles/documents.module.scss'
import { DocumentsTable } from 'templates/Tables/DocumentsTable'
import { contractsDocumentsData, actsDocumentsData } from './data'

export const Documents = React.memo(({}) => {
  const [currentContract, setCurrentContract] = React.useState(null)
  const [currentAct, setCurrentAct] = React.useState(null)
  const [contractsHeaders] = React.useState([
    'Статус',
    'Номер',
    'Клиент',
    'Объекты/услуги',
    'Абон. плата ₽',
  ])
  const [actsHeaders] = React.useState([
    '№ счёта',
    'Дата счёта',
    'Дата оплаты',
    'Сумма ₽',
    'Акты',
  ])
  return (
    <section className={styles.root}>
      <div className={styles.root__contracts}>
        <div className={styles.root__contracts__header}>Договоры</div>
        <div className={styles.root__contracts__table}>
          <DocumentsTable
            type="contract"
            headers={contractsHeaders}
            data={contractsDocumentsData}
            onChangeRow={(data) => setCurrentContract(data)}
          />
        </div>
      </div>
      <div className={styles.root__acts}>
        <div className={styles.root__acts__header}>Акты выполненных работ</div>
        <div className={styles.root__acts__table}>
          <DocumentsTable
            type="acts"
            headers={actsHeaders}
            data={actsDocumentsData}
            onChangeRow={(data) => setCurrentAct(data)}
          />
        </div>
      </div>
    </section>
  )
})
