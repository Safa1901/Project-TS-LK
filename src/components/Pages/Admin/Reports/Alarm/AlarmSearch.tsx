import React from "react";

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ru';
import Button from '@material-ui/core/Button';


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
        },
    })
)


const currencies = [
    {
      value: 'Феникс Краснодар',
      label: 'Феникс Краснодар',
    },
    {
      value: 'Феникс Ставрополь',
      label: 'Феникс Ставрополь',
    },
    {
      value: 'Феникс Армавир',
      label: 'Феникс Армавир',
    },
    {
      value: 'Феникс Невинномыск',
      label: 'Феникс Невинномыск',
    },
    {
        value: 'Феникс Евпатория',
        label: 'Феникс Евпатория',
    },
    {
        value: 'Андромеда Ставрополь',
        label: 'Андромеда Ставрополь',
    },
    {
        value: 'Андромеда Пашковская',
        label: 'Андромеда Пашковская',
    },
    {
        value: 'Андромеда Евромост',
        label: 'Андромеда Евромост',
    },
    {
        value: 'Мираж Евромост',
        label: 'Мираж Евромост',
    },
];


export const AlarmSearch = () => {
    const classes = useStyles();
    const [locale, setLocale] = React.useState<LocaleKey>('ru');
    const [currency, setCurrency] = React.useState('');


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField className={classes.root} size="small" id="outlined-basic" label="№ объекта" variant="outlined" />
                <TextField
                    className={classes.root2}
                    id="outlined-select-currency-native"
                    size="small" 
                    select
                    label="Выберете тип системы"
                    // defaultValue={''}
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                    >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale} >
                    <DatePicker className={classes.root2}/>
                    <DatePicker className={classes.root2} />
                </LocalizationProvider>
                <Button className={classes.btn} variant="contained">Поиск</Button>
            </form>
            <Button className={classes.btn} variant="contained">Показать отобранные</Button>
            <Button className={classes.btn} variant="contained">Создать новый отчет</Button>

        </div>
    )
}