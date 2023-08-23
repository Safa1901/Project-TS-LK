import React, { useReducer } from 'react'
//styles
import styles from './style.module.scss'
import { ButtonBefore, ButtonBase } from 'templates/Buttons/Buttons'
import { Link } from 'react-router-dom'
import { CheckBox } from 'templates/CheckBoxes/CheckBoxes'
import { InputText } from 'templates/Forms/InputText'
interface ICheckers {
  card: boolean
  legal: boolean
}
export const NewPaymentAccountContainer = React.memo(({}) => {
  const initialState = { orgName: '', inn: '', kpp: '', legalAddress: '' }
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
  const [checkers, setCheckers] = React.useState<ICheckers>({
    card: false,
    legal: true,
  })
  const handleChangeCheckBox = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckers({ ...checkers, [name]: event.target.checked })
  }
  const { card, legal } = checkers
  return (
    <section className={styles.root}>
      <div className={styles.root__header}>Новый способ оплаты</div>
      <div className={styles.root__before_link}>
        <Link to="/account">
          <ButtonBefore text="Назад" />
        </Link>
      </div>
      <div className={styles.root__check_boxes}>
        <div className={styles.root__check_boxes__wrapper}>
          <div className={styles.root__check_boxes__wrapper__input}>
            <CheckBox
              checked={card}
              handleChange={handleChangeCheckBox('card')}
            />
          </div>
          <div className={styles.root__check_boxes__wrapper__label}>
            Пластиковая карта (Visa, MasterCard, МИР)
          </div>
        </div>
        <div className={styles.root__check_boxes__wrapper}>
          <div className={styles.root__check_boxes__wrapper__input}>
            <CheckBox
              checked={legal}
              handleChange={handleChangeCheckBox('legal')}
            />
          </div>
          <div className={styles.root__check_boxes__wrapper__label}>
            Юридическое лицо
          </div>
        </div>
      </div>
      <div className={styles.root__add_payment_method}>
        <ButtonBase text="Добавить способ оплаты" disabled={false} />
      </div>
      <div className={styles.root__form_wrapper}>
        <div className={styles.root__form_wrapper__inputs}>
          <InputText
            type="text"
            title="Наименование организации"
            placeholder=""
            name="orgName"
            value={state.orgName}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
          />
          <InputText
            type="number"
            title="ИНН"
            placeholder=""
            name="inn"
            value={state.inn}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
          />
          <InputText
            type="number"
            title="КПП"
            placeholder=""
            name="kpp"
            value={state.kpp}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
          />
          <InputText
            type="text"
            title="Юридический адрес"
            placeholder=""
            name="legalAddress"
            value={state.legalAddress}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
          />
        </div>
        <div className={styles.root__form_wrapper__actions}>
          <div>
            <ButtonBase
              text="Сохранить способ оплаты"
              disabled={true}
              onClick={() => alert('click disabled save new payment action')}
            />
          </div>
          <div>
            <ButtonBase
              text="Сохранить способ оплаты"
              disabled={false}
              onClick={() => alert('click active save new payment action')}
            />
          </div>
        </div>
      </div>
    </section>
  )
})
//types
type TState = {
  orgName: string
  inn: string
  kpp: string
  legalAddress: string
}
type IAction = { type: 'ON_CHANGE'; name: string; value: any }
