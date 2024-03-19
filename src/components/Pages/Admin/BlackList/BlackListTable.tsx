import React from "react";
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { styled  } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';

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

interface Data {
    phone: string;
    pult_id: number; 
    group: string;
    panel: string; 
}

function createData(
    phone: string, 
    pult_id: number, 
    group: string, 
    panel: string, 

): Data {
  return { phone, group, pult_id, panel };
}

const rows = [
  createData("89034585777", 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74'),
  createData("89952295389", 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар '),
];

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
    marginBottom: 15,
})
  

export const BlackListTable = () => {
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
        <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell variant='head' align="center">Телефон</TableCell>
                            <TableCell align="center">Пультовый номер</TableCell>
                            <TableCell align="center">Группа</TableCell>
                            <TableCell align="center">Панель</TableCell>
                            <TableCell>Удалить</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row, idx) => (
                            <TableRow hover key={idx}>
                                <TableCell component="th" scope="row">
                                    {row.phone}
                                </TableCell>
                                <TableCell align="left">{row.pult_id}</TableCell>
                                <TableCell align="left">{row.group}</TableCell>
                                <TableCell variant="footer" align="left">{row.panel}</TableCell>
                                <TableCell>
                                    <MyButton>Удалить </MyButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
      </div>
    );
}