import React from 'react'
//styles
import styles from './styles.module.scss'
import clsx from 'clsx'
import { ButtonDelete, ButtonEditPencil } from 'templates/Buttons/Buttons'
import { UpdateResponsibleDialog } from './UpdateResponsibleDialog'

interface ITableResponsiblePersonsWithActions {
  data: any[]
  headers: string[]
  onChangeRow?: (d: any) => void
  onDoubleClickRow?: (d: any) => void
}

export const TableResponsiblePersonsWithActions: React.FC<ITableResponsiblePersonsWithActions> = React.memo(
  ({ data, headers, onChangeRow, onDoubleClickRow }) => {
    const [open, setOpen] = React.useState<boolean>(false)
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
            return (
              <section
                key={index}
                className={RTableClasses(selected)}
                onClick={_onChangeRow(index, d)}
                onDoubleClick={_onDoubleClick(index, d)}
              >
                <div className={styles.Rtable_cell}>{d.priority}</div>
                <div className={styles.Rtable_cell}>{d.fio}</div>
                <div className={styles.Rtable_cell}>{d.phone}</div>
                <div className={styles.Rtable_cell}>{d.additionalPhone}</div>
                <div
                  className={clsx(
                    styles.Rtable_cell,
                    styles.Rtable_cell_flex_box
                  )}
                >
                  <div className={styles.Rtable_cell_actions}>
                    <ButtonEditPencil
                      active={selected}
                      onClick={() => {
                        setOpen(true)
                        return _onChangeRow(index, d)
                      }}
                    />
                    <ButtonDelete active={selected} />
                  </div>
                </div>
              </section>
            )
          })}
        <UpdateResponsibleDialog
          open={open}
          handleClose={() => setOpen(false)}
        />
      </section>
    )
  }
)
