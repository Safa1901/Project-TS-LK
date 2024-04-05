import React from "react";
//styles
import styles from './styles/container.module.scss'
import { NotificationSearch } from "./NotificationSearch";
import { NotificationTable } from "./NotificationTable";

export const Notifications = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Уведомление пользователей</div>
            <NotificationSearch/>
            <NotificationTable/>
        </section>
    )
})