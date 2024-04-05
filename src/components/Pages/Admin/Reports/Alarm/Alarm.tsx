import React from "react";
//styles
import styles from '../styles/container.module.scss'
// import { AlarmSearch } from "./AlarmSearch";
// import { AlarmTable } from "./AlarmTable";

export const Alarm = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>хз-шечка</div>
            {/* <AlarmSearch/>
            <AlarmTable/> */}
        </section>
    )
})