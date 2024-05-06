import React from "react";
//styles
import styles from './styles/container.module.scss'
import { ObjectNevaOnlainSerch } from './ObjectNevaOnlainSerch'
import { ObjectNevaOnlainTable } from './ObjectNevaOnlainTable'
import { ObjectsCard } from "./ObjectsCard";

export const ObjectNevaOnlain = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Объекты НеваОнлайн</div>
            <ObjectNevaOnlainSerch/>
            <ObjectNevaOnlainTable/>
            <ObjectsCard/>
        </section>
    )
})