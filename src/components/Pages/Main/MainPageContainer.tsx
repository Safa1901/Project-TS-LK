import * as React from 'react'
//styles
import styles from './style.module.scss'
//components
import { ObjectStatus } from 'templates/Object/ObjectStatus'
import { ObjectsTable } from 'templates/Object/ObjectsTable'
import { ButtonIconFilter } from 'templates/Buttons/Buttons'
import { DropDownFilter } from 'templates/DropDown'
import clsx from 'clsx'
import { data as defaultData } from './data'

interface IFilteres {
  [key: string]: boolean
  guarded: boolean
  list: boolean
  disarm: boolean
  inactive: boolean
  map: boolean
  block: boolean
}

export const MainPageContainer = React.memo(({}) => {
  const [data, setData] = React.useState<any[]>([])
  const [filters, setFilters] = React.useState<IFilteres>({
    guarded: false,
    list: false,
    disarm: false,
    inactive: false,
    map: false,
    block: true,
  })
  const handleChange = (name: string) => (event: any) => {
    const _filters = { ...filters }
    let result: { [key: string]: boolean } = {}
    for (const key in _filters) {
      if (key === name) {
        result[key] = !_filters[key]
      } else {
        result[key] = _filters[key]
      }
    }
    //@ts-ignore
    setFilters(result)
  }
  //currentObject
  const [currentObject, setCurrentObject] = React.useState(null)
  //effects
  React.useEffect(() => {
    setData(defaultData) // defaultData where from props / redux / any state
  }, [])
  React.useEffect(() => {
    if (filters.disarm) {
      const filtered = defaultData.filter((d) => d.status.id === 3)
      setData(filtered)
    } else setData(defaultData)
  }, [filters.disarm])
  React.useEffect(() => {
    if (filters.guarded) {
      const filtered = defaultData.filter((d) => d.status.id === 2)
      setData(filtered)
    } else setData(defaultData)
  }, [filters.guarded])
  React.useEffect(() => {
    if (filters.inactive) {
      const filtered = defaultData.filter((d) => d.status.id === 4)
      setData(filtered)
    } else setData(defaultData)
  }, [filters.inactive])
  return (
    <section className={styles.root}>
      <div className={styles.root__header_container}>
        <div className={styles.root__header_container__wrapper}>
          <div className={styles.root__header_container__wrapper__name}>
            Добро пожаловать, Иван Иванов
          </div>
          <div className={styles.root__header_container__wrapper__context}>
            Здесь вы можете управлять своей учетной записью и охраняемыми
            объектами
          </div>
        </div>
      </div>
      <div className={styles.create_object_wrapper}>
        <button className={styles.create_object_wrapper__add_btn}>
          Добавить новый объект
        </button>
        <div className={styles.create_object_wrapper__filters}>
          <div>
            <ButtonIconFilter />
          </div>
          <div className={styles.create_object_wrapper__filters__col}>
            <DropDownFilter
              label={'Под охраной'}
              open={filters.guarded}
              handleToggleOpen={handleChange('guarded')}
            />
            <DropDownFilter
              label={'Снят с охраны'}
              open={filters.disarm}
              handleToggleOpen={handleChange('disarm')}
            />

            <DropDownFilter
              label={'Неактивен'}
              open={filters.inactive}
              handleToggleOpen={handleChange('inactive')}
            />
          </div>
          <div className={styles.create_object_wrapper__filters__col}>
            <DropDownFilter
              label={'Списком'}
              open={filters.list}
              handleToggleOpen={handleChange('list')}
            />
            <DropDownFilter
              label={'Блоками'}
              open={filters.block}
              handleToggleOpen={handleChange('block')}
            />
            <DropDownFilter
              label={'На карте'}
              open={filters.map}
              handleToggleOpen={handleChange('map')}
            />
          </div>
        </div>
      </div>
      <section className={clsx(styles.Rtable)}>
        {filters.block &&
          data &&
          Array.isArray(data) &&
          data.map((d, index) => {
            return (
              <div key={index}>
                <ObjectStatus currentObject={d} />
              </div>
            )
          })}
      </section>

      {filters.list && (
        <ObjectsTable
          data={data}
          setCurrentObject={(data) => setCurrentObject(data)}
        />
      )}
      <div className={styles.root__active_objects}>Нет активных объектов</div>
    </section>
  )
})
