import React from "react";

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styles from '../styles/container.module.scss'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    })
)

export const NotificationSearch = () => {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="№ объекта" variant="outlined" />
                <TextField id="outlined-basic" label="Телофон" variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className={styles.input_date}>
                        <DatePicker />
                    </div>
                    <div className={styles.input_date}>
                        <DatePicker />
                    </div>
                </LocalizationProvider>
            </form>
        </div>
    )
}