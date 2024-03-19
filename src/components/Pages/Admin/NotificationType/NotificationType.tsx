import React from "react";
//styles
import styles from './styles/container.module.scss'
//pages
import { NotificationTypeSearch } from "./NotificationTypeSearch";
import { NotificationTypeTableSync } from "./NotificationTypeTableSync";
import { NotificationTypeTableEditing } from "./NotificationTypeTableEditing";



export const NotificationType = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Редактирование типов уведомлений пользователей:</div>
            <NotificationTypeSearch/>
            <NotificationTypeTableSync/>
            <NotificationTypeTableEditing/>
        </section>
    )
})