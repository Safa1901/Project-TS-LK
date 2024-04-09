import React from "react";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ru';
import Button from '@material-ui/core/Button';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';


const locales = ['ru']
type LocaleKey = (typeof locales)[number];


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '17ch',
                height: '44px'
            },
        },
        root2: {
            '& > *': {
                margin: theme.spacing(1),
                width: '20ch',
                height: '44px'
            },
        },

        btn: {
            margin: theme.spacing(1),
            height: '44px',
            boxShadow: 'none',
            backgroundColor: '#F8F9FA',
            borderColor: '#CED2DC',
            border: 'solid 1px',
            marginLeft: '25px'
        },
    })
)

export const PaymentsSearch = () => {
    const classes = useStyles();
    const [locale, setLocale] = React.useState<LocaleKey>('ru');
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };

    return (
        <div>
            <form noValidate autoComplete="off">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale} >
                    <DatePicker className={classes.root2}/>
                    <DatePicker className={classes.root2} />
                </LocalizationProvider>
                {/* <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                />
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                /> */}
                <FormControlLabel
                    value="ЛК:"
                    control={<Radio />}
                    label="ЛК:"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="Сайт:"
                    control={<Radio />}
                    label="Сайт:"
                    labelPlacement="start"
                />
                <Button className={classes.btn} variant="contained">Поиск списаний</Button>
                <Button className={classes.btn} variant="contained">Поиск платежей</Button>

            </form>
        </div>
    )
}