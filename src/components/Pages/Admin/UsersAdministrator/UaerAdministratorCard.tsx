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
  width: 250,
  height: 55,
  fontSize: 15,
  fontWeight: 500,
  textTransform: 'none',
  borderColor: '#CED2DC',
  border: 'solid 1px',
  marginTop: 7,
  marginRight: 10,
  marginLeft: 10,
  color: '#212529',
  marginBottom: 10,
})

export default function UaerAdministratorCard() {
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
        <Card variant="outlined" sx={{ maxWidth: '100%' }}>
            <Box sx={{ p: 2 }}>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="ФИО администратора которого надо заменить"
                    type="email"
                    sx={{width: '33%', marginRight: 1}}
                    // fullWidth
                    // variant="standard"
                />
                <TextField
                    id="outlined-textarea"
                    label="ФИО администратора на которого меняем"
                    // placeholder="Placeholder"
                    multiline
                    // fullWidth
                    sx={{width: '33%'}}
                    margin="dense"
                />
                <MyButton onClick={handleClose}>
                    Заменить администратора
                </MyButton>
            </Box>

        </Card>
    </div>
  );
}