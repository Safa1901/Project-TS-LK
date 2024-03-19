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
  object: string;
  panel: string; 
  phone: string; 
  sms: number; 
  push: number;
  telegram: number;
  locked: number
}

function createData(
    object: string,
    panel: string,
    phone: string, 
    sms: number,
    push: number,
    telegram: number,
    locked: number
): Data {
  return { object, panel, phone, sms, push, telegram, locked};
}

const rows = [
  createData('14918', 'krd_phoenix', '79649003366', 1, 0, 1, 0),
  createData('14918', 'krd_phoenix', '79968463533', 0, 1, 0, 0),
  createData('14918', 'krd_phoenix', '79284513470', 0, 0, 0, 0),
  createData('14918', 'krd_phoenix', '79284271740', 1, 1, 1, 1),
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


export const NotificationTypeTableEditing = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [checkedSMS, setCheckedSMS] = React.useState(false);
  const [checkedPush, setCheckedPush] = React.useState(false)
  const [checkedTelegram, setCheckedTelegram] = React.useState(false)
  const [checkedLocked, setCheckedLocked] = React.useState(false)
//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)
  
//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };
//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
  

    const handleChangeSMS = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedSMS(event.target.checked);
    };
    const handleChangePush = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedPush(event.target.checked);
    };
    const handleChangeTelegram = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedTelegram(event.target.checked);
    };
    const handleChangeLocked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedLocked(event.target.checked);
    };

    const getSMSState = (sms: number) => {
        switch(sms) {
            case 1:
                return true
            case 0:
                return false
        }
    }
    const getPushState = (push: number) => {
        switch(push) {
            case 1:
                return true
            case 0:
                return false
        }
    }
    const getTelegramState = (telegram: number) => {
        switch(telegram) {
            case 1:
                return true
            case 0:
                return false
        }
    }
    const getLockedState = (locked: number) => {
        switch(locked) {
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
                            
                            <TableCell align="center">
                                <Checkbox/>
                                SMS
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox/>
                                Push-уведомление
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox/>
                                Telegram-уведомление
                            </TableCell>
                            <TableCell align="left">
                                <Checkbox/>
                                Заблокировать изменение
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row, idx) => (
                            <TableRow hover key={idx}>
                                <TableCell component="th" scope="row">
                                    {row.object}
                                </TableCell>
                                <TableCell align="left">{row.panel}</TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell variant="footer" align="left">
                                    <Checkbox
                                        checked={getSMSState(row.sms)}
                                        onChange={handleChangeSMS}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </TableCell>
                                <TableCell variant="footer" align="left">
                                    <Checkbox
                                        checked={getPushState(row.push)}
                                        onChange={handleChangePush}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </TableCell>
                                <TableCell variant="footer" align="left">
                                    <Checkbox
                                        checked={getTelegramState(row.telegram)}
                                        onChange={handleChangeTelegram}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </TableCell>
                                <TableCell variant="footer" align="left">
                                    <Checkbox
                                    checked={getLockedState(row.locked)}
                                    onChange={handleChangeLocked}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
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