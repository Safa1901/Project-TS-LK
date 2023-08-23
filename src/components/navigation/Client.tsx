import React from 'react'
import styles from './styles/client.module.scss'
import AccIcon from '@Files/acc.svg'
import { DropDown } from 'templates/DropDown'
import { ClickAwayListener } from '@material-ui/core'

export const Client = React.memo(({}) => {
  const [openDrowDown, setOpenDropDown] = React.useState(false)
  return (
    <section className={styles.client}>
      <div className={styles.balance}>722,80 ₽</div>
      <div className={styles.accIcon}>
        <img src={AccIcon} alt="" />
      </div>
      <ClickAwayListener onClickAway={() => setOpenDropDown(false)}>
        <div className={styles.phone}>
          <DropDown
            label={'+7 900 000-00-00'}
            open={openDrowDown}
            handleToggleOpen={() => setOpenDropDown(!openDrowDown)}
          />
        </div>
      </ClickAwayListener>
    </section>
  )
})
