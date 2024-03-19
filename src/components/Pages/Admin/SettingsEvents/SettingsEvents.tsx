import React from "react";
//styles
import styles from '../styles/container.module.scss'
//pages
import { SettingsEventsSearch } from "./SettingsEventsSearch";
import { SettingsEventsTable } from "./SettingsEventsTable";


export const SettingsEvents = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Экспорт событий</div>
            <SettingsEventsSearch/>
            <SettingsEventsTable/>
        </section>
    )
})