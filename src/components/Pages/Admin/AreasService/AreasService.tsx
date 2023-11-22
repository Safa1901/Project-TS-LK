import React from "react";
//styles
import styles from './styles/container.module.scss'
import  AreasServiceButton  from './AreasServiceButton'

export const AreasService = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Зоны обслуживания</div>
            <AreasServiceButton/>
        </section>
    )
})