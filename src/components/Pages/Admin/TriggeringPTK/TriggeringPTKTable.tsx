import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { triggeringData } from './data'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

interface Data {
  id: number;
  time_call: string; 
  name_object: string; 
  name: string; 
  phone: string;
  adress: string; 

}

function createData(
    id: number,
    time_call: string,
    name_object: string,
    name: string,
    phone: string,
    adress: string,
): Data {
  return { id, time_call, name_object, name, phone, adress };
}


export const TriggeringPTKTable = () => {
  const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   const handleChangePage = (event: unknown, newPage: number) => {
//       setPage(newPage);
//   };
//   const handleChangeRowsPerPage = (
//       event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//       setRowsPerPage(parseInt(event.target.value, 10));
//       setPage(0);
//   };

  return (
      <div>
        <TableContainer>
            <Table className={classes.table} aria-label="enhanced table">
                <TableHead>
                    <TableRow>
                        <TableCell>№ Сработки</TableCell>
                        <TableCell align="left">Время сработки</TableCell>
                        <TableCell align="left">Название объекта</TableCell>
                        <TableCell align="left">ФИО</TableCell>
                        <TableCell align="left">Телефон</TableCell>
                        <TableCell align="left">Адрес</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {triggeringData.map((triggeringDatas) => (
                        <TableRow tabIndex={-1} hover key={triggeringDatas.id}>
                            <TableCell align="left">{triggeringDatas.id}</TableCell>
                            <TableCell component="th" scope="row">
                                {triggeringDatas.time_call}
                            </TableCell>
                            <TableCell align="left">{triggeringDatas.name_object}</TableCell>
                            <TableCell align="left">{triggeringDatas.name}</TableCell>
                            <TableCell align="left">{triggeringDatas.phone}</TableCell>
                            <TableCell align="left">{triggeringDatas.address}</TableCell>
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

      </div>

    );
}