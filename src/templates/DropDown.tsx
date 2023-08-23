import React from 'react'
import styles from '@Scss/dropDown.module.scss'
import {
  IPropsDrowDown,
  IPropsDrowDownFilter,
  IPropsDrowDownMenu,
} from './interfaces'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { ArrowDownIcon, ArrowUpIcon } from '@Files/icons'
import { ButtonMenuIcon } from './Buttons/Buttons'

export const DropDown: React.FC<IPropsDrowDown> = React.memo(
  ({ label, open, handleToggleOpen }) => {
    const [menuList] = React.useState([
      { label: 'Аккаунт', link: '/account' },
      { label: 'Оплата', link: '/payment' },
      { label: 'Техподдержка', link: '/support' },
      { label: 'Выйти', link: '#' },
    ])
    const visibleDrowDownContent = clsx({
      [styles.dropdown__content]: true,
      [styles.show]: open,
      [styles.hide]: !open,
    })
    return (
      <div className={styles.dropdown} style={{ float: 'right' }}>
        <button className={styles.dropbtn} onClick={handleToggleOpen}>
          {label}
        </button>
        <div className={visibleDrowDownContent}>
          {menuList &&
            Array.isArray(menuList) &&
            menuList.map((menuItem, index) => (
              <Link key={index} to={menuItem.link} onClick={handleToggleOpen}>
                {menuItem.label}
              </Link>
            ))}
        </div>
      </div>
    )
  }
)
export const DropDownFilter: React.FC<IPropsDrowDownFilter> = React.memo(
  ({ label, open, handleToggleOpen }) => {
    const visibleIcon = open ? <ArrowDownIcon /> : <ArrowUpIcon />
    return (
      <div className={styles.dropdown} style={{ float: 'right' }}>
        <button className={styles.dropbtn__filter} onClick={handleToggleOpen}>
          <div>{label}</div>
          <div>{visibleIcon}</div>
        </button>
      </div>
    )
  }
)
export const DropDownMenu: React.FC<IPropsDrowDownMenu> = React.memo(
  ({ menuList, open, handleToggleOpen, onClickMenuItem }) => {
    const visibleDrowDownContent = clsx({
      [styles.dropdown__content__menu]: true,
      [styles.show]: open,
      [styles.hide]: !open,
    })
    return (
      <div className={styles.dropdown} style={{ float: 'right' }}>
        <ButtonMenuIcon active={open} onClick={handleToggleOpen} />
        <div className={visibleDrowDownContent}>
          {menuList &&
            Array.isArray(menuList) &&
            menuList.map((menuItem, index) => (
              <button
                key={index}
                onClick={(event) => onClickMenuItem(menuItem.type)}
              >
                {menuItem.label}
              </button>
            ))}
        </div>
      </div>
    )
  }
)
