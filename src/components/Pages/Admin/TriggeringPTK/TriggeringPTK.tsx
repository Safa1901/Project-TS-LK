import React from "react";
//styles
import styles from './styles/container.module.scss';
import { TriggeringPTKTable } from "./TriggeringPTKTable";

export const TriggeringPTK = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Сработки ПТК</div>
            <TriggeringPTKTable/>
        </section>
    )
})