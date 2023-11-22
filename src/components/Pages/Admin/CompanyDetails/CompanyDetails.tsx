import React from "react";
//styles
import styles from './styles/container.module.scss';
import CompanyDetailsModalAdd from './CompanyDetailsModaAddl'
import { CompanyDetailsTable } from './CompanyDetailsTable'

export const CompanyDetails = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Реквизиты компаний</div>
            <CompanyDetailsModalAdd/>
            <CompanyDetailsTable/>
        </section>
    )
})