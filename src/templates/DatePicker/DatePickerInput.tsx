import React from "react";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ru';

const locales = ['ru']
type LocaleKey = (typeof locales)[number];


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                // margin: theme.spacing(1),
                width: '25%',
                height: '44px'
            },
        },
        root2: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
                height: '44px'
            },
        },
    })
)

export const DatePickerInput = () => {
    const classes = useStyles();
    const [locale, setLocale] = React.useState<LocaleKey>('ru');

    return (
        <div  className={classes.root}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale} >
                <DatePicker className={classes.root2}/>
                <DatePicker className={classes.root2} />
            </LocalizationProvider>
        </div>
    )
}