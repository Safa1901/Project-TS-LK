import React, { useState } from "react";

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ru';
import Button from '@material-ui/core/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
};

const types = [
    {
        value: 'Пожарная сигнализация',
        label: 'Пожарная сигнализация',
    },
    {
        value:'220В',
        label: '220В'
    },
    {
        value:'КТС',
        label:'КТС'
    },
    {
        value:'Постановки',
        label:'Постановки',
    },
    {
        value: 'Снятия',
        label: 'Снятия',
    },
    {
        value: 'Тревога',
        label: 'Тревога'
    },
]


const locales = ['ru']
type LocaleKey = (typeof locales)[number];


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '22ch',
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

export const ReportSearch = () => {
    const classes = useStyles();
    const [locale, setLocale] = React.useState<LocaleKey>('ru');
    const [type, setTypes] = React.useState('')

    // const [currency, setCurrency] = React.useState('Феникс Краснодар');
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setCurrency(event.target.value);
    // };

    // const handleChangeTypes = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTypes(e.target.value)
    // }


    return (
        <div>
            <form noValidate autoComplete="off">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale} >
                    <DatePicker className={classes.root2}/>
                    <DatePicker className={classes.root2} />
                </LocalizationProvider>
                <TextField
                    className={classes.root}
                    id="outlined-select-currency-native"
                    size="small" 
                    select
                    label="Выберете объект"
                    // value={currency}
                    // onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                    >
                </TextField>
                {/* <FormControl sx={{ m: 1, width: 180, }}>
                    <InputLabel id="demo-mutiple-checkbox-label">Выберите тип</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={type}
                        // onChange={handleChangeTypes}
                        input={<OutlinedInput label="Выберите тип" />}
                        variant='outlined'
                        // renderValue={(selected) => selected.join(' ')}
                        MenuProps={MenuProps}
                    >
                        {types.map((type) => (
                            <MenuItem key={type.value} value={type.value}>
                                <Checkbox checked={types.indexOf(type) > -1} />
                                <ListItemText primary={type.value} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> */}
                <Button className={classes.btn} variant="contained">Скачать отчет</Button>
                <Button className={classes.btn} variant="contained">Показать отчет</Button>
            </form>
        </div>
    )
}