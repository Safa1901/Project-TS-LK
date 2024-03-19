import React from "react";
//styles
import styles from './styles/container.module.scss'
//pages
import { UsersAdministratorSearch } from './UsersAdministratorSearch'
import { UsersAdministratorTable } from './UsersAdministratorTable'
import UaerAdministratorCard  from './UaerAdministratorCard'



export const UsersAdministrator = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Администратор пользователя</div>
            <UsersAdministratorSearch/>
            <UsersAdministratorTable/>
            <UaerAdministratorCard/>
        </section>
    )
})