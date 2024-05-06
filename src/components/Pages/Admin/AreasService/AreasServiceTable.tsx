import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// interface Data {
//   object: number;
//   group: number; 
//   name: string; 
//   adress: string; 
//   responsible: string; 
//   phone: number;
//   zone: string;
//   push: string
// }

// function createData(
//   object: number, 
//   group: number, 
//   name: string, 
//   adress: string, 
//   responsible: string, 
//   phone: number, 
//   zone: string, 
//   push: string
// ): Data {
//   return { object, group, name, adress, responsible, phone, zone, push };
// }

// const rows = [
//   createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
//   createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
//   createData(14918, 1, 'Тестовый объект ХБ Нева Тестовая КТС - не реагируем! Тест', 'Краснодар ул Пашковская 74', 'Адамов Александр Яковлевич', 928083424 , ' ', 'push'),
// ];

export const ObjectNevaOnlainTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)  

  return (
    <div>
      <h5>Чтобы посмотреть расширенную информацию по объекту, нажмите на объект</h5>
      <TableContainer>
        <Table className={classes.table} aria-label="enhanced table">
          <TableHead>
            <TableRow>
              <TableCell>Регионы</TableCell>
              <TableCell align="left">Города</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
            ).map((row) => (
            ))} */}
              <TableRow tabIndex={-1} hover>
                <TableCell align="left">
                    <BorderColorIcon/>
                </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            {/* {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}