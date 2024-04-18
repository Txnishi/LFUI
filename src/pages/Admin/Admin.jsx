import React from "react";
import css from './Admin.module.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1a73e8',
        },
        background: {
            default: '#121212',
        },
    },
});

const AdminPage = () => {


    return (
        <div className={`${css.mainContainer}`}>

            <div className={`${css.container}  grey-container`} >
                {/* <div className={`${css.customButton}`}>
                    <span><button className={`${css.train}`}>Training</button></span>
                </div> */}
                <img height="110px" src="/npcl.png" alt="npcl image admin" />
                <ThemeProvider theme={theme}>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker
                                label={'From'}
                                views={['year', 'month', 'day']}
                            />
                            <DatePicker
                                label={'To'}
                                views={['year', 'month', 'day']}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </ThemeProvider>
                <div className={`${css.customButton}`}>
                    <span><button className={`${css.pred}`}>Prediction</button></span>
                </div>

            </div>
            <div className={`${css.container}  grey-container`} >

                <img height="120px" src="/jd_logo.png" alt="jdvvnl logo admin" />
                <ThemeProvider theme={theme}>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker
                                label={'From'}
                                views={['year', 'month', 'day']}
                            />
                            <DatePicker
                                label={'To'}
                                views={['year', 'month', 'day']}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </ThemeProvider>
                <div className={`${css.customButton}`}>
                    <span><button className={`${css.pred}`}>Prediction</button></span>
                </div>

            </div>
        </div>
    )
}
export default AdminPage