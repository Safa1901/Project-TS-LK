import React from 'react'
//styles
import styles from './styles.module.scss'
import clsx from 'clsx'

interface IDocumentsTable {
  type: 'contract' | 'acts'
  data: any[]
  headers: string[]
  onChangeRow?: (d: any) => void
  onDoubleClickRow?: (d: any) => void
}

export const DocumentsTable: React.FC<IDocumentsTable> = React.memo(
  ({ type, data, headers, onChangeRow, onDoubleClickRow }) => {
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0)
    const RTableClasses = (selected: boolean) =>
      clsx({
        [styles.Rtable__5cols]: true,
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
            styles.Rtable__5cols,
            styles.Rtable__5cols__header
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
              case 'contract':
                return (
                  <section
                    key={index}
                    className={RTableClasses(selected)}
                    onClick={_onChangeRow(index, d)}
                    onDoubleClick={_onDoubleClick(index, d)}
                  >
                    <div className={styles.Rtable_cell}>{d.status?.name}</div>
                    <div className={styles.Rtable_cell}>{d.docNumber}</div>
                    <div className={styles.Rtable_cell}>{d.client}</div>
                    <div className={styles.Rtable_cell}>{d.object}</div>
                    <div className={styles.Rtable_cell}>
                      {d.subscriptionPay}
                    </div>
                  </section>
                )
              case 'acts':
                return (
                  <section
                    key={index}
                    className={RTableClasses(selected)}
                    onClick={_onChangeRow(index, d)}
                    onDoubleClick={_onDoubleClick(index, d)}
                  >
                    <div className={styles.Rtable_cell}>{d.accountNumber}</div>
                    <div className={styles.Rtable_cell}>{d.accountDate}</div>
                    <div className={styles.Rtable_cell}>{d.payDate}</div>
                    <div className={styles.Rtable_cell}>{d.sum}</div>
                    <div className={styles.Rtable_cell}>
                      <a href={d.acts.url}>{d.acts.label}</a>
                    </div>
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
