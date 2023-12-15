import { useState, useEffect } from 'react';
import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'
import { SlCalender } from "react-icons/sl";
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from "axios";

dayjs.extend(customParseFormat);


const theme = createTheme({
    palette: {
        mode: 'dark', // Set the theme mode to dark
        primary: {
            main: '#1a73e8',
        },
        background: {
            default: '#121212', // Adjust the background color for dark theme
        },
    },
});


const Statistics = () => {

    const [value, setValue] = useState(dayjs.extend(customParseFormat));
    const month = () => {  //month variable so that its in the form of 01,02,....09,10..  and to make it 1 indexed
        const val = (value.$M + 1).toString();
        return (value.$M < 9) ? "0" + val : val;
    }
    const day = () => {
        return (value.$D < 10) ? "0" + value.$D : value.$D;
    }

    //api integration to get sensor data 

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [uomData, setUomData] = useState('');

    const sensorData = async () => {
        const ans = await axios.get(
            'http://13.127.57.185:5000/get_sensorList'
        );

        const gotData = ans.data;
        const uomData = gotData.sensorList[0]['UOM'];
        setUomData(uomData);
        console.log(gotData);

        console.log("sensorId", gotData.sensorList);
        console.log("sensor", gotData.sensorList[0]['uuid'])


        setOptions(gotData.sensorList);
        setSelectedOption(gotData.sensorList[0]['uuid']);
    }


    const handleSelectChange = (event) => {
        console.log(event.target.value)
        setSelectedOption(event.target.value);
    };


    useEffect(() => {
        sensorData();
    }, []);

    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Overview Statistics</span>

            <div className={`${css.cards} grey-container`}>
                <div>

                    {/* <div className={css.card}>
                        <select>
                            <option value="1">sensor 1</option>
                            <option value="2">sensor 2</option>
                        </select>
                    </div> */}
                    <div className={css.card}>
                        <select id="dynamicSelect" value={selectedOption} onChange={handleSelectChange}>
                            {/* <option value="">Select Sensor</option> */}
                            {options.map((option) => (
                                <option value={option.uuid}>
                                    {option.sensorName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* <div className={css.card}> */}

                    <ThemeProvider theme={theme}>

                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                className={`${css.datePicker}`}
                                format="DD-MM-YYYY"
                            />
                        </LocalizationProvider>
                    </ThemeProvider>



                    {/* </div> */}
                    {/* 
                    <div className={css.arrowIcon}>
                        <SlCalender />
                    </div>
                    <div>
                        <span>Top item this month</span><span>Office comps</span>
                    </div> */}

                </div>

                {/* <div className={css.card}>
                    <span>Items</span><span>$ {groupNumber(455)}</span>
                </div> */}


                {/* <div className={css.card}>
                    <span>Sensor </span><span>$ {groupNumber(2000)}</span>
                </div> */}
            </div>



            <div >
                <StatisticsChart uom={uomData} selectedOptionId={selectedOption} value={`${value.$y}-${month()}-${day()}`} />
                <p className={`${css.chartTitle}`}>Actual V/S Prediction {uomData}</p>
            </div>

        </div>
    )
}

export default Statistics