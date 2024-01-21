import React from "react";
//styles
import styles from './styles/container.module.scss'



export const Power = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Отчет</div>
        </section>
    )
})