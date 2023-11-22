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

export default function CompanyDetailsModaledit() {
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
        Добавить реквизит
      </MyButton>

      <Dialog open={openRegion} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Добавить реквизит</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Префикс"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название компании"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ИНН"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="КПП"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
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
    </div>
  );
}