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

const currencies = [
  {
    value: 'Иркутская область',
    label: 'Иркутская область',
  },
  {
    value: 'Краснодарский край',
    label: 'Краснодарский край',
  },
  {
    value: 'Красноярский край',
    label: 'Красноярский край',
  },
  {
    value: 'Крымский федиральный округ',
    label: 'Крымский федиральный округ',
  },
  {
    value: 'Ленинградская область',
    label: 'Ленинградская область',
  },
  {
    value: 'Московская область',
    label: 'Московская область',
  },
  {
    value: 'Оренбургская область',
    label: 'Оренбургская область',
  },
  {
    value: 'Республика Адыгея',
    label: 'Республика Адыгея',
  },
  {
    value: 'Ростовская область',
    label: 'Ростовская область',
  },
  {
    value: 'Ставропольский край',
    label: 'Ставропольский край',
  },
];

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

export default function AreasServiceButton() {
  const [openRegion, setOpenRegion] = React.useState(false);
  const [openCity, setOpenCity] = React.useState(false);
  const [currency, setCurrency] = React.useState('Выберите регион');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const handleClickOpen = () => {
    setOpenRegion(true);
  };

  const handleClose = () => {
    setOpenRegion(false);
  };

  const handleClickOpenCity = () => {
    setOpenCity(true);
  };

  const handleCloseCity = () => {
    setOpenCity(false);
  };

  return (
    <div className={styles.modalSection}>
      <MyButton variant="outlined" onClick={handleClickOpen}>
        Добавить регион
      </MyButton>
      <MyButton variant="outlined" onClick={handleClickOpenCity}>
        Добавить город 
      </MyButton>
      <Dialog open={openRegion} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Добавить регион</DialogTitle>
        <DialogContent>
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
          <MyButton onClick={handleClose}>
            Добавить
          </MyButton>
          <MyButton onClick={handleClose}>
            Закрыть
          </MyButton>
        </DialogActions>
      </Dialog>
      <Dialog open={openCity} onClose={handleCloseCity} aria-labelledby="form-dialog-title">
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
      </Dialog>
    </div>
  );
}