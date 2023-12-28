import React from "react";
//styles
import styles from './styles/container.module.scss'
import { PersonalAccountSearch } from "./PersonalAccountSearch";
import { PersonalAccountTable } from './PersonalAccountTable'


export const PersonalAccount = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Редактирование настройки постановки/снятия не по расписанию</div>
            <PersonalAccountSearch/>
            <PersonalAccountTable/>
        </section>
    )
})