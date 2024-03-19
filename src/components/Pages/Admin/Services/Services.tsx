import React from "react";
//styles
import styles from './styles/container.module.scss'
//pages
import ServicesModal from './ServicesModal'
import { ServicesTable }  from './ServicesTable'




export const Services = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Список услуг</div>
            <ServicesModal/>
            <ServicesTable/>
        </section>
    )
})