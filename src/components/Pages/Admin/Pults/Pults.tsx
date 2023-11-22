import React from "react";
//styles
import styles from './styles/container.module.scss'
import { PultsTable } from "./PultsTable";


export const Pults = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Пульты:</div>
            <PultsTable/>
        </section>
    )
})