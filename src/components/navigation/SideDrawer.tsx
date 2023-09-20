import React from 'react'
import clsx from 'clsx'
//icons
import { ReactComponent as MainMenuIcon } from '@Files/mainMenu.svg'
import { ReactComponent as Payment } from '@Files/Payment.svg'
import { ReactComponent as DocumentIcon } from '@Files/document.svg'
// import { ReactComponent as NotifyIcon } from '@Files/notify.svg'
import { ReactComponent as UserNotifyIcon } from '@Files/userNotify.svg'
//css
import styles from './styles/sideDrawer.module.scss'
import { WarningBall } from 'templates/warningBall'
import { useHistory } from 'react-router-dom'
import { AdminArrowMenuIcon } from '@Files/icons'
import Button from '@material-ui/core/Button';
// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

interface IProps {
  warningMain?: boolean
  warningFavorite?: boolean
  warningDocuments?: boolean
  warningNotify?: boolean
  warningUserNotify?: boolean
  hist: string
  handleChangeDrawer: (hist: string) => void
}
export const SideDrawer = React.memo(
  ({
    warningNotify = true,
    warningUserNotify = false,
    hist,
    handleChangeDrawer,
  }: IProps) => {
    const history = useHistory()
    const [expandAdminMenu, toggleExpandMenu] = React.useState<boolean>(false)
    //==
    const warningIcon = <WarningBall />
    const menuList = [
      {
        name: '/main',
        label: 'Главная',
        defaultIcon: MainMenuIcon,
        warning: false,
        url: '/',
      },
      {
        name: '/favorite',
        label: 'Оплата',
        defaultIcon: Payment,
        warning: false,
        url: '/payment',
      },
      {
        name: '/documents',
        label: 'Отчеты',
        defaultIcon: DocumentIcon,
        warning: false,
        url: '/documents',
      },
      // {
      //   name: '/events',
      //   label: 'События',
      //   defaultIcon: NotifyIcon,
      //   warning: warningNotify,
      //   url: '/events',
      // },
      // {
      //   name: '/users/notifications',
      //   label: 'Уведомления пользователей',
      //   defaultIcon: UserNotifyIcon,
      //   warning: warningUserNotify,
      //   url: '/users/notifications',
      // },
    ]
    const menuListAdmin = [
      {
        name: '/admin/notifications/notifications',
        label: 'Уведомления пользователей',
        defaultIcon: null,
        warning: false,
        url: '/admin/notifications/notifications',
      },
      {
        name: '/admin/object/objects/',
        label: 'Объекты НеваОнлайн',
        defaultIcon: null,
        warning: false,
        url: '/admin/object/objects/',
      },
      {
        name: '/admin/users',
        label: 'Объекты',
        defaultIcon: null,
        warning: false,
        url: '/admin/users',
      },
      {
        name: '/admin/pults/pults',
        label: 'Пульты',
        defaultIcon: null,
        warning: false,
        url: '/admin/pults/pults',
      },
      {
        name: '/admin/report/notifications',
        label: 'Платежи',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/notifications',
      },
      {
        name: '/admin/report/notifications',
        label: 'Сработки ПТК',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/notifications',
      },
      {
        name: '/admin/report/notifications',
        label: 'Список услуг',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/notifications',
      },
      {
        name: '/admin/report/notifications',
        label: 'Зона ответственности',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/notifications',
      },
      {
        name: '/admin/report/notifications',
        label: 'Журнал изменений',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/notifications',
      },
      {
        name: '/admin/report/notifications',
        label: 'Зона обслуживания',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/notifications',
      },
      {
        name: '/admin/report/notifications',
        label: 'Реквизиты компаний',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/notifications',
      },
      {
        name: '/admin/report/notifications',
        label: 'Отправка уведомлений',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/notifications',
      },
      {
        name: '/admin/report/notifications',
        label: 'Отчеты',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/notifications',
      },
      {
        name: '/admin/report/notifications',
        label: 'Настройки',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/notifications',
      },
    ]
    return (
      <section className={styles.root}>
        <section className={styles.menuListWrapper}>
          <section className={styles.listWrapper}>
            {/* <div className={styles.listHeader}>меню</div> */}
            <div className={styles.list}>
              {menuList &&
                menuList.map((item, index) => {
                  const DefaultIcon = item.defaultIcon
                  const selected = hist === item.url
                  return (
                    <Button
                      key={index}
                      className={clsx({
                        [styles.listItem]: true,
                        [styles.listItemActive]: selected,
                      })}
                      onClick={() => {
                        history.push(item.url)
                        return handleChangeDrawer(item.url)
                      }}
                    >
                      <DefaultIcon  className={styles.iconSidebar}/>
                      <div
                        className={clsx({
                          [styles.listItemRootText]: true,
                          [styles.listItemTextActive]: selected,
                        })}
                      >
                        {item.label}
                      </div>
                      <div>{item.warning && warningIcon}</div>
                    </Button>
                  )
                })}
            </div>
          </section>
        </section>
        <section className={styles.menuListWrapper}>
          <section className={styles.listWrapper}>
            <button
              className={styles.listHeader}
              onClick={() => toggleExpandMenu(!expandAdminMenu)}
            >
              <span>Администрирование</span>
              &nbsp; &nbsp;
              <span
                className={clsx({
                  [styles.listHeader__rotate]: expandAdminMenu,
                })}
              >
                <AdminArrowMenuIcon />
              </span>
            </button>
            <div className={styles.list}>
              {expandAdminMenu &&
                menuListAdmin &&
                menuListAdmin.map((item, index) => {
                  const selected = hist === item.url
                  return (
                    <button
                      key={index}
                      className={clsx({
                        [styles.listItem]: true,
                        [styles.listItemActive]: selected,
                      })}
                      onClick={() => {
                        history.push(item.url)
                        return handleChangeDrawer(item.url)
                      }}
                    >
                      <div
                        className={clsx({
                          [styles.listItemRootTextAdmin]: true,
                          [styles.listItemTextActive]: selected,
                        })}
                      >
                        {item.label}
                      </div>
                      <div>{item.warning && warningIcon}</div>
                    </button>
                  )
                })}
            </div>
          </section>
        </section>
      </section>
    )
  }
)
