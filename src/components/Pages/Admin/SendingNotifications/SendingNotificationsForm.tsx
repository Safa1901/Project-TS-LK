import React from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// // import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

//стили
import styles from './styles/container.module.scss'
import { styled  } from '@material-ui/core/styles';


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
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClickOpen = () => {
    setOpenRegion(true);
  };

  const handleClose = () => {
    setOpenRegion(false);
  };

  return (
    <div className={styles.modalSection}>


    <Card variant="outlined" sx={{ maxWidth: 500 }}>
      <Box sx={{ p: 2 }}>
        {/* <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            Toothbrush
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            $4.50
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography> */}
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Название"
          type="email"
          fullWidth
          // variant="standard"
        />
        <TextField
          id="outlined-textarea"
          label="Текст уведомления:"
          // placeholder="Placeholder"
          multiline
          fullWidth
          margin="dense"
        />
        <TextField
          id="outlined-textarea"
          label="Номера телефонов (каждый с новой строки):"
          // placeholder="Placeholder"
          multiline
          fullWidth
          margin="dense"
        />
        <FormControlLabel required control={<Checkbox />} label="Отправить всем пользователям" />
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <MyButton onClick={handleClose}>
          Отправить
        </MyButton>
      </Box>
    </Card>
      {/* <MyButton variant="outlined" onClick={handleClickOpen}>
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
       <DialogContent>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Отправить всем пользователям"
        />
       </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}