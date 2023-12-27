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
import getChartData from '../../data/ChartData';
import axios from "axios";
import { cardsData as initialCardsData } from '../../data/index';

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




const Statistics = ({ handleData }) => {

    const [data, setData] = useState({});
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [uomData, setUomData] = useState('');

    const [actualData, setActualData] = useState([]);
    const [predictedData, setPredictedData] = useState([]);
    const [chartKey, setChartKey] = useState('');

    const [chartTime, setChartTime] = useState([]);

    const [actualSum, setActualSum] = useState('');
    const [actualDemand, setActualDemand] = useState('');
    const [actualMaxHour, setActualMaxHour] = useState('');

    const [predSum, setPredSum] = useState('');
    const [predDemand, setPredDemand] = useState('');
    const [predMaxHour, setPredMaxHour] = useState('');



    const [value, setValue] = useState(dayjs.extend(customParseFormat));

    console.log("check");
    const month = () => {  //month variable so that its in the form of 01,02,....09,10..  and to make it 1 indexed
        const val = (value.$M + 1).toString();
        return (value.$M < 9) ? "0" + val : val;
    }
    const day = () => {
        return (value.$D < 10) ? "0" + value.$D : value.$D;
    }

    const dateValue = `${value.$y}-${month()}-${day()}`;

    const minDate = dayjs('2023-11-01');
    const maxDate = dayjs().endOf('month');

    //api integration to get sensor data 



    const sensorData = async () => {
        const ans = await axios.get(
            'http://13.127.57.185:5000/get_sensorList'
        );

        const gotData = ans.data;
        const uomData = gotData.sensorList[0]['UOM'];
        setUomData(uomData);
        console.log(gotData);

        setOptions(gotData.sensorList);
        setSelectedOption(gotData.sensorList[0]['uuid']);
    }


    const handleSelectChange = (event) => {
        console.log(event.target.value)
        setSelectedOption(event.target.value);
    };



    useEffect(() => {
        if (!selectedOption) {
            sensorData();
        }

        const fetchData = async () => {
            try {
                const collectedData = await getChartData(selectedOption, dateValue);

                console.log("yo1", collectedData);

                setPredDemand(collectedData.pred_max_value);
                setPredMaxHour(collectedData.pred_max_hour);
                setPredSum(collectedData.pred_daily_sum);

                setActualDemand(collectedData.actual_max_value);
                setActualMaxHour(collectedData.actual_max_hour);
                setActualSum(collectedData.actual_kwh_sum);

                if (collectedData.data) {

                    const ActData = collectedData.data.actual_data.map((data) => data.act_kwh);
                    const PredData = collectedData.data.predicted_data.map((data) => data.pre_kwh);
                    const ChaTime = collectedData.data.actual_data.map((data) => data.hour);
                    setActualData(ActData);
                    setPredictedData(PredData);
                    setChartTime(ChaTime);

                }

                console.log("receiving", actualSum);
                const fetchedData = [
                    {
                        title: "Total Actual kWh",
                        change: 24,
                        amount: collectedData.actual_kwh_sum,
                    },
                    {
                        title: "Max Demand(Actual)",
                        change: -14,
                        amount: collectedData.actual_max_value,
                        hour: collectedData.actual_max_hour + 'hh',
                    },
                    {
                        title: "Total Predicted kWh",
                        change: 18,
                        amount: collectedData.pred_daily_sum,
                    },
                    {
                        title: "Max Demand(Predicted)",
                        change: 18,
                        amount: collectedData.pred_max_value,
                        hour: collectedData.pred_max_hour + 'hh',
                    },
                ]

                handleData(fetchedData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // const fetchDataWithDelay = () => {
        //     setTimeout(() => {
        //         fetchData();
        //     }, 5); // 1000 milliseconds = 1 second
        // };

        if (selectedOption) {
            setChartKey(`${selectedOption}-${dateValue}`);
            fetchData();
            // console.log("fetching", fetchedData);
            // setData(
            //     [
            //         {
            //             title: "Total Actual kWh",
            //             change: 24,
            //             amount: actualSum,
            //         },
            //         {
            //             title: "Max Demand(Actual)",
            //             change: -14,
            //             amount: actualDemand,
            //         },
            //         {
            //             title: "Total Predicted kWh",
            //             change: 18,
            //             amount: predSum,
            //         },
            //         {
            //             title: "Max Demand(Predicted)",
            //             change: 18,
            //             amount: predDemand,
            //         },
            //     ]
            // );
            // handleData(fetchedData);
        }
        // Update the chart key whenever selectedOptionId or value changes
    }, [selectedOption, dateValue]);

    // useEffect(() => {
    //     // [{
    //     //     actualSum,
    //     //      predSum,
    //     //       predDemand, predMaxHour, actualDemand, actualMaxHour]);
    //     // console.log("yooooooo", actualSum, predSum, predDemand, predMaxHour, actualDemand, actualMaxHour, "poooo");
    // }, [actualSum]);

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
                                minDate={minDate}
                                maxDate={maxDate}
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
                <StatisticsChart uom={uomData} actualData={actualData} predictedData={predictedData} chartTime={chartTime} chartKey={chartKey} />
                <p className={`${css.chartTitle}`}>Actual V/S Prediction {uomData}</p>
            </div>

        </div>
    )
}

export default Statistics