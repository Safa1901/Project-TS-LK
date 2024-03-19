import React from "react";
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
    name: string;
    phone: string;
    // admin: Array;
}

function createData(
    name: string,
    phone: string,
): Data {
  return { phone, name};
}

const rows = [
    createData('9184787783', 'Сафина Анжела Рашидовна'),
];

export const UsersAdministratorTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)
  
  

  return (
      <div>
        <Paper sx={{ width: '100%', mb: 2, marginTop: 5 }}>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <Typography
                            sx={{ flex: '1 1 100%', marginLeft: 2 }}
                            variant="h6"
                            id="tableTitle"
                            component="div"
                        >
                            Информация пользователя
                        </Typography>
                        <TableRow>
                            <TableCell variant="head" align="left">Номер телефона</TableCell>
                            <TableCell variant="head" align="left">Имя</TableCell>
                            <TableCell variant="head" align="left">Администратор</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row, idx) => (
                            <TableRow tabIndex={-1} hover key={idx}>
                                <TableCell variant="body" align="left">{row.name}</TableCell>
                                <TableCell variant="body" align="left">{row.phone}</TableCell>
                                <TableCell variant="body" align="left">
                                    <TextField size="small"  id="outlined-basic" label="Администратор" variant="outlined" />
                                </TableCell>
                            </TableRow>
                        ))}
                        {/* {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
      </div>

    );
}