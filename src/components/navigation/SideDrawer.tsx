import React from 'react'
import clsx from 'clsx'
//icons
import { ReactComponent as MainMenuIcon } from '@Files/mainMenu.svg'
import { ReactComponent as Payment } from '@Files/Payment.svg'
import { ReactComponent as DocumentIcon } from '@Files/document.svg'
import { ReactComponent as SupportIcon } from '@Files/supportIcon.svg'
import { ReactComponent as UserNotifyIcon } from '@Files/userNotify.svg'
//css
import styles from './styles/sideDrawer.module.scss'
import { WarningBall } from 'templates/warningBall'
import { useHistory } from 'react-router-dom'
import { AdminArrowMenuIcon } from '@Files/icons';
import Button from '@material-ui/core/Button';
import { styled  } from '@material-ui/core/styles';
// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const MyButton = styled(Button) ({
  fontFamily: 'Montserrat',
  textTransform: 'none',
  fontSize: 14,
  lineHeight: 17.07,
  fontWeight: 500,
  
})

interface IProps {
  warningMain?: boolean
  warningFavorite?: boolean
  warningDocuments?: boolean
  warningNotify?: boolean
  warningUserNotify?: boolean
  hist: string
  handleChangeDrawer: (hist: string) => void
}

interface Admin {
  name: string;
  phone: string;
  email: string
}

function createAdmin(
  name: string,
  phone: string,
  email: string
): Admin {
  return { name, phone, email}
} 

