import React from "react";

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
    margin: {
        margin: theme.spacing(1),
      },
  }), 
);

interface Data {
  object: number;
  group: number; 
  name: string; 
  adress: string; 
  responsible: string; 
  phone: number;
  zone: string;
  push: string
}

function createData(
  object: number, 
  group: number, 
  name: string, 
  adress: string, 
  responsible: string, 
  phone: number, 
  zone: string, 
  push: string
): Data {
  return { object, group, name, adress, responsible, phone, zone, push };
}

const rows = [
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ', 'Худякова Елена Олеговна', 79298445967 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
  createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
];

export const RemovalArragementsTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [checked, setChecked] = React.useState(true);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)
  
  const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
  };
  const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  };
  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
      <div>
        <TableContainer>
            <Table className={classes.table} aria-label="enhanced table">
                <TableHead>
                    <TableRow>
                        <TableCell>№ Объекта</TableCell>
                        <TableCell align="left">Группа</TableCell>
                        <TableCell align="left">Панель</TableCell>
                        <TableCell align="left">Номер телефона</TableCell>
                        <TableCell align="left">ФИО</TableCell>
                        <TableCell align="left">Постановка</TableCell>
                        <TableCell align="left">Снятие</TableCell>
                        <TableCell align="left">Не постановка</TableCell>
                        <TableCell align="left">Не снятие</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <TableRow tabIndex={-1} hover key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.object}
                            </TableCell>
                            <TableCell align="left">{row.group}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.adress}</TableCell>
                            <TableCell align="left">{row.responsible}</TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                            <TableCell align="left">{row.zone}</TableCell>
                            <TableCell align="left">
                                <FormControl>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChangeCheck}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
      </div>

    );
}