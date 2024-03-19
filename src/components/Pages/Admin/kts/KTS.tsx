import React from "react";
//styles
import styles from './styles/container.module.scss'
//pages
import { KTSSearch } from "./KTSSearch";
import { KTSTableEditing } from "./KTSTableEditing";
import { KTSTableSync } from "./KTSTableSync";



export const KTS = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}></div>
            <KTSSearch/>
            <KTSTableSync/>
            <KTSTableEditing/>
        </section>
    )
})