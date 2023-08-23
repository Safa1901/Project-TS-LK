import * as React from 'react'
import styles from './styles/ObjectsTable.module.scss'
import clsx from 'clsx'
import { IPropsObjectsTable } from './interfaces'
import { useHistory } from 'react-router-dom'
//statuses ids
/* 
1 - alarm
2 - guarded
3 - disarm
4 - inactive
 */
export const ObjectsTable: React.FC<IPropsObjectsTable> = React.memo(
  ({ data, setCurrentObject }) => {
    const history = useHistory()
    const [indexSelect, setIndexSelect] = React.useState<number | null>(null)
    const handleClickTableItem = (index: number, data: any) => {
      setIndexSelect(index)
      setCurrentObject(data)
    }
    const tableWrapperClass = (statusId: number | null, index: number | null) =>
      clsx({
        [styles.Rtable]: true,
        [styles.Rtable__4cols]: true,
        [styles.inactive]: statusId === 4,
        [styles.selected]: indexSelect !== null && index === indexSelect,
      })
    return (
      <section className={styles.root}>
        <section className={tableWrapperClass(null, null)}>
          <div
            className={clsx(
              styles.Rtable__cell__type__1,
              styles.Rtable__cell__headers
            )}
          >
            Город
          </div>
          <div
            className={clsx(
              styles.Rtable__cell__type__1,
              styles.Rtable__cell__headers
            )}
          >
            Статус
          </div>
          <div
            className={clsx(
              styles.Rtable__cell__type__1,
              styles.Rtable__cell__headers
            )}
          >
            Ответственный
          </div>
          <div
            className={clsx(
              styles.Rtable__cell__type__2,
              styles.Rtable__cell__headers
            )}
          >
            Баланс
          </div>
        </section>
        {data.map((item, index) => (
          <section
            key={index}
            className={tableWrapperClass(item.status.id, index)}
            onClick={() => handleClickTableItem(index, item)}
            onDoubleClick={() => history.push(`/object/${item.id}`)}
          >
            <div
              className={clsx(
                styles.Rtable__cell,
                styles.Rtable__cell__type__1
              )}
            >
              {item.city}
            </div>
            <div
              className={clsx(
                styles.Rtable__cell,
                styles.Rtable__cell__type__1
              )}
            >
              {item.status?.name}
            </div>
            <div
              className={clsx(
                styles.Rtable__cell,
                styles.Rtable__cell__type__1
              )}
            >
              {item.responsible}
            </div>
            <div
              className={clsx(
                styles.Rtable__cell,
                styles.Rtable__cell__type__2
              )}
            >
              {item.balance}
            </div>
          </section>
        ))}
      </section>
    )
  }
)
