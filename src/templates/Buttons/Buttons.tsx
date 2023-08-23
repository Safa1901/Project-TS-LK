import React from 'react'
import clsx from 'clsx'
//styles
import styles from './style.module.scss'
import FilterListIcon from '@material-ui/icons/FilterList'
import {
  CloseIcon,
  BackIcon,
  EditPencilIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  MenuIcon,
} from '@Files/icons'
//
interface IButtonBase {
  active?: boolean
  disabled?: boolean
  onClick?: () => void
}
interface IDefaultButton extends IButtonBase {
  text: string
  color?: string
}
export const ButtonBase: React.FC<IDefaultButton> = React.memo(
  ({ text, color, disabled, onClick }) => {
    const buttonBaseClass = clsx({ [styles.blue]: color === 'blue' || !color })
    return (
      <button onClick={onClick} disabled={disabled} className={buttonBaseClass}>
        {text}
      </button>
    )
  }
)
export const ButtonDelete: React.FC<IButtonBase> = React.memo(
  ({ active, disabled, onClick }) => {
    const classes = clsx({
      [styles.active_svg_icon_delete_btn]: active,
      [styles.delete_btn]: true,
    })
    return (
      <button onClick={onClick} disabled={disabled} className={classes}>
        <CloseIcon />
      </button>
    )
  }
)
export const ButtonBefore: React.FC<IDefaultButton> = React.memo(
  ({ text, color, disabled, onClick }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styles.before_btn}
      >
        <div className={styles.before_btn__icon}>
          <BackIcon />
        </div>
        <div>{text}</div>
      </button>
    )
  }
)
export const ButtonLink: React.FC<IDefaultButton> = React.memo(
  ({ text, color, disabled, onClick }) => {
    return (
      <button onClick={onClick} disabled={disabled} className={styles.link_btn}>
        {text}
      </button>
    )
  }
)
export const ButtonEditPencil: React.FC<IButtonBase> = React.memo(
  ({ active, disabled, onClick }) => {
    const classes = clsx({
      [styles.active_svg_icon_edit_pencil_btn]: active,
      [styles.edit_pencil_btn]: true,
    })
    return (
      <button onClick={onClick} disabled={disabled} className={classes}>
        <EditPencilIcon />
      </button>
    )
  }
)
//
interface IButtonFilter extends IDefaultButton {
  active: boolean
}
export const ButtonFilter: React.FC<IButtonFilter> = React.memo(
  ({ active, text, color, disabled, onClick }) => {
    const toggleActiveClass = clsx({
      [styles.active]: active,
      [styles.nonactive]: !active,
    })
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={toggleActiveClass}
      >
        {text}
      </button>
    )
  }
)
/* FILTER BUTTONS WITHOUT TEXT */
interface IButtonIconFilter {
  onClick?: () => void
}
export const ButtonIconFilter: React.FC<IButtonIconFilter> = React.memo(
  ({ onClick }) => {
    return (
      <button className={styles.filter_icon_btn} onClick={onClick}>
        <FilterListIcon />
      </button>
    )
  }
)
export const ButtonIconArrowDown: React.FC<IButtonIconFilter> = React.memo(
  ({ onClick }) => {
    return (
      <button className={styles.filter_icon_btn} onClick={onClick}>
        <ArrowDownIcon />
      </button>
    )
  }
)
export const ButtonIconArrowUp: React.FC<IButtonIconFilter> = React.memo(
  ({ onClick }) => {
    return (
      <button className={styles.filter_icon_btn} onClick={onClick}>
        <ArrowUpIcon />
      </button>
    )
  }
)
//
interface IButtonMenuIcon {
  onClick?: () => void
  active: boolean
}
export const ButtonMenuIcon: React.FC<IButtonMenuIcon> = React.memo(
  ({ active, onClick }) => {
    const classes = clsx({
      [styles.menu_icon_btn_active]: active,
      [styles.menu_icon_btn]: true,
    })
    return (
      <button className={classes} onClick={onClick}>
        <MenuIcon />
      </button>
    )
  }
)
//
interface IButtonBaseRadius extends IDefaultButton {
  borderRadius: string
}
export const ButtonBaseRadius: React.FC<IButtonBaseRadius> = React.memo(
  ({ text, disabled = false, onClick, borderRadius = '0px' }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styles.border_radius_btn}
        style={{
          borderRadius,
        }}
      >
        {text}
      </button>
    )
  }
)
