import React from "react";

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    prefix: string;
    name: string; 
    inn: string; 
    kpp: string; 
    description: string; 
   
}
  
function createData(
    prefix: string,
    name: string,
    inn: string,
    kpp: string, 
    description: string, 

): Data {
    return { prefix, name, inn, kpp, description};
}

const rows = [
    createData('075', 'ООО ЧОО "ГАРАНТ ПЛЮС"', '2631026357', '	263101001', 'Наименование юридического лица: ООО ЧОО "ГАРАНТ ПЛЮС"ИНН: 2631026357 КПП: 263101001'),
    createData('202', 'ООО "ЧОП "ГУАРД"', '9110004967', '911001001', 'Наименование юридического лица: ООО "ЧОП "ГУАРД"ИНН: 9110004967 КПП: 911001001'),
    createData('130', 'О​ОО ЧОП «СБС»', '2618014899', '263201001', 'Наименование юридического лица: О​ОО ЧОП «СБС»ИНН: 2618014899 КПП: 263201001'),
    createData('001', 'ООО ЧОП «ЩИТ» (Тихорецк)', '2321016430', '232101001', 'Наименование юридического лица: ООО ЧОП «ЩИТ» (Тихорецк)ИНН: 2321016430 КПП: 232101001'),
    createData('168', 'ОМЕРТА-ЮГ', '2308091942', '230801001', 'Наименование юридического лица: ОМЕРТА-ЮГИНН: 2308091942 КПП: 230801001')
]


export const CompanyDetailsTable = () => {
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
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Префикс</TableCell>
                            <TableCell align="left">Название компании</TableCell>
                            <TableCell align="left">ИНН</TableCell>
                            <TableCell align="left">КПП</TableCell>
                            <TableCell align="left">Дополнительная информация</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row) => (
                            <TableRow tabIndex={-1} hover key={row.prefix}>
                                <TableCell align="left">{row.prefix}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.inn}</TableCell>
                                <TableCell align="left">{row.kpp}</TableCell>
                                <TableCell align="left">{row.description}</TableCell>
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
    )

}