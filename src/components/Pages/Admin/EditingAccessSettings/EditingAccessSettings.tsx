import React from "react";
//styles
import styles from './styles/container.module.scss'
import { EditingAccessSettingsSearch } from "./EditingAccessSettingsSearch";
import { EditingAccessSettingsTable } from './EditingAccessSettingsTable'


export const EditingAccessSettings = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Редактирование настройки постановки/снятия не по расписанию</div>
            <EditingAccessSettingsSearch/>
            <EditingAccessSettingsTable/>
        </section>
    )
})