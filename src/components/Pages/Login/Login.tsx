import React from "react";
//styles
import styles from './styles/container.module.scss';

import LogoIcon from '@Files/Logo.svg';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export const Login = React.memo(({}) => {

    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <section className={styles.root}>
            <div className={styles.root__header}> </div>
            <img src={LogoIcon} alt="" />
            <div>
            <Paper elevation={0}>
                <TextField id="outlined-basic" label="+7(000) 000-00-00" variant="outlined" />
                <TextField id="outlined-basic" label="Пароль" variant="outlined" />
                <Button variant="contained" color="primary">
                    Войти
                </Button>
                <Link href="#" onClick={preventDefault}>
                    Забыли пароль?
                </Link>
            </Paper>
            <Typography variant="caption" display="block" gutterBottom>
                Создавая аккаунт, я даю согласие на обработку персональных данных и соглашаюсь с  
                <Link href="#" onClick={preventDefault}> условиями </Link>
            </Typography>
            </div>
        </section>
    )
})