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
import AppStore from '@Files/AppStore.svg';
import AppGallery from '@Files/AppGallery.svg';
import GooglePlay from '@Files/GooglePlay.svg'


const useStyles = makeStyles((them: Theme) => 
    createStyles({
        input: {
            margin: '15px',
            marginRight: '30px',
            marginLeft: '30px',
            marginTop: '20px',
            fontFamily: 'Montserrat',
            fontSize: '16px',

        },
        
        btn: {
            width: '320px',
            height: '40px',
            marginRight: '30px',
            marginLeft: '30px',
            marginTop: '15px',
            fontFamily: 'Montserrat',
            textTransform: 'none',
            fontSize: '14px',
            lineHeight: '19.5px'

        },

        text: {
            marginTop: '35px'
        },
        texteria: {
            width: '380px',
            height: '34px',
            marginTop: '250px',
            marginLeft: '38%',
            alignItems: 'center',
            lineHeight: '16.8px',
            fontFamily: 'Montserrat',
            fontWeight: 'lighter',
            color: '#6E757C',
            fontSize: '14px',
            textAlign: 'center'
        },
        mobile: {
            width: '380px',
            height: '34px',
            marginTop: '5%',
            marginLeft: '46%',
            alignItems: 'center',
            lineHeight: '16.8px',
            fontFamily: 'Montserrat',
            fontWeight: 'bolder',
            fontSize: '14px',
            color: '#6E757C',
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
                        <Button variant="contained" className={classes.btn}>
                            Войти
                        </Button>
                        <div className={styles.link}>
                            <Link href="#" underline="always" onClick={preventDefault} variant="body2">
                                Забыли пароль?
                            </Link>
                        </div>
                        <div className={styles.link}>
                            <Link href="https://ohrana-neva.ru" target="_blank" underline="always" variant="body2">
                                Еще не являетесь клиентом?
                            </Link>
                        </div>
                    </Paper>
                </div>
            </div>
            <Typography variant="caption" gutterBottom className={classes.texteria}>
                Создавая аккаунт, я даю согласие на обработку персональных данных и соглашаюсь с  
                <Link href="#" underline="always" onClick={preventDefault}> условиями </Link>
            </Typography>
            <Typography variant="caption" className={classes.mobile}>Мобильное приложение</Typography>
            <div className={styles.mobile}>
                <Link href="#" onClick={preventDefault}> <img src={AppStore}/></Link>
                <Link href="#" onClick={preventDefault}> <img src={AppGallery}/></Link>
                <Link href="#" onClick={preventDefault}> <img src={GooglePlay}/></Link>
            </div>
        </section>
    )
})