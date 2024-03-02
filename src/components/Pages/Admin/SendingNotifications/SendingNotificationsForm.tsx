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

export default function SendingNotificationsForm() {
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

      <Dialog 
        open={openRegion} 
        onClose={handleClose}
      >
        <DialogTitle id="form-dialog-title">Название</DialogTitle>
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
            autoFocus
            margin="dense"
            id="text"
            label="Текст уведомления:"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Номера телефонов (каждый с новой строки):"
            type="email"
            fullWidth
          />
        </DialogContent>
       
        <DialogActions>
          <MyButton onClick={handleClose}>
            Отправить
          </MyButton>
          <MyButton type="submit">Subscribe</MyButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}