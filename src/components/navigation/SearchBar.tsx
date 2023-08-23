import * as React from 'react'
import styles from './styles/searchBar.module.scss'

export const SearchBar = React.memo(({}) => {
  const [searchStr, setSearchSrt] = React.useState<string>('')
  return (
    <section className={styles.searchBar}>
      <input
        type="text"
        placeholder="Поиск объекта, договора"
        value={searchStr}
        onChange={(event) => setSearchSrt(event.target.value)}
      />
    </section>
  )
})
