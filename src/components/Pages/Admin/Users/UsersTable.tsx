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
    id: number;
    phone: string;
    login: string;
    name: string;
}

function createData(
    id: number,
    phone: string,
    login: string,
    name: string,
): Data {
  return { id, phone, login, name};
}

const rows = [
    createData(14871, '9184787783', 'krd_phoenix_79184787783', 'Сафина Анжела Рашидовна'),
    createData(94981, '9693046354', 'stvp_phoenix_79220744352', 'Анастасия Рамилевна Сафина'),
    createData(91637, '9952295389', 'stvp_phoenix_79284307047', 'Кирилл Сергеевич Васильченко'),
    createData(52409, '9284307047', 'stvp_phoenix_79034585777', 'Ерофеев Александр Александрович '),
];

export const UsersTable = () => {
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
                        <TableCell>Id</TableCell>
                        <TableCell align="left">Номер телефона</TableCell>
                        <TableCell align="left">Логин</TableCell>
                        <TableCell align="left">Имя</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row, idx) => (
                        <TableRow tabIndex={-1} hover key={idx}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                            <TableCell align="left">{row.login}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
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