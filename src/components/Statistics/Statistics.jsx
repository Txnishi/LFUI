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
import { getDailyChartData, getMonthlyChartData } from '../../data/ChartData';
// import { getJdvnlDailyChartData } from '../../data/ChartData';
import axios from "axios";
import { cardsData as initialCardsData } from '../../data/index';

dayjs.extend(customParseFormat);


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




const Statistics = ({ handleData, label }) => {

    const [data, setData] = useState({});
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    // const [circleOption, setCircleOption] = useState([]);
    // const [selectedCircle, setSelectedCircle] = useState('');
    const [uomData, setUomData] = useState('');

    const [actualData, setActualData] = useState([]);
    const [predictedData, setPredictedData] = useState([]);
    const [chartKey, setChartKey] = useState('');

    const [chartTime, setChartTime] = useState([]);

    const [actualDailySum, setActualDailySum] = useState('');
    const [actualDailyDemand, setActualDailyDemand] = useState('');
    const [actualMaxHour, setActualMaxHour] = useState('');

    const [predDailySum, setPredDailySum] = useState('');
    const [predDailyDemand, setPredDailyDemand] = useState('');
    const [predMaxHour, setPredMaxHour] = useState('');


    const [actMonthlySum, setActMonthlySum] = useState('');
    const [actMaxDate, setActMaxDate] = useState('');
    const [actMonthlyMaxDemand, setActMonthlyMaxDemand] = useState('');

    const [predMonthlySum, setPredMonthlySum] = useState('');
    const [predMaxDate, setPredMaxDate] = useState('');
    const [predMonthlyMaxDemand, setPredMonthlyMaxDemand] = useState('');

    // const [value, setValue] = useState(dayjs.extend(customParseFormat));

    const month = () => {  //month variable so that its in the form of 01,02,....09,10..  and to make it 1 indexed
        const val = (value.$M + 1).toString();
        return (value.$M < 9) ? "0" + val : val;
    }
    const day = () => {
        return (value.$D < 10) ? "0" + value.$D : value.$D;
    }

    // const dateValue = `${value.$y}-${month()}-${day()}`;

    // const monthValue = `${value.$y}-${month()}`;

    const [value, setValue] = useState(() => dayjs().subtract(1, 'month').startOf('month'));

    console.log('picked date value = ', value);

    const dateValue = value.format('YYYY-MM-DD');
    const monthValue = value.format('YYYY-MM');

    const minDate = dayjs('2023-11-01');
    const maxDate = dayjs().endOf('month');

    const minMonthDate = dayjs('2023-11');



    // const circleData = async () => {
    //     try {

    //         const circleInfo = await postJdvnlCircleData();
    //         console.log("circle")

    //         if (circleInfo) {

    //             setCircleOption(circleInfo.circleList);
    //             setSelectedCircle(Object.keys(circleInfo.circleList)[0]);
    //             console.log(selectedCircle);
    //         }


    //     } catch (error) {
    //         console.error('Error fetching circle data:', error);
    //     }
    // };



    const sensorData = async () => {
        try {
            // if (selectedDashboard === 'npcldashboard') {
            //     ans = await axios.get('http://13.127.57.185:5000/get_sensorList');
            //     console.log("ans => ", ans.data.data)

            // } else {
            //     ans = await axios.get('http://13.127.57.185:5000/get_jdvvnlSensorList');
            // }

            const ans = await axios.get('http://13.127.57.185:5000/get_sensorList');


            const gotData = ans.data;

            if (gotData && gotData.sensorList && gotData.sensorList.length > 0) {
                const uomData = gotData.sensorList[0]['UOM'];
                setUomData(uomData);
                console.log("sensor data ", gotData);

                setOptions(gotData.sensorList);
                setSelectedOption(gotData.sensorList[0]['uuid']);
            }
        } catch (error) {
            console.error('Error fetching sensor data:', error);
        }
    };

    const fetchUomData = (selectedOption) => {
        const foundOption = options.find(option => option['uuid'] === selectedOption);

        if (foundOption) {
            setUomData(foundOption['UOM']);
            console.log(foundOption['UOM']);
        }
    };

    const handleSelectChange = (event) => {
        const newSelectedOption = event.target.value;
        setSelectedOption(newSelectedOption);
    };


    useEffect(() => {
        // circleData();
        if (!selectedOption) {
            sensorData();
        }

        if (selectedOption !== null) {
            fetchUomData(selectedOption);
        }

        console.log(monthValue);
        console.log(dateValue);

        const fetchData = async () => {
            try {

                let collectedData = "NULL";


                if (label == "Daily Summary Dashboard") {
                    collectedData = await getDailyChartData(selectedOption, dateValue);

                    setPredDailyDemand(collectedData.pred_max_value);
                    setPredMaxHour(collectedData.pred_max_hour);
                    setPredDailySum(collectedData.pred_daily_sum);

                    setActualDailyDemand(collectedData.actual_max_value);
                    setActualMaxHour(collectedData.actual_max_hour);
                    setActualDailySum(collectedData.actual_daily_sum);
                } else {
                    collectedData = await getMonthlyChartData(selectedOption, monthValue);

                    setPredMonthlyMaxDemand(collectedData.pred_max_date_value);
                    setPredMaxDate(collectedData.pred_max_date);
                    setPredMonthlySum(collectedData.pred_monthly_sum);

                    setActMaxDate(collectedData.act_max_date);
                    setActMonthlyMaxDemand(collectedData.act_max_date_value);
                    setActMonthlySum(collectedData.act_monthly_sum);


                    //JdvVNL
                    // if (label == "Daily Summary Dashboard") {
                    //     collectedData = await getJdvnlDailyChartData(selectedOption, dateValue);

                    //     setPredDailyDemand(collectedData.pred_max_value);
                    //     setPredMaxHour(collectedData.pred_max_hour);
                    //     setPredDailySum(collectedData.pred_daily_sum);

                    //     setActualDailyDemand(collectedData.actual_max_value);
                    //     setActualMaxHour(collectedData.actual_max_hour);
                    //     setActualDailySum(collectedData.actual_daily_sum);
                    // } else {
                    //     collectedData = await getMonthlyChartData(selectedOption, monthValue);

                    //     setPredMonthlyMaxDemand(collectedData.pred_max_date_value);
                    //     setPredMaxDate(collectedData.pred_max_date);
                    //     setPredMonthlySum(collectedData.pred_monthly_sum);

                    //     setActMaxDate(collectedData.act_max_date);
                    //     setActMonthlyMaxDemand(collectedData.act_max_date_value);
                    //     setActMonthlySum(collectedData.act_monthly_sum);
                    // }
                    console.log("chartData")
                }

                if (collectedData === "NULL") {
                    return;
                }



                if (collectedData.data) {

                    const ActData = collectedData.data.actual_data.map((data) => data.act_kwh);
                    const PredData = collectedData.data.predicted_data.map((data) => data.pre_kwh);
                    const ChaTime = collectedData.data.actual_data.map((data) => data.clock);
                    setActualData(ActData);
                    setPredictedData(PredData);
                    setChartTime(ChaTime);

                }

                console.log("receiving", actualDailySum);




                const fetchedData = [
                    {
                        title: "Total Actual kWh",
                        change: 24,
                        amount: collectedData.actual_daily_sum || collectedData.act_monthly_sum,
                    },
                    {
                        title: "Total Predicted kWh",
                        change: 18,
                        amount: collectedData.pred_daily_sum || collectedData.pred_monthly_sum,
                    },
                    {
                        title: "Max Demand(Actual)",
                        change: -14,
                        amount: collectedData.actual_max_value || collectedData.act_max_date_value,
                        hour: collectedData.act_max_date || collectedData.actual_max_hour + 'hh',
                    },
                    {
                        title: "Max Demand(Predicted)",
                        change: 18,
                        amount: collectedData.pred_max_value || collectedData.pred_max_date_value,
                        hour: collectedData.pred_max_date || collectedData.pred_max_hour + 'hh',
                    },
                ]

                handleData(fetchedData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        if (selectedOption || label) {
            setChartKey(`${selectedOption}-${dateValue}-${label}-${monthValue}`);
            fetchData();
        }

    }, [selectedOption, options, dateValue, monthValue, label]);



    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Overview Statistics</span>

            <div className={`${css.cards} grey-container`}>
                <div>

                    {/* {selectedDashboard === 'jdvvnldashboard' && (
                        <div id="circleSelection" className={css.card}>
                            <select value={selectedCircle} onChange={(e) => setSelectedCircle(e.target.value)}>
                                {Object.entries(circleOption).map(([circleId, circleName]) => (
                                    <option key={circleId} value={circleId}>
                                        {circleName}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )} */}
                    <div className={css.card}>
                        <select id="dynamicSelect" value={selectedOption} onChange={handleSelectChange}>
                            {/* <option value="">Select Sensor</option> */}
                            {options.map((option) => (
                                <option key={option.uuid} value={option.uuid}>
                                    {option.sensorName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={`${css.card} ${css.datePickerContainer}`}>

                        <ThemeProvider theme={theme}>

                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                {(label == 'Daily Summary Dashboard') ?
                                    (<DatePicker
                                        views={['year', 'month', 'day']}
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                        className={`${css.datePicker}`}
                                        minDate={minDate}
                                        maxDate={maxDate}
                                        format="DD-MM-YYYY"
                                    />) : (
                                        <DatePicker
                                            views={['month', 'year']}
                                            value={value}
                                            onChange={(newValue) => setValue(newValue)}
                                            maxDate={maxDate}
                                            className={`${css.datePicker}`}
                                            minDate={minMonthDate}
                                        />)
                                }
                            </LocalizationProvider>
                        </ThemeProvider>

                    </div>

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
                <StatisticsChart lab={label} uom={uomData} actualData={actualData} predictedData={predictedData} chartTime={chartTime} chartKey={chartKey} />
                <p className={`${css.chartTitle}`}>Actual V/S Prediction</p>
            </div>

        </div>
    )
}

export default Statistics