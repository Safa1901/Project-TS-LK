export const eventsObjectData = [
  {
    id: 0,
    date: { fullYear: '11.05.2020', time: '11:53' },
    description: 'Снятие с охраны | Ключ 1',
    status: { id: 0, name: 'Выполнено' },
  },
  {
    id: 1,
    date: { fullYear: '02.03.2020', time: '16:19' },
    description: 'Списание по договору № 4515 за Январь 2020',
    status: { id: 1, name: '- 300 ₽' },
  },
]
/* headers */
/* 
'Статус',
'Номер',
'Клиент',
'Объекты/услуги',
'Абон. плата ₽',
 */
export const contractsDocumentsData = [
  {
    id: 0,
    status: { id: 0, name: 'Активен' },
    docNumber: '№145-516-11',
    client: 'ООО «Рога и копыта»',
    object: '2',
    subscriptionPay: '300 ₽',
  },
  {
    id: 1,
    status: { id: 1, name: 'Неактивен' },
    docNumber: '№145-516-11',
    client: 'ООО «Рога и копыта»',
    object: '1',
    subscriptionPay: '300 ₽',
  },
]
/* headers */
/* 
'№ счёта',
'Дата счёта',
'Дата оплаты',
'Сумма ₽',
'Акты',
 */
export const actsDocumentsData = [
  {
    id: 0,
    accountNumber: '123-456-789',
    accountDate: '23.07.2020 16:48',
    payDate: '23.07.2020 17:00',
    sum: '15 000 ₽',
    acts: {
      url: '#',
      label: 'Сформировать акт',
    },
  },
  {
    id: 1,
    accountNumber: '321-456-789',
    accountDate: '11.06.2020 15:20',
    payDate: '11.06.2020 15:21',
    sum: '7 000 ₽',
    acts: {
      url: '#',
      label: 'Скачать акт',
    },
  },
]
/* headers */
/* 
'Приоритет',
'ФИО',
'Телефон',
'Доп. телефон',
'Действия',
 */
export const responsibleData = [
  {
    id: 0,
    priority: 1,
    fio: 'Иван Иван Иванович',
    phone: '+7 (900) 000-00-00',
    additionalPhone: '+7 (900) 000-00-00',
  },
  {
    id: 1,
    priority: 2,
    fio: 'Иванова Мария Ивановна',
    phone: '+7 (900) 000-00-01',
    additionalPhone: '+7 (900) 000-00-01',
  },
]
