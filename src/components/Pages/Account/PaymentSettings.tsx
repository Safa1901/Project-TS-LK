import React from 'react'
//styles
import styles from './styles/paymentSettings.module.scss'
import { CustomizedSwitches } from 'templates/Buttons/SwitchButton'
import { Cards } from './Cards'
import { ButtonBase } from 'templates/Buttons/Buttons'
import { Link } from 'react-router-dom'
//
export const PaymentSettings = React.memo(({}) => {
  const [autoPayment, setAutoPayment] = React.useState(false)
  return (
    <section className={styles.root}>
      <div className={styles.root__auto_payment}>
        <Header
          main="Автоматическое пополнение"
          info="Пополняет ваш баланс автоматически когда текущие средства достигают
          минимального значения"
        />
        <div className={styles.root__auto_payment__switch}>
          <div className={styles.root__auto_payment__switch__input}>
            <CustomizedSwitches
              checked={autoPayment}
              handleChange={() => setAutoPayment(!autoPayment)}
            />
          </div>
          <div className={styles.root__auto_payment__switch__label}>
            Автоматическое пополнение включено / выключено
          </div>
        </div>
      </div>
      <div className={styles.root__payment_methods}>
        <Header
          main="Способы оплаты"
          info="Сохраненный способ оплаты будет использован как при автоматической оплате, так и при выставлении счета вручную"
        />
        <Cards />
      </div>
      <div className={styles.root__add_payment_method}>
        <Link to="/add/new/payment">
          <ButtonBase text="Добавить способ оплаты" disabled={false} />
        </Link>
      </div>
    </section>
  )
})

const Header = ({ main, info }: { main: string; info: string }) => (
  <section className={styles.header}>
    <div className={styles.header__main}>{main}</div>
    <div className={styles.header__info}>{info}</div>
  </section>
)
