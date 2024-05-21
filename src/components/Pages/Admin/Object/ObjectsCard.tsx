import React from "react";

import Button from '@material-ui/core/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyIcon from '@mui/icons-material/Key';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { ButtonNew } from '../../../../templates/Buttons/Button'


import { styled  } from '@material-ui/core/styles';
import CssBaseline from '@mui/material/CssBaseline';

const MyButton = styled(Button) ({
    borderRadius: 10,
    width: 175,
    height: 42,
    fontSize: 15,
    fontWeight: 500,
    textTransform: 'none',
    borderColor: '#CED2DC',
    border: 'solid 1px',
    marginRight: 10,
    marginLeft: 10,
    color: '#212529',
    marginBottom: 10,
})

const currencies = [
    {
        value: 'Апрель 2024',
        label: 'Апрель 2024',
    },
    {
        value: 'Июнь 2024',
        label: 'Июнь 2024',
    },
    {
        value: 'Май 2024',
        label: 'Май 2024',
    },
    {
        value: 'Февраль 2024',
        label: 'Февраль 2024',
    },
]

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);


export const ObjectsCard = () => {
    const [checked, setChecked] = React.useState(false);
    const [currency, setCurrency] = React.useState('Апрель 2024');
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(true);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked1(event.target.checked);
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked2(event.target.checked);
    };
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked3(event.target.checked);
    };
    const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked4(event.target.checked);
    };
    return (
        <div>
            <h5>
                Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест
                <MyButton>Сохранить файл</MyButton>
            </h5>
            <h3>ОТЧЕТЫ</h3>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <form>
                <TextField
                    id="outlined-select-currency-native"
                    size="small" 
                    select
                    // label="Выберете тип системы"
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
                <Checkbox
                    checked={checked1}
                    onChange={handleChange1}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <Checkbox
                    checked={checked2}
                    onChange={handleChange2}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <Checkbox
                    checked={checked3}
                    onChange={handleChange3}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <Checkbox
                    checked={checked4}
                    onChange={handleChange4}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <MyButton>Выгрузить в Excel</MyButton>
                <MyButton>показать</MyButton>
            </form>
            <CssBaseline />
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="subtitle1" component="div">
                        Состояние объекта: Объект охраняется
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        Зона ответственности:
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        Группы реагирования:
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        ЧОП Цезарь Секьюрити Москва
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Кр1 у067ун123
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Кр7 79885099454 79286630089 Кропоткин Казанская н367ву123
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Кр10 Славянск-на-Кубани нексия гн х719еу123
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        Услуги:
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Для ГБР: примечание примечание
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        охрана ОС пн-пт с 18:00 до 09:00 сб-вс круглосуточно
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        На сработки не реагировать
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        Адрес:
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Тест Пашковская 74 каб 306
                    </Typography>
                   
                </CardContent>
                <CardActions>
                    <ButtonNew text="Технический паспорт" size="small" onClick={handleClickOpen}></ButtonNew>
                </CardActions>
                <CardActions>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">УСТРОЙСТВО</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Дата включения: 2022-03-03T00:00:00.000Z
                                Версия ППК: 17
                                Основное питание: ЕСТЬ
                                Резервное питание: НЕТ
                                Дата изменения состояния основного питания: 2023-12-13 13:36:31
                                Дата изменения состояния резервного питания: 2023-06-08 09:00:57
                                Тип прибора: Лунь-25 Mod2
                                Номер сим-карты: 79604901759
                                Основная сим-карта: ДА
                                Дата последнего теста: 2024-04-16 10:06:25
                                Время тестирования:
                                Передаваемый номер: 014918
                            </DialogContentText>
                        </DialogContent>
                        <DialogTitle id="form-dialog-title">ШЛЕЙФЫ</DialogTitle>
                        <DialogActions>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell variant='head' align="left">Зона</TableCell>
                                            <TableCell variant='head' align="left">Группа</TableCell>
                                            <TableCell variant='head' align="left">Описание</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="left">1</TableCell>
                                            <TableCell align="left">3</TableCell>
                                            <TableCell align="left">СМК не реагировать</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </DialogActions>
                        <DialogActions>
                            {/* <ButtonNew 
                                text="Закрыть"
                                onClick={handleClose}>
                                
                            </ButtonNew> */}
                        </DialogActions>
                    </Dialog>
                </CardActions>
            </Card>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell variant='head' align="left">
                                <KeyIcon fontSize="small"/>
                                Ключи:
                            </TableCell>
                            <TableCell variant='head' align="left">
                                <Brightness1Icon fontSize="small"/>
                                Отвественные лица:
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <TableCell align="left">Ерофеев Александр Александрович</TableCell>
                        <TableCell align="left">Поддубная Екатерина Владимировна 79649003366</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}