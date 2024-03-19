import React from "react";
//styles
import styles from '../styles/container.module.scss'
//pages
import { BlackListTable } from './BlackListTable'
import BlackListModal from './BlackListModal'


export const BlackList = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}></div>
            <BlackListModal/>
            <BlackListTable/>
        </section>
    )
})