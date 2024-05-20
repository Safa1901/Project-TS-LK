import React from "react";
//styles
import styles from '../styles/container.module.scss'
//pages
import { ReportSearch } from "./ReportSearch";


export const Report = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Отчеты</div>
            <ReportSearch/>
        </section>
    )
})