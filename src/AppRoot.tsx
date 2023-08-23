import React from 'react'
//utils
import { BrowserRouter as Router } from 'react-router-dom'
//styles
import styles from '@Scss/app.module.scss'
import LogoIcon from '@Files/Logo.svg'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import { Header } from 'components/navigation/Header'
import { SideDrawer } from 'components/navigation/SideDrawer'
import { RouterContent } from 'RouterContent'

interface IPropsAppRoot {}
interface IStateAppRoot {
  hist: string
}

export class AppRoot extends React.PureComponent<IPropsAppRoot, IStateAppRoot> {
  constructor(props: IPropsAppRoot) {
    super(props)
    this.state = {
      hist: '',
    }
  }
  componentDidMount() {
    const hist = window.location.pathname
    this.setState({ hist })
  }
  handleChangeDrawer = (hist: string) => this.setState({ hist })
  render() {
    const { hist } = this.state
    return (
      <Router>
        <div className={styles.root}>
          <CssBaseline />
          <AppBar position="fixed" className={styles.appBar}>
            <Header />
          </AppBar>
          <Drawer
            className={styles.drawer}
            variant="permanent"
            classes={{
              paper: styles.drawerPaper,
            }}
            anchor="left"
          >
            <div className={styles.toolbar}>
              <section className={styles.toolbar__logo}>
                <img src={LogoIcon} alt="" />
              </section>
            </div>
            <SideDrawer
              hist={hist}
              handleChangeDrawer={this.handleChangeDrawer}
            />
          </Drawer>
          <section className={styles.main}>
            <section className={styles.main__content}>
              <RouterContent />
            </section>
            <section className={styles.main__footer}>
              <div className={styles.main__footer__copyright}>
                Нева охрана, 2020 Все права защищены
              </div>
              <div className={styles.main__footer__copyright__icons}>
                <div>
                  <a href="#" rel="noreferrer noopener">
                    <i className="fab fa-vk"></i>
                  </a>
                </div>
                <div>
                  <a href="#" rel="noreferrer noopener">
                    <i className="fab fa-instagram-square"></i>
                  </a>
                </div>
                <div>
                  <a href="#" rel="noreferrer noopener">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </div>
              </div>
            </section>
          </section>
        </div>
      </Router>
    )
  }
}
