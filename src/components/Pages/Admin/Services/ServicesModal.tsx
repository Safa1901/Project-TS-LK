import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { styled  } from '@material-ui/core/styles';
import styles from './styles/container.module.scss'

const MyButton = styled(Button) ({
  borderRadius: 10,
  width: 170,
  height: 42,
  fontSize: 15,
  fontWeight: 500,
  textTransform: 'none',
  borderColor: '#CED2DC',
  border: 'solid 1px',
  marginRight: 10,
  marginLeft: 10,
  color: '#212529',
})

export default function ServicesModal() {
  const [openRegion, setOpenRegion] = React.useState(false);

  const handleClickOpen = () => {
    setOpenRegion(true);
  };

  const handleClose = () => {
    setOpenRegion(false);
  };


  return (
    <div className={styles.modalSection}>
      <MyButton variant="outlined" onClick={handleClickOpen}>
        Добавить услугу
      </MyButton>
      <Dialog open={openRegion} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Добавить услугу</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Уникальный ключ"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
            <TextField
            id="outlined-textarea"
            // label="Текст уведомления:"
            // placeholder="Placeholder"
            multiline
            fullWidth
            margin="dense"
            />
        </DialogContent>
        <DialogContent>
            <TextField
            id="outlined-number"
            label="Number"
            type="number"
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            />
        </DialogContent>
        <DialogActions>
          <MyButton onClick={handleClose}>
            Сохранить
          </MyButton>
          <MyButton onClick={handleClose}>
            Закрыть
          </MyButton>
        </DialogActions>
      </Dialog>
      {/* <Dialog open={openCity} onClose={handleCloseCity} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Добавить регион</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-select-currency-native"
            margin="dense"
            select
            fullWidth
            // label="Выберете тип системы"
            // value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            // variant="outlined"
            >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название региона"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <MyButton onClick={handleCloseCity}>
            Добавить
          </MyButton>
          <MyButton onClick={handleCloseCity}>
            Закрыть
          </MyButton>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}