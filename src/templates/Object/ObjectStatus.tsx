import * as React from 'react'
import styles from './styles/ObjectStatus.module.scss'
import { ObjectStatusIndicator } from './ObjectStatusIndicator'
import { IPropsObjectsStatus } from './interfaces'
import { useHistory } from 'react-router-dom'

export const ObjectStatus: React.FC<IPropsObjectsStatus> = React.memo(
  ({ currentObject }) => {
    const history = useHistory()
    const { id, status, name, address, paymentVal } = currentObject
    return (
      <section
        className={styles.root__object__status}
        onDoubleClick={() => history.push(`/object/${id}`)}
      >
        <div className={styles.root__object__status__header}>
          <div className={styles.root__object__status__header__name}>
            <div className={styles.root__object__status__header__name__text}>
              {name}
            </div>
            {paymentVal && (
              <div
                className={styles.root__object__status__header__name__payment}
              >
                {paymentVal} ₽
              </div>
            )}
          </div>
          <div className={styles.root__object__status__header__status_name}>
            {status.name}
          </div>
          <div className={styles.root__object__status__header__address}>
            <div>{address}</div>
          </div>
        </div>
        <ObjectStatusIndicator statusId={status.id} />
      </section>
    )
  }
)
//statuses ids
/* 
1 - alarm
2 - guarded
3 - disarm
4 - inactive
 */
//object statuses
// 1 - alarm, 2 - guarded, 3 - disarm, 4 - inactive
