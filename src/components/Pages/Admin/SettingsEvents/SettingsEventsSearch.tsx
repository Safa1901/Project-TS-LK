import React from "react";

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
            width: '50ch'
        }

    })
)


export const SettingsEventsSearch = () => {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField className={classes.adress} size="small"  id="outlined-basic" label="№ Объекта" variant="outlined" />
                <TextField size="small"  id="outlined-basic" label="Номер телофона" variant="outlined" />
                <Button className={classes.btn} variant="contained">Поиск</Button>
            </form>
        </div>
    )
}