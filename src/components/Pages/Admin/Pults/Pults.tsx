import React from "react";
//styles
import styles from './styles/container.module.scss'
import { PultsTable } from "./PultsTable";
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as PlusIcon} from '@Files/plusIcon.svg';


export const Pults = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Пульты:</div>
            <IconButton>
                <PlusIcon/>
            </IconButton>
            <PultsTable/>
        </section>
    )
})