import React from "react";
//styles
import styles from './styles/container.module.scss'
//pages
import { PowerSerch } from "./PowerSearch";
import { PowerTable } from "./PowerTable";



export const Power = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Отчет</div>
            <PowerSerch/>
            <PowerTable/>
        </section>
    )
})