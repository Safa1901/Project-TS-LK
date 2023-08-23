import React from 'react'
//styles
import styles from './styles/container.module.scss'
import { IObject } from 'components/interfaces'
import { ObjectStatusIndicatorBall } from 'templates/Object/ObjectStatusIndicator'
import { ObjectTabs } from './ObjectTabs'
import { DropDownMenu } from 'templates/DropDown'

interface IDetailObjectContainer {
  id: string
  currentObject: IObject
}

export const DetailObjectContainer: React.FC<IDetailObjectContainer> = React.memo(
  ({ id, currentObject }) => {
    const [openMenu, setOpenMenu] = React.useState<boolean>(false)
    const [menuList] = React.useState([
      { label: 'Снять с охраны', type: 'disarm' },
      { label: 'Поставить под охрану', type: 'guarded' },
      { label: 'Пополнить баланс', type: 'replenishBalance' },
      { label: 'Добавить в избранное', type: 'addToFavorite' },
    ])
    const handleClickMenuItem = (type: string) => {
      console.log(`type`, type, `id object`, id)
      return setOpenMenu(false)
    }
    const { name, status } = currentObject
    return (
      <section className={styles.root}>
        <div className={styles.root__header}>
          <div>{name}</div>
          <DropDownMenu
            open={openMenu}
            handleToggleOpen={() => setOpenMenu(!openMenu)}
            menuList={menuList}
            onClickMenuItem={handleClickMenuItem}
          />
        </div>
        <div className={styles.root__status}>
          <div className={styles.root__status__indicator}>
            <ObjectStatusIndicatorBall statusId={status?.id} />
          </div>
          <div className={styles.root__status__name}>{status?.name}</div>
        </div>
        <div className={styles.root__tabs}>
          <ObjectTabs />
        </div>
      </section>
    )
  }
)
