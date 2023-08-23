import React from 'react'
//icons
//icons
import { ReactComponent as MasterCardIcon } from '@Files/masterCard.svg'
import { ReactComponent as VisaCardIcon } from '@Files/visaCard.svg'
//styles
import styles from './styles/cards.module.scss'
import { CloseIcon } from '@Files/icons'
import { ButtonDelete } from 'templates/Buttons/Buttons'

export const Cards = React.memo(({}) => {
  return (
    <section className={styles.root_card}>
      {/* MASTER CARD */}
      <div className={styles.root_card__master}>
        <div className={styles.root_card__master__icon}>
          <MasterCardIcon />
        </div>
        <div className={styles.root_card__master__number}>
          1234 56** **** 7891
        </div>
        <div className={styles.root_card__master__delete_btn}>
          <ButtonDelete />
        </div>
      </div>
      {/* VISA CARD */}
      <div className={styles.root_card__visa}>
        <div className={styles.root_card__visa__icon}>
          <VisaCardIcon />
        </div>
        <div className={styles.root_card__visa__number}>
          1234 56** **** 7891
        </div>
        <div className={styles.root_card__visa__delete_btn}>
          <ButtonDelete />
        </div>
      </div>
      {/* PERSONAL ACCOUNT */}
      <div className={styles.root_card__personal_account}>
        <div className={styles.root_card__personal_account__data}>
          <div className={styles.root_card__personal_account__data__name}>
            ООО «Рога и копыта»
          </div>
          <div className={styles.root_card__personal_account__data__info}>
            ИНН 2311117558 ivanov@mail.ru
          </div>
        </div>
        <div className={styles.root_card__personal_account__delete_btn}>
          <ButtonDelete />
        </div>
      </div>
    </section>
  )
})
