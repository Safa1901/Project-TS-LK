import React from 'react'
//styles
import styles from './styles/events.module.scss'
import {
  ButtonFilter,
  ButtonIconFilter,
  ButtonIconArrowDown,
  ButtonIconArrowUp,
} from 'templates/Buttons/Buttons'
import { CheckBox } from 'templates/CheckBoxes/CheckBoxes'
import { DefaultTable } from 'templates/Tables/DefaultTable'

export const Events = React.memo(({}) => {
  const [changeData, setChangeData] = React.useState<any>({})
  const [data] = React.useState([
    {
      date: '11.05.2020',
      object: 'Объект с длинным название',
      responsible: 'Имя Фамилия Отч...',
      event: 'Снятие вне расписания',
    },
    {
      date: '02.03.2020',
      object: 'Объект с длинным назван...',
      responsible: 'Имя Фамилия Отчество',
      event: 'Постановка под охрану',
    },
  ])
  const [typeEvent, setTypeEvent] = React.useState<{
    [key: string]: boolean
    suppliesAndWithdrawals: boolean
    emergencyEvents: boolean
    disturbingEvents: boolean
  }>({
    suppliesAndWithdrawals: false, //Постановки и снятия
    emergencyEvents: false, //Аварийные события
    disturbingEvents: false, //Тревожные события
  })
  const [activeFilterBtn, setActiveFilterBtn] = React.useState<number | null>(
    null
  )
  //
  const handleChangeCheckBox = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setTypeEvent({ ...typeEvent, [name]: event.target.checked })
  return (
    <section className={styles.root}>
      <div className={styles.root__filter}>
        <div className={styles.root__filter__btns}>
          <div>
            <ButtonFilter
              text="Сегодня"
              active={activeFilterBtn === 1}
              onClick={() => setActiveFilterBtn(1)}
            />
          </div>
          <div>
            <ButtonFilter
              text="Вчера"
              active={activeFilterBtn === 2}
              onClick={() => setActiveFilterBtn(2)}
            />
          </div>
          <div>
            <ButtonFilter
              text="Неделя"
              active={activeFilterBtn === 3}
              onClick={() => setActiveFilterBtn(3)}
            />
          </div>
          <div>
            <ButtonFilter
              text="Месяц"
              active={activeFilterBtn === 4}
              onClick={() => setActiveFilterBtn(4)}
            />
          </div>
          <div>
            <ButtonFilter
              text="Год"
              active={activeFilterBtn === 5}
              onClick={() => setActiveFilterBtn(5)}
            />
          </div>
        </div>
        <div className={styles.root__filter__dropdowns}>
          <div>
            <ButtonIconFilter />
          </div>
          <div className={styles.root__filter__dropdowns__label}>Фильтр</div>
          <div>
            <ButtonIconArrowDown />
          </div>
          <div>
            <ButtonIconArrowUp />
          </div>
        </div>
      </div>
      <div className={styles.root__filter__checkboxes}>
        <div className={styles.root__filter__checkboxes__header}>
          Тип события
        </div>
        <div className={styles.root__filter__checkboxes__wrapper}>
          <div className={styles.root__filter__checkboxes__wrapper__component}>
            <div>
              <CheckBox
                checked={typeEvent.suppliesAndWithdrawals}
                handleChange={handleChangeCheckBox('suppliesAndWithdrawals')}
              />
            </div>
            <div>Постановки и снятия</div>
          </div>
          <div className={styles.root__filter__checkboxes__wrapper__component}>
            <div>
              <CheckBox
                checked={typeEvent.emergencyEvents}
                handleChange={handleChangeCheckBox('emergencyEvents')}
              />
            </div>
            <div>Аварийные события</div>
          </div>
          <div className={styles.root__filter__checkboxes__wrapper__component}>
            <div>
              <CheckBox
                checked={typeEvent.disturbingEvents}
                handleChange={handleChangeCheckBox('disturbingEvents')}
              />
            </div>
            <div>Тревожные события</div>
          </div>
        </div>
      </div>
      <div className={styles.root__data_table}>
        <DefaultTable
          type="events"
          data={data}
          headers={['Дата', 'Объект', 'Ответственный', 'Событие']}
          onChangeRow={(data) => setChangeData(data)}
        />
      </div>
      <div className={styles.root__issued_active_events}>
        В данный момент у вас нет активных событий
      </div>
    </section>
  )
})
