import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { MainPageContainer } from './components/Pages/Main/MainPageContainer'
import { AccountContainer } from 'components/Pages/Account/AccountContainer'
import { NewPaymentAccountContainer } from 'components/Pages/NewPaymentAccount/NewPaymentAccountContainer'
import { PaymentContainer } from 'components/Pages/Payment/PaymentContainer'
import { EventsContainer } from 'components/Pages/Events/EventsContainer'
import { Notifications } from 'components/Pages/Admin/Notifications/Notifications'
import { DetailObjectContainer } from 'components/Pages/DetailObject/DetailObjectContainer'
import { ObjectNevaOnlain } from 'components/Pages/Admin/Object/ObjectNevaOnlain'
import { Pults } from 'components/Pages/Admin/Pults/Pults'
import { Payments } from 'components/Pages/Admin/Payments/Payments'
import { TriggeringPTK } from 'components/Pages/Admin/TriggeringPTK/TriggeringPTK'
import { AreasResponsobility } from 'components/Pages/Admin/AreasResponsobility/AreasResponsobility'
import  { AreasService } from 'components/Pages/Admin/AreasService/AreasService'
import { CompanyDetails } from 'components/Pages/Admin/CompanyDetails/CompanyDetails'
import { SendingNotifications } from 'components/Pages/Admin/SendingNotifications/SendingNotifications'
import { EditingSeting } from 'components/Pages/Admin/EditingSeting/EditingSeting'
import { PersonalAccount } from 'components/Pages/Admin/PersonalAccount/PersonalAccount'
import { EditingAccessSettings } from 'components/Pages/Admin/EditingAccessSettings/EditingAccessSettings'
import { Power } from 'components/Pages/Admin/Reports/Power/Power'

export const RouterContent = () => {
  const Object = {
    id: 14,
    city: 'Севастополь',
    status: { name: 'Тревога', id: 1 },
    responsible: 'Басков Петрович',
    balance: 'Недоступно',
    address: 'Краснодарский край, Краснодар, Пашковская 74 Р/С: 1234567890',
    name: `Tестовое наименование объекта`,
    paymentVal: '10000',
  }
  return (
    <Switch>
      <Route
        exact={true}
        path="/"
        render={() => {
          document.title = 'Главная'
          return <MainPageContainer />
        }}
      />
      <Route
        exact={true}
        path="/account"
        render={() => {
          document.title = 'Аккаунт'
          return <AccountContainer />
        }}
      />
      <Route
        exact={true}
        path="/add/new/payment"
        render={() => {
          document.title = 'Новый способ оплаты'
          return <NewPaymentAccountContainer />
        }}
      />
      <Route
        exact={true}
        path="/payment"
        render={() => {
          document.title = 'Оплата услуг'
          return <PaymentContainer />
        }}
      />
      <Route
        exact={true}
        path="/events"
        render={() => {
          document.title = 'События и уведомления'
          return <EventsContainer />
        }}
      />
      <Route
        exact={true}
        path="/admin/notifications/notifications/"
        render={() => {
          document.title = 'Уведомление'
          return <Notifications />
        }}
      />
      <Route
        exact={true}
        path="/admin/object/objects/"
        render={() => {
          document.title = 'Объекты НеваОнлайн'
          return <ObjectNevaOnlain />
        }}
      />
      <Route
        exact={true}
        path="/admin/pults/pults/"
        render={() => {
          document.title = 'Пульты'
          return <Pults />
        }}
      />
      <Route
        exact={true}
        path="/admin/payments/payments/"
        render={() => {
          document.title = 'Платежи'
          return <Payments />
        }}
      />
      <Route
        exact={true}
        path="/admin/triggering/triggering/"
        render={() => {
          document.title = 'Сработки ПТК'
          return <TriggeringPTK />
        }}
      />
      <Route
        exact={true}
        path="/admin/areas/areas/"
        render={() => {
          document.title = 'Зоны ответственности'
          return <AreasResponsobility />
        }}
      />
      <Route
        exact={true}
        path="/admin/areasService/areasService/"
        render={() => {
          document.title = 'Зоны обслуживания'
          return <AreasService />
        }}
      />
      <Route
        exact={true}
        path="/admin/companyDetails/companyDetails/"
        render={() => {
          document.title = 'Реквизиты компаний'
          return <CompanyDetails />
        }}
      />
      <Route
        exact={true}
        path="/admin/sendingNotifications/sendingNotifications/"
        render={() => {
          document.title = 'Отправка уведомлений'
          return <SendingNotifications />
        }}
      />
      <Route
        exact={true}
        path="/admin/editingSeting/editingSeting/"
        render={() => {
          document.title = 'Постановки/ снятия не по расписанию'
          return <EditingSeting />
        }}
      />
      <Route
        exact={true}
        path="/admin/personalAccount/personalAccount/"
        render={() => {
          document.title = 'Лицевые счета'
          return <PersonalAccount />
        }}
      />
      <Route
        exact={true}
        path="/admin/editingAccessSeting/editingAccessSeting/"
        render={() => {
          document.title = 'Удаленные постановки снятия'
          return <EditingAccessSettings />
        }}
      />
      <Route
        exact={true}
        path="/admin/report/power/"
        render={() => {
          document.title = 'Отчеты электропитания'
          return <Power />
        }}
      />
      <Route
        exact={true}
        path="/object/:id"
        render={(props) => {
          const {
            match: {
              params: { id },
            },
          } = props
          document.title = `Объект ${id}`
          return <DetailObjectContainer id={id} currentObject={Object} />
        }}
      />
    </Switch>
  )
}
