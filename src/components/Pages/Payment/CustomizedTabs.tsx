import React from 'react'
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Payment } from './CardPayment/Payment'
import { HistoryPaymentContainer } from './HistoryPayment/HistoryPaymentContainer'

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
          <AntTab label="Оплата картой" />
          <AntTab label="Оплата по счёту" />
          <AntTab label="История операций" />
        </AntTabs>
      </div>
      <TabPanel value={value} index={0}>
        <Payment />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}>
        <HistoryPaymentContainer />
      </TabPanel>
    </div>
  )
}
