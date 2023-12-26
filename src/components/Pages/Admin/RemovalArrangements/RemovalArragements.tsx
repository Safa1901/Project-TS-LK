import React from "react";
//styles
import styles from './styles/container.module.scss'
import { RemovalArragementsSearch } from './RemovalArragementsSearch'

export const RemovalArragements = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Редактирование настройки постановки/снятия не по расписанию</div>
            <RemovalArragementsSearch/>
        </section>
    )
})