import React from 'react'
import styles from './styles/header.module.scss'
import { SearchBar } from './SearchBar'
import { Client } from './Client'
import LogoIcon from '@Files/Logo.svg'

export const Header = React.memo(({}) => {
  return (
    <section className={styles.header}>
       <div className={styles.toolbar}>
          {/* <section className={styles.toolbar__logo}> */}
            <img src={LogoIcon} alt="" />
          {/* </section> */}
        </div>
      <SearchBar />
      <Client />
    </section>
  )
})
