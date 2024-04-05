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
        value: 'Изменен тип уведомления',
        label: 'Изменен тип уведомления'
    },
    {
        value: 'Изменена зона ответственности для объекта',
        label: 'Изменена зона ответственности для объекта'
    },
    {
        value: 'Изменена КТС',
        label: 'Изменена КТС'
    },
    {
        value: 'Нажатие КТС',
        label: 'Нажатие КТС'
    },
]

export const JournalSearch = () => {
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
                <TextField className={classes.root} size="small" id="outlined-basic" label="Телофон" variant="outlined" />
                <TextField
                    className={classes.root2}
                    id="outlined-select-currency-native"
                    size="small" 
                    select
                    label="Выберете тип действия"
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
        </div>
    )
}