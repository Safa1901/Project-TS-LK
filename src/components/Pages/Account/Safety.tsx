import React, { useReducer } from 'react'
//styles
import styles from './styles/safety.module.scss'
import { ButtonBase } from 'templates/Buttons/Buttons'
import { InputText } from 'templates/Forms/InputText'

export const Safety = React.memo(({}) => {
  const initialState = { oldPassword: '', newPassword: '', confirmPassword: '' }
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
  return (
    <section className={styles.root}>
      <div className={styles.root__form}>
        <InputText
          type="password"
          title="Текущий пароль"
          placeholder=""
          name="oldPassword"
          value={state.oldPassword}
          onChange={(event) =>
            handleChange(event.target.name, event.target.value)
          }
        />
        <InputText
          type="password"
          title="Новый пароль"
          placeholder=""
          name="newPassword"
          value={state.newPassword}
          onChange={(event) =>
            handleChange(event.target.name, event.target.value)
          }
        />
        <InputText
          type="password"
          title="Повторите пароль"
          placeholder=""
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={(event) =>
            handleChange(event.target.name, event.target.value)
          }
        />
        <div className={styles.root__form__actions}>
          <div className={styles.root__form__actions__wrapper}>
            <ButtonBase
              text="Изменить пароль"
              disabled={true}
              onClick={() => alert('click disabled safety action')}
            />
          </div>
          <div className={styles.root__form__actions__wrapper}>
            <ButtonBase
              text="Изменить пароль"
              disabled={false}
              onClick={() => alert('click active safety action')}
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
  oldPassword: string
  newPassword: string
  confirmPassword: string
}
type IAction = { type: 'ON_CHANGE'; name: string; value: any }
