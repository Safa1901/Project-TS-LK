import React from "react";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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

export const EditingSetingSearch = () => {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField size="small"  id="outlined-basic" label="№ объекта" variant="outlined" />
                <TextField size="small"  id="outlined-basic" label="Телофон" variant="outlined" />
                <Button className={classes.btn} variant="contained">Поиск</Button>
            </form>
        </div>
    )
}