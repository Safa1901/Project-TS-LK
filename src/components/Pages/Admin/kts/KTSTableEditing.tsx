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
  object: string;
  panel: string; 
  phone: string; 
  name: string;
  active: number; 
}

function createData(
    object: string,
    panel: string,
    phone: string, 
    name: string,
    active: number,
): Data {
  return { object, panel, phone, name, active};
}

const rows = [
  createData('14918', 'krd_phoenix', '79649003366', 'Александр Ерофеев', 1,),
  createData('14918', 'krd_phoenix', '79968463533', 'Поддубная Екатерина Владимировна', 0,),
  createData('14918', 'krd_phoenix', '79284513470', 'Евдокимов Александр Сергеевич', 0,),
  createData('14918', 'krd_phoenix', '79284271740', 'Худякова Елена Олеговна,', 1),
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


export const KTSTableEditing = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [checkedPush, setCheckedPush] = React.useState(false)

    const handleChangePush = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedPush(event.target.checked);
    };
    const getPushState = (active: number) => {
        switch(active) {
            case 1:
                return true
            case 0:
                return false
        }
    }
  return (
      <div>
        <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell variant='head' align="center">№ Объекта</TableCell>
                            <TableCell align="center">Панель</TableCell>
                            <TableCell align="center">Номер телефона</TableCell>
                            <TableCell align="left">Имя</TableCell>
                            <TableCell align="left">
                                <Checkbox/>
                                КТС
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row, idx) => (
                            <TableRow hover key={idx}>
                                <TableCell align="center" component="th" scope="row">
                                    {row.object}
                                </TableCell>
                                <TableCell align="center">{row.panel}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell variant="footer" align="left">{row.name}</TableCell>
                                <TableCell variant="footer" align="left">
                                    <Checkbox
                                        checked={getPushState(row.active)}
                                        onChange={handleChangePush}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
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