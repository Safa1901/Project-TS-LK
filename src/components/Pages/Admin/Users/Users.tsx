import React from "react";
//styles
import styles from './styles/container.module.scss'
//pages
import { UsersSearch } from "./UsersSearch";
import { UsersTable } from "./UsersTable";


export const Users = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Пользователи</div>
            <UsersSearch/>
            <UsersTable/>
        </section>
    )
})