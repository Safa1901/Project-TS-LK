import React from "react";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
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


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        btn: {
            height: '2.8255em',
            boxShadow: 'none',
            backgroundColor: '#F8F9FA',
            borderColor: '#CED2DC',
            border: 'solid 1px',
        },
        
    })
)

export const EditingAccessSettingsSearch = () => {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('Феникс Краснодар');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField size="small"  id="outlined-basic" label="№ объекта" variant="outlined" />
                <TextField size="small"  id="outlined-basic" label="Телефон" variant="outlined" />
                <TextField
                    id="outlined-select-currency-native"
                    size="small" 
                    select
                    label="Выберете тип системы"
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