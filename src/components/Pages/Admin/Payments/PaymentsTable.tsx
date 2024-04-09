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
import Checkbox from '@mui/material/Checkbox';

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
    date: string;
    name: string;
    account: string; 
    status: string; 
    amount: number;
}

function createData(
    date: string,
    name: string,
    account: string,
    status: string,
    amount: number,
): Data {
  return { date, name, account, status, amount};
}

const rows = [
  createData('2024-02-13 15:47:39', 'Ерофеев Александр Александрович', '1630083070', 'Авторизация отклонена', 100),

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
    marginBottom: 10,
})


export const PaymentsTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  return (
      <div>
        <h2>
            Оплаты:
            <MyButton>Сохранить файл</MyButton>
        </h2>
        <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell variant='head' align="center">Дата</TableCell>
                            <TableCell align="center">Имя</TableCell>
                            <TableCell align="center">Лицевой счет</TableCell>
                            <TableCell align="center">Статус</TableCell>
                            <TableCell align="left">Сумма</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row, idx) => (
                            <TableRow hover key={idx}>
                                <TableCell align="center" component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.account}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell variant="footer" align="left">{row.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
      </div>
    );
}