const adminAdd = [
  createAdmin('Кирилл Сергеевич', '+79649111876', 'k.vasilchenko@ohrana-neva.ru')
]
export const SideDrawer = React.memo(
  ({
    warningNotify = true,
    warningUserNotify = false,
    hist,
    handleChangeDrawer,
  }: IProps) => {
    const history = useHistory()
    const [expandAdminMenu, toggleExpandMenu] = React.useState<boolean>(false)
    const [expandMenuReport, toggleMenuReport] = React.useState<boolean>(false)
    const [supportMenu, toggleSupportMenu] = React.useState<boolean>(false)
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
    const supportList = [
      {
      name: '/application',
      label: 'Заявка',
      defaultIcon: false,
      warning: false,
      url: '/application',
    },
    {
      name: '/chat',
      label: 'Чат',
      defaultIcon: false,
      warning: false,
      url: '/chat',
    }, 
    {
      name: '/questions ',
      label: 'Вопросы и ответы',
      defaultIcon: false,
      warning: false,
      url: '/questions',
    }
  ]
    const menuListAdmin = [
      {
        name: '/admin/notifications/notifications',
        label: 'Уведомления пользователей Дата',
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
        name: '/admin/payments/payments',
        label: 'Платежи Дата',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/payments/payments',
      },
      {
        name: '/admin/triggering/triggering',
        label: 'Сработки ПТК',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/triggering/triggering',
      },
      {
        name: '/admin/areas/areas',
        label: 'Зоны ответственности',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/areas/areas',
      },
      {
        name: '/admin/users/users',
        label: 'Пользователи',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/users/users',
      },
      {
        name: '/admin/report/notifications',
        label: 'Журнал изменений Дата',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/notifications',
      },
      {
        name: '/admin/areasService/areasService',
        label: 'Зона обслуживания',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/areasService/areasService',
      },
      {
        name: '/admin/companyDetails/companyDetails',
        label: 'Реквизиты компаний',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/companyDetails/companyDetails',
      },
      {
        name: '/admin/sendingNotifications/sendingNotifications',
        label: 'Отправка уведомлений Дата',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/sendingNotifications/sendingNotifications',
      },
      // {
      //   name: '/admin/report/notifications',
      //   label: 'Отчеты',
      //   defaultIcon: UserNotifyIcon,
      //   warning: false,
      //   url: '/admin/report/notifications',
      // },
      // {
      //   name: '/admin/report/notifications',
      //   label: 'Настройки',
      //   defaultIcon: UserNotifyIcon,
      //   warning: false,
      //   url: '/admin/report/notifications',
      // },
    ]

    const menuReport = [
      {
        name: '/admin/report/gbr',
        label: 'Отчеты ГБР',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/gbr',
      },
      {
        name: '/admin/report/power',
        label: 'Отчеты электропитания',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/power',
      },
      {
        name: '/admin/report/alarm',
        label: 'Отчеты по событиям',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/alarm',
      },
      {
        name: '/admin/report/service-reports',
        label: 'Отчеты по сервису',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/report/service-reports',
      },
    ]

    const menuSettings = [
      {
        name: '/admin/editingSeting/editingSeting',
        label: 'Постановки',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/editingSeting/editingSeting',
      },
      {
        name: '/admin/personalAccount/personalAccount',
        label: 'Лицевые счета',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/personalAccount/personalAccount',
      },
      {
        name: '/admin/editingAccessSeting/editingAccessSeting',
        label: 'Удаленные постановки снятия',
        defaultIcon: UserNotifyIcon,
        warning: false,
        url: '/admin/editingAccessSeting/editingAccessSeting',
      }
    ]
    return (
      <section className={styles.root}>
        {/* <section className={styles.menuListWrapper}>
          <section className={styles.listWrapper}>
            <div className={styles.list_admin}>
              <div className={styles.admin_side}>
                {adminAdd.map((item, idx) => (
                    <div key={idx}>
                      <p className={styles.admin_side_info}>Ваш администратор: <br/>{item.name}</p>
                      <p className={styles.admin_side_info}>{item.phone}</p>
                      <p className={styles.admin_side_info}>{item.email}</p>
                    </div>
                    

                ))}
              </div>
            </div>
            <div className={styles.list}>
              {menuList &&
                menuList.map((item, index) => {
                  const DefaultIcon = item.defaultIcon
                  const selected = hist === item.url
                  return (
                    <MyButton
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
                    </MyButton>
                  )
                })}
                <MyButton
                  className={clsx({
                    [styles.listItem]: true,
                  })}
                  onClick={() => { toggleSupportMenu(!supportMenu)}}
                >
                  <SupportIcon className={styles.iconSidebar}/>
                  <div
                    className={clsx({
                      [styles.listItemRootText]: true,
                    })}
                  >
                    Поддержка
                  </div>
                    &nbsp; &nbsp;
                    <span
                      className={clsx({
                        [styles.listHeader__rotate]: supportMenu,
                      })}
                    >
                      <AdminArrowMenuIcon />
                  </span>
                </MyButton>
                {supportMenu &&
                  supportList &&
                  supportList.map((item, index) => {
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
                  })
                }
            </div>
          </section>
        </section> */}
        <section className={styles.menuListWrapper}>
          <section className={styles.listWrapper}>
            <div className={styles.list}>
              {
                menuListAdmin &&
                menuListAdmin.map((item, index) => {
                  const selected = hist === item.url
                  return (
                    <MyButton
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
                    </MyButton>
                  )
                })}
            </div>


            <div className={styles.list}>
              <button
                className={styles.listHeader}
                onClick={() => toggleMenuReport(!expandMenuReport)}
              >
                <span>Отчеты</span>
                &nbsp; &nbsp;
                <span
                  className={clsx({
                    [styles.listHeader__rotate]: expandMenuReport,
                  })}
                >
                  <AdminArrowMenuIcon />
                </span>
              </button>
              {expandMenuReport &&
                menuReport &&
                menuReport.map((item, index) => {
                  const selected = hist === item.url
                  return (
                    <MyButton
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
                    </MyButton>
                  )
                })
              }
            </div>


            <div className={styles.list}>
              <button
                className={styles.listHeader}
                onClick={() => toggleExpandMenu(!expandAdminMenu)}
              >
                <span>Настройки</span>
                &nbsp; &nbsp;
                <span
                  className={clsx({
                    [styles.listHeader__rotate]: expandAdminMenu,
                  })}
                >
                  <AdminArrowMenuIcon />
                </span>
              </button>
              {expandAdminMenu &&
                menuSettings &&
                menuSettings.map((item, index) => {
                  const selected = hist === item.url
                  return (
                    <MyButton
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
                    </MyButton>
                  )
                })
              }
            </div>
          </section>
        </section>
      </section>
    )
  }
)
