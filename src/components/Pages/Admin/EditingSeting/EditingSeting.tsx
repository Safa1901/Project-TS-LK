import React from "react";
//styles
import styles from './styles/container.module.scss'
import { EditingSetingSearch } from './EditingSetingSearch'
import { EditingSetingTable } from './EditingSetingTable'

export const EditingSeting = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Редактирование настройки постановки/снятия не по расписанию</div>
            <EditingSetingSearch/>
            <EditingSetingTable/>
        </section>
    )
})