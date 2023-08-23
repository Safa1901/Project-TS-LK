import React from 'react'
import { DefaultTable } from 'templates/Tables/DefaultTable'

export const HistoryPaymentContainer = React.memo(({}) => {
  const [changeData, setChangeData] = React.useState<any>({})
  const [data] = React.useState([
    {
      date: '01.05.2020',
      method: 'Банковская карта',
      status: { id: 1, name: 'Оплачен' },
      sum: {
        id: 1,
        value: '+ 20 000 ₽',
      },
    },
    {
      date: '25.03.2020',
      method: 'Оплата по счёту',
      status: { id: 2, name: 'Не оплачен' },
      sum: { id: 2, value: 'Скачать счёт', url: '#' },
    },
    {
      date: '04.02.2020',
      method: 'Оплата по счёту',
      status: { id: 3, name: 'Сформировать акт', url: '#' },
      sum: { id: 1, value: '+ 15 000 ₽' },
    },
  ])
  return (
    <DefaultTable
      type="historyPayment"
      data={data}
      headers={['Дата', 'Способ оплаты', 'Статус', 'Сумма']}
      onChangeRow={(data) => setChangeData(data)}
    />
  )
})
