import React from "react";

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        }
    })
)

export const NotificationSearch = () => {
    const classes = useStyles();
    // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="№ объекта" variant="outlined" />
                <TextField id="outlined-basic" label="Телофон" variant="outlined" />
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
                    {/* <MobileDatePicker
                        label="For mobile"
                        // value={value}
                        // onChange={(newValue) => {
                        //     setValue(newValue);
                        // }}
                        // renderInput={(params) => <TextField {...params} />}
                    /> */}
                {/* </LocalizationProvider> */}
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={[
                        'DatePicker',
                        'MobileDatePicker',
                        'DesktopDatePicker',
                        'StaticDatePicker',
                        ]}
                    >
    
                        <DemoItem label="Static variant">
                            <StaticDatePicker />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider> */}
            </form>
        </div>
    )
}