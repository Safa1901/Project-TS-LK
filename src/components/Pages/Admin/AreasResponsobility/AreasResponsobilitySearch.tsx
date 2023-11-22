import React from "react";

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const zoneAreaas = [
    {
        value: 'Все зоны ответственности',
        label: 'Все зоны ответственности',
    },
    {
        value: 'Без зоны ответственности',
        label: 'Без зоны ответственности',
    },
    {
        value: '1 зона админ',
        label: '1 зона админ',
    },
    {
        value: '10 зона админ',
        label: '10 зона админ',
    },
    {
        value: '100 зона менеджер',
        label: '100 зона менеджер',
    },
    {
        value: '101 зона менеджер',
        label: '101 зона менеджер',
    },
]

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '35ch',
            },
        },
        btn: {
            height: '2.8255em',
            boxShadow: 'none',
            backgroundColor: '#F8F9FA',
            borderColor: '#CED2DC',
            border: 'solid 1px',
        },
        adress: {
            width: '55ch'
        }

    })
)


export const AreasResponsobilitySearch = () => {
    const classes = useStyles();

    const [currency, setCurrency] = React.useState('Феникс Краснодар');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField size="small" id="outlined-basic" label="№ объекта, адрес или название" variant="outlined" />
                <TextField
                    id="outlined-select-currency-native"
                    size="small" 
                    select
                    label="Выберите зоны ответственности"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                    >
                    {zoneAreaas.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency-native"
                    size="small" 
                    select
                    label="Выберите тип ситсемы"
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
                <Button className={classes.btn} variant="contained">Поиск</Button>
            </form>
        </div>
    )
}