import React from 'react'
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Profile } from './Profile'
import { Safety } from './Safety'
import { Notifications } from './Notifications'
import { PaymentSettings } from './PaymentSettings'

const AntTabs = withStyles({
  root: {},
  indicator: {
    backgroundColor: '#003E8C',
  },
})(Tabs)

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
      textTransform: 'none',
      minWidth: 72,
      // fontWeight: theme.typography.fontWeightRegular,
      marginRight: 40,
      fontFamily: ['"Segoe UI"', 'Arial', 'sans-serif'].join(','),
      '&:hover': {
        color: '#003E8C',
        opacity: 1,
      },
      '&$selected': {
        color: '#003E8C',
        fontWeight: 'normal',
      },
      '&:focus': {
        color: '#003E8C',
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />)

interface StyledTabsProps {
  value: number
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void
}

interface StyledTabProps {
  label: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}))
interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <section>{children}</section>}
    </div>
  )
}
export const CustomizedTabs = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Профиль" />
          <AntTab label="Безопасность" />
          <AntTab label="Уведомления" />
          <AntTab label="Настройки оплаты" />
        </AntTabs>
      </div>
      <TabPanel value={value} index={0}>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Safety />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Notifications />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PaymentSettings />
      </TabPanel>
    </div>
  )
}
