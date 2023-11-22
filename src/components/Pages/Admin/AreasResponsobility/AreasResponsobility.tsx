import React from "react";
//styles
import styles from './styles/container.module.scss';
import { AreasResponsobilitySearch } from './AreasResponsobilitySearch';
import { AreasResponsobilityNew } from './AreasResponsobilityNew';
import { AreasResponsobilityTable } from './AreasResponsobilityTable'


export const AreasResponsobility = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Зоны ответственности</div>
            <AreasResponsobilitySearch/>
            <AreasResponsobilityNew/>
            <AreasResponsobilityTable/>
        </section>
    )
})