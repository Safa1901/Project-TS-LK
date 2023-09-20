import React from "react";

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        }
    })
)

export const NotificationSearch = () => {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="№ объекта" variant="outlined" />
                <TextField id="outlined-basic" label="Телофон" variant="outlined" />
                
            </form>
        </div>
    )
}