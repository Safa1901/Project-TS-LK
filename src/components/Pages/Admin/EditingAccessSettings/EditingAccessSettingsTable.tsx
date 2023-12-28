import React from "react";

import { makeStyles, useTheme, Theme, createStyles, withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

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
  panel: string; 
  phone: string;
  name:string;
  external_pult_id: number;
  external_group: number;
  external_panel: string


}

function createData(
  object: number, 
  group: number, 
  panel: string, 
  phone: string,
  name:string,
  external_pult_id: number,
  external_group: number,
  external_panel: string
): Data {
  return { object, group, panel, phone, name, external_pult_id, external_group, external_panel };
}

const rows = [
  createData(14918, 1, 'Феникс Краснодар', '89220744352',  'Быковченко Виктория', 14526, 1, 'Феникс Краснодар'),
  createData(14918, 1, 'Феникс Краснодар', '9693046354', 'Адамов Александр Александрович', 5588, 2, 'Феникс Андромеда'),
  createData(14918, 1, 'Феникс Краснодар', '89220744352',  'Быковченко Виктория', 14526, 1, 'Феникс Краснодар'),
  createData(14918, 1, 'Феникс Краснодар', '9693046354', 'Адамов Александр Александрович', 5588, 2, 'Феникс Андромеда'),
  createData(14918, 1, 'Феникс Краснодар', '89220744352',  'Быковченко Виктория', 14526, 1, 'Феникс Краснодар'),
  createData(14918, 1, 'Феникс Краснодар', '9693046354', 'Адамов Александр Александрович', 5588, 2, 'Феникс Андромеда')
];

export const EditingAccessSettingsTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [checked, setChecked] = React.useState(true);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)
  
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
                        <TableCell align="left">Внешний № объекта</TableCell>
                        <TableCell align="left">Внешняя группа</TableCell>
                        <TableCell align="left">Внешняя панель</TableCell>
                        <TableCell align="left">Активировано</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <TableRow tabIndex={-1} hover key={row.object}>
                            <TableCell component="th" scope="row">
                                {row.object}
                            </TableCell>
                            <TableCell align="left">{row.group}</TableCell>
                            <TableCell align="left">{row.panel}</TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">
                                <FormControl>
                                    <InputLabel htmlFor="demo-customized-textbox">Лицевой счет</InputLabel>
                                    <BootstrapInput id="demo-customized-textbox" value={row.external_pult_id} />
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl>
                                    <InputLabel htmlFor="demo-customized-textbox">Лицевой счет</InputLabel>
                                    <BootstrapInput id="demo-customized-textbox" value={row.external_group} />
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">
                                <FormControl>
                                    <InputLabel htmlFor="demo-customized-textbox">Лицевой счет</InputLabel>
                                    <BootstrapInput id="demo-customized-textbox" value={row.external_panel} />
                                </FormControl>
                            </TableCell>
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