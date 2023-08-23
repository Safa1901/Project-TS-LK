import React from 'react'
//styles
import styles from './styles/status.module.scss'
import { ButtonBaseRadius, ButtonBase } from 'templates/Buttons/Buttons'
import { Link } from 'react-router-dom'
import { WarningBall, WarningBallText } from 'templates/Warnings/Warnings'

export const Status = React.memo(({}) => {
  return (
    <section className={styles.root}>
      <section className={styles.root__info}>
        <div className={styles.root__info__text}>
          <div>
            <span>Объект:</span>
            &nbsp;
            <span>№ 315-123</span>
          </div>
          <div>
            <span>Адрес:</span>
            &nbsp;
            <span>Краснодар, Восточно-Кругликовская 22, подъезд 3, кв 471</span>
          </div>
          <div>
            <span>Л/С:</span>
            &nbsp;
            <span>№ 1234567890</span>
          </div>
          <div>
            <span>Баланс:</span>
            &nbsp;
            <span>11 400 ₽</span>
            &nbsp;
            <span>|</span>
            &nbsp;
            <span>
              <a href="#">Пополнить</a>
            </span>
          </div>
          <div>
            <span>Владелец:</span>
            &nbsp;
            <span>Иван Иванов Иванович</span>
          </div>
        </div>
        <div className={styles.root__info__actions}>
          <div className={styles.root__info__actions__balance}>
            <span>Баланс:</span>
            &nbsp;
            <span>11 400 ₽</span>
          </div>
          <div className={styles.root__info__actions__replenish_balance}>
            <ButtonBaseRadius
              text="Пополнить"
              borderRadius="50px"
              disabled={false}
            />
          </div>
        </div>
      </section>
      <section className={styles.root__actions}>
        <div>
          <ButtonBase text="Снять с охраны" />
        </div>
        <div>
          <ButtonBase text="Поставить под охрану" />
        </div>
      </section>
      <div className={styles.root__hr}></div>
      <div className={styles.root__connected_services}>
        <div className={styles.root__connected_services__wrapper}>
          <div className={styles.root__connected_services__wrapper__header}>
            Подключенные услуги
          </div>
          <div className={styles.root__connected_services__wrapper__info}>
            <div
              className={styles.root__connected_services__wrapper__info__div}
            >
              <div>Услуги охраны «Дом – базовый»</div>
              <div
                className={
                  styles.root__connected_services__wrapper__info__div__dotted
                }
              ></div>
              <div>950 ₽/месяц</div>
            </div>
            <div
              className={styles.root__connected_services__wrapper__info__div}
            >
              <div>Виртуальная кнопка тревожной сигнализации</div>
              <div
                className={
                  styles.root__connected_services__wrapper__info__div__dotted
                }
              ></div>
              <div>950 ₽/месяц</div>
            </div>
            <div
              className={styles.root__connected_services__wrapper__info__div}
            >
              <div>Виртуальная кнопка тревожной сигнализации</div>
              <div
                className={
                  styles.root__connected_services__wrapper__info__div__dotted
                }
              ></div>
              <div>950 ₽/месяц</div>
            </div>
            <div
              className={styles.root__connected_services__wrapper__info__total}
            >
              <div>Итого</div>
              <div
                className={
                  styles.root__connected_services__wrapper__info__div__dotted
                }
              ></div>
              <div>950 ₽/месяц</div>
            </div>
          </div>
        </div>
        <div className={styles.root__connected_services__icons}>
          <div className={styles.root__connected_services__icons__div}>
            <WarningBall />
          </div>
          <div className={styles.root__connected_services__icons__div}>
            <WarningBallText />
          </div>
        </div>
      </div>
      <div className={styles.root__report_a_problem}>
        <Link to="/support">Сообщить о проблеме</Link>
      </div>
    </section>
  )
})
