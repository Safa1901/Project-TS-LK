import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { areasData } from './data'

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


export const AreasResponsobilityTable = () => {
  const classes = useStyles();

  return (
      <div>
        <TableContainer>
            <Table className={classes.table} aria-label="enhanced table">
                <TableHead>
                    <TableRow>
                        <TableCell>№ объекта</TableCell>
                        <TableCell align="left">Группа</TableCell>
                        <TableCell align="left">Название</TableCell>
                        <TableCell align="left">Адрес</TableCell>
                        <TableCell align="left">Зона ответственности</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {areasData.map((areasDatas) => (
                        <TableRow tabIndex={-1} hover key={areasDatas.id}>
                            <TableCell align="left">{areasDatas.id}</TableCell>
                            <TableCell component="th" scope="row">
                                {areasDatas.time_call}
                            </TableCell>
                            <TableCell align="left">{areasDatas.name_object}</TableCell>
                            <TableCell align="left">{areasDatas.name}</TableCell>
                            <TableCell align="left">{areasDatas.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

      </div>

    );
}