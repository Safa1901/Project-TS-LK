import React from "react";
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';
import Checkbox from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);



export const PultsTable = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const [checkeded, setCheckeded] = React.useState(true);

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleChangeCheck2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckeded(event.target.checked);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

    return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Дескриптор</th>
                <th>Хост</th>
                <th>Порт</th>
                <th>БД</th>
                <th>Имя пользователя</th>
                <th>Пароль</th>
                <th>Тип</th>
                <th>Код для управления</th>
                <th>Сихронизация доступна</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FormControl className={classes.margin}>
                      <InputLabel htmlFor="demo-customized-textbox">Название</InputLabel>
                      <BootstrapInput id="demo-customized-textbox" />
                  </FormControl>
                </td>
                <td>
                  <p>krd_phoenix</p>
                </td>
                <td>
                  <FormControl className={classes.margin}>
                      <InputLabel htmlFor="demo-customized-textbox">Название</InputLabel>
                      <BootstrapInput id="demo-customized-textbox" />
                  </FormControl>
                </td>
                <td>
                  <FormControl className={classes.margin}>
                      <InputLabel htmlFor="demo-customized-textbox">Название</InputLabel>
                      <BootstrapInput id="demo-customized-textbox" />
                  </FormControl>
                </td>
                <td>
                  <FormControl className={classes.margin}>
                      <InputLabel htmlFor="demo-customized-textbox">Название</InputLabel>
                      <BootstrapInput id="demo-customized-textbox" />
                  </FormControl>
                </td>
                <td>
                  <FormControl className={classes.margin}>
                      <InputLabel htmlFor="demo-customized-textbox">Название</InputLabel>
                      <BootstrapInput id="demo-customized-textbox" />
                  </FormControl>
                </td>
                <td>
                  <FormControl className={classes.margin}>
                      <InputLabel htmlFor="demo-customized-textbox">Название</InputLabel>
                      <BootstrapInput id="demo-customized-textbox" />
                  </FormControl>
                </td>
                <td>
                  <FormControl className={classes.margin}>
                  <InputLabel htmlFor="demo-customized-select-native">Тип системы</InputLabel>
                    <NativeSelect
                      id="demo-customized-select-native"
                      value={age}
                      onChange={handleChange}
                      input={<BootstrapInput />}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>pheonex</option>
                      <option value={20}>andromeda</option>
                      <option value={30}>mirage</option>
                    </NativeSelect>
                  </FormControl>
                </td>
                <td>
                  <FormControl className={classes.margin}>
                    <Checkbox
                      checked={checked}
                      onChange={handleChangeCheck}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </FormControl>
                </td>
                <td>
                  <FormControl className={classes.margin}>
                    <Checkbox
                        checked={checkeded}
                        onChange={handleChangeCheck2}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                  </FormControl>
                </td>
                <td>
                    <ClearIcon/>
                    <SaveIcon/>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
    )
}