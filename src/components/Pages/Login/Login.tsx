import React from "react";
//styles
import styles from './styles/container.module.scss';

import LogoIcon from '@Files/Logo.svg';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((them: Theme) => 
    createStyles({
        input: {
            margin: '15px',
            marginRight: '30px',
            marginLeft: '30px',
            marginTop: '20px'
        },
        btn: {
            width: '320px',
            height: '40px',
            marginRight: '30px',
            marginLeft: '30px',
            marginTop: '15px'
        },
        text: {
            marginTop: '35px'
        }

    })
)


export const Login = React.memo(({}) => {

    const classes = useStyles();

    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <section className={styles.root}>
            <div className={styles.root__header}>
                <img src={LogoIcon} alt=""  className={styles.root_logo}/>
                <div className={styles.login}>
                    <Paper elevation={0} className={styles.login_form}>
                        <TextField id="outlined-basic" label="+7(000) 000-00-00" variant="outlined" size='small' className={classes.input} />
                        <TextField id="outlined-basic" label="Пароль" variant="outlined" size='small' className={classes.input} />
                        <Button variant="contained" color="primary" className={classes.btn}>
                            Войти
                        </Button>
                        <Link href="#" onClick={preventDefault}>
                            Забыли пароль?
                        </Link>
                    </Paper>
                </div>
                <Typography variant="caption" display="block" gutterBottom className={classes.text}>
                    Создавая аккаунт, я даю согласие на обработку персональных данных и соглашаюсь с  
                    <Link href="#" onClick={preventDefault}> условиями </Link>
                </Typography>
            </div>
        </section>
    )
})