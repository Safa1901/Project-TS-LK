import React, { useReducer } from 'react'
//styles
import styles from './styles/settings.module.scss'
import { InputText } from 'templates/Forms/InputText'
import { ButtonBase } from 'templates/Buttons/Buttons'
import { TableResponsiblePersonsWithActions } from 'templates/Tables/TableResponsiblePersonsWithActions'
import { responsibleData } from './data'
import { CustomizedSwitches } from 'templates/Buttons/SwitchButton'
import { NativeSelect } from 'templates/Select/Select'
import { ReactTimePicker } from 'templates/TimePicker/ReactTimePicker'
import { Link } from 'react-router-dom'

//types
type TState = {
  orgName: string
  orgMemoName: string
  autoTimeStart: string
  autoTimeEnd: string
  schedule: {
    id: number
    name: string
    timeStart: string
    timeEnd: string
    disabled: boolean
  }[]
}

type IAction = { type: 'ON_CHANGE'; name: string; value: any }
export const Settings = React.memo(({}) => {
  const [currentData, setCurrentData] = React.useState({})
  const [autoTimeTable, setAutoTimeTable] = React.useState<boolean>(false)
  const [headers] = React.useState([
    'Приоритет',
    'ФИО',
    'Телефон',
    'Доп. телефон',
    'Действия',
  ])
  const initialState = {
    orgName: '',
    orgMemoName: '',
    autoTimeStart: '00:00',
    autoTimeEnd: '00:00',
    schedule: [
      {
        id: 0,
        name: 'Пн',
        timeStart: '00:00',
        timeEnd: '00:00',
        disabled: false,
      },
      {
        id: 1,
        name: 'Вт',
        timeStart: '00:00',
        timeEnd: '00:00',
        disabled: true,
      },
      {
        id: 2,
        name: 'Ср',
        timeStart: '00:00',
        timeEnd: '00:00',
        disabled: true,
      },
      {
        id: 3,
        name: 'Че',
        timeStart: '00:00',
        timeEnd: '00:00',
        disabled: true,
      },
      {
        id: 4,
        name: 'Пт',
        timeStart: '00:00',
        timeEnd: '00:00',
        disabled: true,
      },
      {
        id: 5,
        name: 'Сб',
        timeStart: '00:00',
        timeEnd: '00:00',
        disabled: true,
      },
      {
        id: 6,
        name: 'Вс',
        timeStart: '00:00',
        timeEnd: '00:00',
        disabled: true,
      },
    ],
  }
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
  const handleChangeSchedule = (
    timeType: 'timeStart' | 'timeEnd',
    index: number,
    time: string
  ) => {
    const _schedule = [...state.schedule]
    _schedule[index][timeType] = time
    return handleChange(`schedule`, _schedule)
  }
  return (
    <section className={styles.root}>
      <div className={styles.root__header}>Общие настройки</div>
      <div className={styles.root__text_fields}>
        <div>
          <InputText
            type="text"
            title="Наименование объекта"
            placeholder="Например Квартира"
            name="orgName"
            value={state.orgName}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
            helperText="Лицевой счет не принадлежит ни одной компании!"
          />
        </div>
        <div>
          <InputText
            type="text"
            title="Сокращённое наименование объекта"
            placeholder="Например Кв."
            name="orgMemoName"
            value={state.orgMemoName}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
          />
        </div>
        <div className={styles.root__text_fields__save_btn}>
          <div>
            <ButtonBase text="Сохранить" />
          </div>
        </div>
      </div>
      <div className={styles.root__hr}></div>
      <div className={styles.root__table_data}>
        <div className={styles.root__table_data__header}>
          Ответственные лица
        </div>
        <div>
          <TableResponsiblePersonsWithActions
            headers={headers}
            data={responsibleData}
          />
        </div>
      </div>
      <div className={styles.root__hr}></div>
      <div className={styles.root__keys}>
        <div className={styles.root__keys__header}>Ключи</div>
        <div className={styles.root__keys__value}>
          <div>Иванов Иван Иванович</div>
          <div>+7 (900) 000-00-00</div>
        </div>
        <div className={styles.root__keys__value}>
          <div>Иванова Мария Ивановна</div>
          <div>7 (900) 000-00-01</div>
        </div>
      </div>
      <div className={styles.root__hr}></div>
      <div className={styles.root__timetable}>
        <div className={styles.root__timetable__header}>Расписание</div>
        <div className={styles.root__timetable__switch_auto_timetable}>
          <div>
            <CustomizedSwitches
              checked={autoTimeTable}
              handleChange={() => setAutoTimeTable(!autoTimeTable)}
            />
          </div>
          <div className={styles.root__timetable__switch_auto_timetable__label}>
            Автоматическое расписание включено
          </div>
        </div>
        <div className={styles.root__timetable__selects}>
          <div className={styles.root__timetable__selects__input}>
            <NativeSelect
              name=""
              value=""
              data={[{ id: 0, name: 'Ежедневно' }]}
              placeholder="Ежедневно"
            />
          </div>
          <div className={styles.root__timetable__selects__input}>
            <NativeSelect
              name=""
              value=""
              data={[{ id: 0, name: 'Круглосуточно' }]}
              placeholder="Круглосуточно"
            />
          </div>
          <div className={styles.root__timetable__selects__times}>
            <div className={styles.root__timetable__selects__times__current}>
              <ReactTimePicker
                value={state.autoTimeStart}
                onChange={(time: string) => handleChange(`autoTimeStart`, time)}
                height={40}
              />
            </div>
            <div>-</div>
            <div className={styles.root__timetable__selects__times__current}>
              <ReactTimePicker
                value={state.autoTimeEnd}
                onChange={(time: string) => handleChange(`autoTimeEnd`, time)}
                height={40}
              />
            </div>
          </div>
          <div className={styles.root__timetable__selects__input}>
            <NativeSelect
              name=""
              value=""
              data={[{ id: 0, name: 'Москва UTC+2' }]}
              placeholder="Москва UTC+2"
            />
          </div>
        </div>
        <div className={styles.root__timetable__selects__total_time}>
          120 часов в рабочие дни
        </div>
      </div>
      <div className={styles.root__timetable__week}>
        {state.schedule &&
          Array.isArray(state.schedule) &&
          state.schedule.map((t, index) => {
            return (
              <div key={index} className={styles.root__timetable__week__day}>
                <div className={styles.root__timetable__week__day__name}>
                  {t.name}
                </div>
                <div className={styles.root__timetable__week__day__inputs}>
                  <div
                    className={
                      styles.root__timetable__week__day__inputs__current
                    }
                  >
                    <ReactTimePicker
                      value={t.timeStart}
                      onChange={(time: string) =>
                        handleChangeSchedule(`timeStart`, index, time)
                      }
                      height={25}
                      disabled={t.disabled}
                    />
                  </div>
                  <div>&nbsp;–&nbsp;</div>
                  <div
                    className={
                      styles.root__timetable__week__day__inputs__current
                    }
                  >
                    <ReactTimePicker
                      value={t.timeEnd}
                      onChange={(time: string) =>
                        handleChangeSchedule(`timeEnd`, index, time)
                      }
                      height={25}
                      disabled={t.disabled}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        <div className={styles.root__timetable__save_btn}>
          <div>
            <ButtonBase text="Сохранить" />
          </div>
        </div>
      </div>
      <div className={styles.root__hr}></div>
      <div className={styles.root__service_suspension}>
        <div className={styles.root__service_suspension__header}>
          Приостановка обслуживания
        </div>
        <div className={styles.root__service_suspension__info}>
          Вы можете однократно приостановить действие договора на срок до 3
          месяцев в течение календарного года.
        </div>
        <Link to="#">Создать запрос</Link>
      </div>
    </section>
  )
})
