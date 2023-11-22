import React from "react";
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import TablePagination from '@material-ui/core/TablePagination';
// import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

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
  }), 
);


// interface TablePaginationActionsProps {
//     count: number;
//     page: number;
//     rowsPerPage: number;
//     onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
// }
  
// function TablePaginationActions(props: TablePaginationActionsProps) {
//   const classes = useStyles1();
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <div className={classes.root}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </div>
//   );
// }

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

export const ObjectNevaOnlainTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
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
  

  return (
      <div>
        <TableContainer>
            <Table className={classes.table} aria-label="enhanced table">
                <TableHead>
                    <TableRow>
                        <TableCell>№ Объекта</TableCell>
                        <TableCell align="left">Группа</TableCell>
                        <TableCell align="left">Название</TableCell>
                        <TableCell align="left">Адрес</TableCell>
                        <TableCell align="left">Имя ответственного</TableCell>
                        <TableCell align="left">Номер телефона</TableCell>
                        <TableCell align="left">Зона ответственности</TableCell>
                        <TableCell align="left">Тип уведомлений</TableCell>
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
                            <TableCell align="left">{row.push}</TableCell>
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
        {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: 'Все', value: -1 }]}
            colSpan={3}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
        /> */}

      </div>

    );
}