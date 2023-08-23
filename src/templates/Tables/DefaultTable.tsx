import React from 'react'
//styles
import styles from './styles.module.scss'
import clsx from 'clsx'
//table types
/* 
historyPayment
supportAppeals
 */
//statuses
/* 
1 - success payment
2 - failed payment
3 - create act
 */
//sum
/* 
1 - increment
2 - create account
 */
interface IDefaultTable {
  data: any[]
  type: 'historyPayment' | 'supportAppeals' | 'events' | 'eventsObject'
  headers: string[]
  onChangeRow?: (d: any) => void
  onDoubleClickRow?: (d: any) => void
}
export const DefaultTable: React.FC<IDefaultTable> = React.memo(
  ({ type, data, headers, onChangeRow, onDoubleClickRow }) => {
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0)
    const RTableClasses = (cols: number, selected: boolean) =>
      clsx({
        [styles.Rtable__4cols]: cols === 4,
        [styles.Rtable__3cols]: cols === 3,
        [styles.Rtable]: true,
        [styles.selected]: selected,
      })
    const _onChangeRow = (index: number, d: any) => (
      event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
      setSelectedIndex(index)
      if (onChangeRow && typeof onChangeRow === 'function') {
        return onChangeRow(d)
      }
    }
    const _onDoubleClick = (index: number, d: any) => (
      event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
      if (onDoubleClickRow && typeof onDoubleClickRow === 'function') {
        return onDoubleClickRow(d)
      }
    }
    React.useEffect(() => {
      if (data[0] && onChangeRow && typeof onChangeRow === 'function')
        onChangeRow(data[0])
    }, [])
    return (
      <section>
        <section
          className={clsx(
            styles.Rtable,
            styles.Rtable__4cols,
            styles.Rtable__4cols__header
          )}
        >
          {headers &&
            Array.isArray(headers) &&
            headers.map((h, index) => (
              <div
                key={index}
                className={clsx(styles.Rtable_cell, styles.Rtable_cell_header)}
              >
                {h}
              </div>
            ))}
        </section>
        {data &&
          Array.isArray(data) &&
          data.map((d, index) => {
            const selected = index === selectedIndex
            switch (type) {
              case 'historyPayment':
                return (
                  <section
                    key={index}
                    className={RTableClasses(4, selected)}
                    onClick={_onChangeRow(index, d)}
                  >
                    <div className={styles.Rtable_cell}>{d.date}</div>
                    <div className={styles.Rtable_cell}>{d.method}</div>
                    <div className={styles.Rtable_cell}>
                      {d.status.id === 3 ? (
                        <a href={d.status.url}>{d.status.name}</a>
                      ) : (
                        d.status.name
                      )}
                    </div>
                    <div className={styles.Rtable_cell}>
                      {d.sum.id === 2 ? (
                        <a href={d.sum.url}>{d.sum.value}</a>
                      ) : (
                        d.sum.value
                      )}
                    </div>
                  </section>
                )
              case 'supportAppeals':
                return (
                  <section
                    key={index}
                    className={RTableClasses(4, selected)}
                    onClick={_onChangeRow(index, d)}
                    onDoubleClick={_onDoubleClick(index, d)}
                  >
                    <div className={styles.Rtable_cell}>{d.date}</div>
                    <div className={styles.Rtable_cell}>{d.docNumber}</div>
                    <div className={styles.Rtable_cell}>{d.responsible}</div>
                    <div className={styles.Rtable_cell}>{d.status?.name}</div>
                  </section>
                )
              case 'events':
                return (
                  <section
                    key={index}
                    className={RTableClasses(4, selected)}
                    onClick={_onChangeRow(index, d)}
                    onDoubleClick={_onDoubleClick(index, d)}
                  >
                    <div className={styles.Rtable_cell}>{d.date}</div>
                    <div className={styles.Rtable_cell}>{d.object}</div>
                    <div className={styles.Rtable_cell}>{d.responsible}</div>
                    <div className={styles.Rtable_cell}>{d.event}</div>
                  </section>
                )
              case 'eventsObject':
                return (
                  <section
                    key={index}
                    className={RTableClasses(3, selected)}
                    onClick={_onChangeRow(index, d)}
                    onDoubleClick={_onDoubleClick(index, d)}
                  >
                    <div className={styles.Rtable_cell}>
                      <span>{d.date.fullYear}</span>
                      &nbsp;
                      <span>|</span>
                      &nbsp;
                      <span>{d.date.time}</span>
                    </div>
                    <div className={styles.Rtable_cell}>{d.description}</div>
                    <div className={styles.Rtable_cell}>{d.status?.name}</div>
                  </section>
                )
              default:
                return null
            }
          })}
      </section>
    )
  }
)
