import React, { useReducer } from 'react'
//styles
import styles from '../styles/personAccountPayment.module.scss'
import { InputText } from 'templates/Forms/InputText'
import { InfoPayment } from '../templates/templates'
import { CheckBox } from 'templates/CheckBoxes/CheckBoxes'
import { ButtonEditPencil } from 'templates/Buttons/Buttons'
//types
type TState = {
  personalAccount: string
  sumPayment: string
}
type IAction = { type: 'ON_CHANGE'; name: string; value: any }
//
export const PersonAccountPayment = React.memo(({}) => {
  const [issuedPersonAccount, setIssuedPersonAccount] = React.useState<boolean>(
    false
  )
  const initialState = { personalAccount: '', sumPayment: '' }
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
    <div className={styles.root}>
      <InfoPayment />
      <div className={styles.root__form}>
        <div className={styles.root__form__text_fields}>
          <InputText
            type="text"
            title="Лицевой счёт"
            placeholder="Номер лицевого счёта"
            name="personalAccount"
            value={state.personalAccount}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
            helperText={'Лицевой счет не принадлежит ни одной компании! '}
          />
          <InputText
            type="number"
            title="Сумма платежа"
            placeholder="Сумма платежа"
            name="sumPayment"
            value={state.sumPayment}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
          />
        </div>
        <div className={styles.root__form__check_boxes}>
          <div className={styles.root__form__check_boxes__header}>
            Ваша сохранённая карта
          </div>
          <div className={styles.root__form__check_boxes__wrapper}>
            <div className={styles.root__form__check_boxes__wrapper__input}>
              <CheckBox
                checked={issuedPersonAccount}
                handleChange={() =>
                  setIssuedPersonAccount(!issuedPersonAccount)
                }
              />
            </div>
            <div className={styles.root__form__check_boxes__wrapper__info}>
              <div
                className={styles.root__form__check_boxes__wrapper__info__legal}
              >
                <div>ООО «Рога и копыта»</div>
                <div>ИНН 2311117558 ivanov@mail.ru</div>
              </div>
              <div
                className={styles.root__form__check_boxes__wrapper__info__item}
              >
                <ButtonEditPencil />
              </div>
            </div>
          </div>
          <div className={styles.root__form__check_boxes__wrapper}>
            <div className={styles.root__form__check_boxes__wrapper__input}>
              <CheckBox
                checked={!issuedPersonAccount}
                handleChange={() =>
                  setIssuedPersonAccount(!issuedPersonAccount)
                }
              />
            </div>
            <div className={styles.root__form__check_boxes__wrapper__info}>
              <div
                className={styles.root__form__check_boxes__wrapper__info__item}
              >
                Новый плательщик
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
