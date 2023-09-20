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
import { SupportContainer } from 'components/Pages/Support/SupportContainer'
import { NewAppealsToSupportContainer } from 'components/Pages/Support/NewAppealsToSupport/NewAppealsToSupportContainer'
import { IssuedAppealsToSupport } from 'components/Pages/Support/IssuedAppealsToSupport/IssuedAppealsToSupport'
import { EventsContainer } from 'components/Pages/Events/EventsContainer'
import { Notifications } from 'components/Pages/Admin/Notifications/Notifications'
import { DetailObjectContainer } from 'components/Pages/DetailObject/DetailObjectContainer'
import { ObjectNevaOnlain } from 'components/Pages/Admin/Object/ObjectNevaOnlain'
import { Pults } from 'components/Pages/Admin/Pults/Pults'

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
        path="/support"
        render={() => {
          document.title = 'Обращения в службу поддержки'
          return <SupportContainer />
        }}
      />
      <Route
        exact={true}
        path="/add/new/appeals/to/suport"
        render={() => {
          document.title = 'Обращения в службу поддержки'
          return <NewAppealsToSupportContainer />
        }}
      />
      <Route
        exact={true}
        path="/support/appeal/:id"
        render={(props) => {
          const {
            match: {
              params: { id },
            },
          } = props
          document.title = 'Обращения в службу поддержки'
          return <IssuedAppealsToSupport id={id} />
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
          // const {
          //   match: {
          //     params: { id },
          //   },
          // } = props
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
          document.title = 'Пулты'
          return <Pults />
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
