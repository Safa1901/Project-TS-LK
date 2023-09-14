import React from 'react'
import styles from './styles/client.module.scss'
import { DropDown } from 'templates/DropDown'
import { ClickAwayListener } from '@material-ui/core'
// import Menu, { MenuProps } from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';

export const Client = React.memo(({}) => {
  const [openDrowDown, setOpenDropDown] = React.useState(false)
  return (
    <section className={styles.client}>
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
