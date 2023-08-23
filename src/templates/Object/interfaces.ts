import { IObject } from 'components/interfaces'

export interface IPropsObjectsTable {
  setCurrentObject: (data: any) => void
  data: any[]
}
export interface IPropsObjectsStatus {
  currentObject: IObject
}
/* 
city: 'Краснодар',
      status: { name: 'Под охраной', id: 2 },
      responsible: 'Иванов Иван',
      balance: 'Недоступно',
      address: 'Краснодарский край, Краснодар, Пашковская 74 Р/С: 1234567890',
      name: `Tестовое наименование объекта`,
      paymentVal: '10000',
 */
