import React from 'react'
//utils
import { BrowserRouter as Router } from 'react-router-dom'
//styles
import styles from '@Scss/app.module.scss'
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
            <SideDrawer
              hist={hist}
              handleChangeDrawer={this.handleChangeDrawer}
            />
          </Drawer>
          <section className={styles.main}>
            <section className={styles.main__content}>
              <RouterContent />
            </section>
          </section>
        </div>
      </Router>
    )
  }
}
