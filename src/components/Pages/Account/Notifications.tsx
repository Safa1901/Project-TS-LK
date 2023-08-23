import React, { useReducer } from 'react'
//styles
import styles from './styles/notifications.module.scss'
import { CustomizedSwitches } from 'templates/Buttons/SwitchButton'
import { ButtonBase } from 'templates/Buttons/Buttons'

export const Notifications = React.memo(({}) => {
  const initialState = {
    disarmNorify: false,
    anyNotify: false,
    newsAndSalesNofity: false,
  }
  const reducer = (state: TState, action: IAction): TState => {
    switch (action.type) {
      case 'ON_CHANGE':
        return {
          ...state,
          [action.name]: !state[action.name],
        }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleChange = (name: string) => dispatch({ type: 'ON_CHANGE', name })
  const { disarmNorify, anyNotify, newsAndSalesNofity } = state
  return (
    <section className={styles.root}>
      <div className={styles.root__checkboxes_wrapper}>
        <div className={styles.root__checkboxes_wrapper__header}>
          Уведомления на мобильный телефон
        </div>
        <div className={styles.root__checkboxes_wrapper__input}>
          <div className={styles.root__checkboxes_wrapper__input__label}>
            Уведомления о снятие с охраны
          </div>
          <div>
            <CustomizedSwitches
              handleChange={() => handleChange('disarmNorify')}
              checked={disarmNorify}
            />
          </div>
        </div>
        <div className={styles.root__checkboxes_wrapper__input}>
          <div className={styles.root__checkboxes_wrapper__input__label}>
            Любое другое уведомление
          </div>
          <div>
            <CustomizedSwitches
              handleChange={() => handleChange('anyNotify')}
              checked={anyNotify}
            />
          </div>
        </div>
      </div>
      <div className={styles.root__checkboxes_wrapper}>
        <div className={styles.root__checkboxes_wrapper__header}>
          Уведомления на электронную почту
        </div>
        <div className={styles.root__checkboxes_wrapper__input}>
          <div className={styles.root__checkboxes_wrapper__input__label}>
            Новости и акции
          </div>
          <div>
            <CustomizedSwitches
              handleChange={() => handleChange('newsAndSalesNofity')}
              checked={newsAndSalesNofity}
            />
          </div>
        </div>
      </div>
      <div className={styles.root__form}>
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
    </section>
  )
})
//types
type TState = {
  [key: string]: boolean
  disarmNorify: boolean
  anyNotify: boolean
  newsAndSalesNofity: boolean
}
type IAction = { type: 'ON_CHANGE'; name: string }
