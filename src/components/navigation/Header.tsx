import React from 'react'
import styles from './styles/header.module.scss'
import { SearchBar } from './SearchBar'
import { Client } from './Client'

export const Header = React.memo(({}) => {
  return (
    <section className={styles.header}>
      <SearchBar />
      <Client />
    </section>
  )
})
