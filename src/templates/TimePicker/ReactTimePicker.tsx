import React, { Component } from 'react'
//styles
import styles from './styles.module.scss'
//@ts-ignore
import TimePicker from 'react-time-picker'
import clsx from 'clsx'
import { ClickAwayListener } from '@material-ui/core'

export class ReactTimePicker extends Component<
  {
    onChange: (time: string) => void
    value: string
    height: number
    disabled?: boolean
  },
  { focus: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = {
      focus: false,
    }
  }
  render() {
    const classes = clsx({
      [styles.root]: true,
      [styles.default_border]: !this.state.focus,
      [styles.focus_border]: this.state.focus,
      [styles.height40]: this.props.height === 40,
      [styles.height25]: this.props.height === 25,
      [styles.disabled]: this.props.disabled,
    })
    const { onChange, value, disabled } = this.props
    return (
      <ClickAwayListener onClickAway={() => this.setState({ focus: false })}>
        <TimePicker
          className={classes}
          onChange={onChange}
          value={value}
          disableClock={true}
          clearIcon={null}
          onFocus={() => {
            this.setState({ focus: true })
          }}
          maxTime="23:59"
          minTime="00:00"
          disabled={disabled}
        />
      </ClickAwayListener>
    )
  }
}
