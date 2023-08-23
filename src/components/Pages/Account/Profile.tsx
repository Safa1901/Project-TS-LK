import React, { useReducer } from 'react'
//styles
import styles from './styles/profile.module.scss'
//components
import { InputText } from 'templates/Forms/InputText'
//@ts-ignore
import { NativeInputPhone } from 'templates/Forms/InputPhone'
import { ButtonBase } from 'templates/Buttons/Buttons'

export const Profile = React.memo(({}) => {
  const initialState = { firstName: '', lastName: '', email: '', phone: '' }
  const reducer = (state: TState, action: IAction): TState => {
    switch (action.type) {
      case 'ON_CHANGE':
        return {
          ...state,
          [action.name]: action.value,
        }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleChange = (name: string, value: any) =>
    dispatch({ type: 'ON_CHANGE', name, value })
  //utils
  const beforeMaskedValueChange = (
    newState: any,
    oldState: any,
    userInput: any
  ) => {
    let { value } = newState
    let selection = newState.selection
    let cursorPosition = selection ? selection.start : null
    if (
      (value.endsWith('-') &&
        userInput !== '-' &&
        !state.phone.endsWith('-')) ||
      (value.endsWith(' ') && userInput !== ' ' && !state.phone.endsWith(' '))
    ) {
      if (cursorPosition === value.length) {
        cursorPosition--
        selection = { start: cursorPosition, end: cursorPosition }
      }
      value = value.slice(0, -1)
    }
    return {
      value,
      selection,
    }
  }
  return (
    <section className={styles.root}>
      <div className={styles.root__form}>
        <InputText
          type="text"
          title="Фамилия"
          placeholder="Иванов"
          name="lastName"
          value={state.lastName}
          onChange={(event) =>
            handleChange(event.target.name, event.target.value)
          }
        />
        <InputText
          type="text"
          title="Имя"
          placeholder="Иван"
          name="firstName"
          value={state.firstName}
          onChange={(event) =>
            handleChange(event.target.name, event.target.value)
          }
        />
        <InputText
          type="text"
          title="Электронная почта"
          placeholder="ivanov@ya.ru"
          name="email"
          value={state.email}
          onChange={(event) =>
            handleChange(event.target.name, event.target.value)
          }
        />
        <NativeInputPhone
          title="Телефон"
          placeholder="+7 900 000-00-00"
          name="phone"
          value={state.phone}
          onChange={(event: any) => handleChange('phone', event.target.value)}
          beforeMaskedValueChange={beforeMaskedValueChange}
        />
        <div className={styles.root__form__actions}>
          <div className={styles.root__form__actions__wrapper}>
            <ButtonBase
              text="Сохранить профиль"
              disabled={true}
              onClick={() => alert('click disabled profile action')}
            />
          </div>
          <div className={styles.root__form__actions__wrapper}>
            <ButtonBase
              text="Сохранить профиль"
              disabled={false}
              onClick={() => alert('click active profile action')}
            />
          </div>
        </div>
      </div>
      <div className={styles.root__last_seen}>
        Последний вход был зафиксирован 16.05.2020 12:24 с IP-адреса
        185.15.171.151
      </div>
    </section>
  )
})
//types
type TState = {
  firstName: string
  lastName: string
  email: string
  phone: string
}
type IAction = { type: 'ON_CHANGE'; name: string; value: any }
