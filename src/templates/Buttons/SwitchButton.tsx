import React from 'react'
import { withStyles, Theme, createStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import Switch, {  SwitchProps } from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

interface Props extends SwitchProps {
  checked: boolean
  handleChange: () => void
}

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28, //28
      height: 16, //16
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(Switch)

export const CustomizedSwitches: React.FC<Props> = React.memo(
  ({ checked, handleChange }) => {
    return (
      <FormGroup>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>
              <AntSwitch
                checked={checked}
                onChange={handleChange}
                name="checkedC"
              />
            </Grid>
          </Grid>
        </Typography>
      </FormGroup>
    )
  }
)
