import React from "react";
//styles
import styles from './styles/container.module.scss';
import SendingNotificationsForm from './SendingNotificationsForm'


export const SendingNotifications = React.memo(({}) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__header}>Отправка уведомления пользователям</div>
            <SendingNotificationsForm/>

        </section>
    )
})