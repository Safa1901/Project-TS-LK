import React from "react";

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles/container.module.scss';


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

    })
)


export const AreasResponsobilityNew = () => {
    const classes = useStyles();

    return (
        <div className={styles.newAreas}>
            <div className={styles.areasText}>Создать новую зону ответственности</div>
            <TextField className={styles.inputAreas} size="small" id="outlined-basic" label="Название зоны ответственности" variant="outlined" />
            <Button className={classes.btn} variant="contained">Поиск</Button>
        </div>
    )
}