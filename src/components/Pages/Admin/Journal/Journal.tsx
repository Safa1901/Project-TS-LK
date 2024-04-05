import React from "react";
//styles
import styles from '../styles/container.module.scss'
import { JournalSearch } from "./JournalSearch";
import { JournalTable } from "./JournalTable";

export const Journal = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Журнал последних изменений</div>
            <JournalSearch/>
            <JournalTable/>
        </section>
    )
})