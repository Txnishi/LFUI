import css from './Experiment.module.css'
import dayjs, { Dayjs } from 'dayjs';
import { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import customParseFormat from "dayjs/plugin/customParseFormat";
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart';
import axios from "axios";

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

const Experiment = () => {

    const [chartKey, setChartKey] = useState('');
    let [chartsArray, setChartsArray] = useState([]);
    const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
    let [selectedNumber, setSelectedNumber] = useState('1');

    // const [value, setValue] = useState(dayjs.extend(customParseFormat));

    // const month = () => {  //month variable so that its in the form of 01,02,....09,10..  and to make it 1 indexed
    //     const val = (value.$M + 1).toString();
    //     return (value.$M < 9) ? "0" + val : val;
    // }
    // const day = () => {
    //     return (value.$D < 10) ? "0" + value.$D : value.$D;
    // }

    // console.log("picked date value = ", value);

    // let dateValue = `${value.$y}-${month()}-${day()}`;

    // const defaultDate = dayjs().startOf('month');

    const [value, setValue] = useState(() => dayjs().subtract(1, 'month').date(1).startOf('month'));
    let dateValue = value.format('YYYY-MM-DD');

    const minDate = dayjs('2023-11-01');
    const maxDate = dayjs().endOf('month');

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [uomData, setUomData] = useState('');


    const [actualDailySum, setActualDailySum] = useState('');
    const [actualDailyDemand, setActualDailyDemand] = useState('');
    const [actualMaxHour, setActualMaxHour] = useState('');

    const [predDailySum, setPredDailySum] = useState('');
    const [predDailyDemand, setPredDailyDemand] = useState('');
    const [predMaxHour, setPredMaxHour] = useState('');

    const [actData, setActData] = useState([]);
    const [predData, setPredData] = useState([]);
    const [chaTime, setChaTime] = useState([]);

    const sensorData = async () => {
        try {
            const ans = await axios.get('http://13.127.57.185:5000/get_sensorList');
            const gotData = ans.data;

            if (gotData && gotData.sensorList && gotData.sensorList.length > 0) {
                const uomData = gotData.sensorList[0]['UOM'];
                setUomData(uomData);

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

    const handleSelectChange = (event, selectType) => {

        const newSelectedValue = event.target.value;

        if (selectType === 'number') {

            setSelectedNumber(newSelectedValue);

        } else if (selectType === 'sensor') {

            setSelectedOption(newSelectedValue);
            fetchUomData(newSelectedValue);
        }
    };

    useEffect(() => {

        //fetching Daily APIs

        const fetchData = async () => {
            try {
                let newChartsArray = [];
                for (let i = 0; i < selectedNumber; i++) {

                    let num = i;
                    let res;

                    // console.log(i, selectedNumber);
                    if (i === 0) {

                        dateValue = value.format('YYYY-MM-DD');
                        console.log("1st api");
                        res = await axios.get(`http://13.127.57.185:5000/getPredDataDaily?id=${selectedOption}&date=${dateValue}`);
                        console.log(`http://13.127.57.185:5000/getPredDataDaily?id=${selectedOption}&date=${dateValue}`);
                    } else {
                        console.log("2nd api");
                        console.log(dateValue)
                        res = await axios.get(`http://13.127.57.185:5000/getPredDataDaily${num}?id=${selectedOption}&date=${dateValue}`);
                        console.log(`http://13.127.57.185:5000/getPredDataDaily${num}?id=${selectedOption}&date=${dateValue}`);
                    }

                    const collectedData = res.data;

                    if (collectedData.data) {

                        const actDataArr = collectedData.data.actual_data.map((data) => data.act_kwh);
                        const predDataArr = collectedData.data.predicted_data.map((data) => data.pre_kwh);
                        const chaTimeArr = collectedData.data.actual_data.map((data) => data.clock);
                        newChartsArray.push({ actData: actDataArr, predData: predDataArr, chaTime: chaTimeArr });

                    }


                    console.log("receiving", actualDailySum);



                    if (collectedData === "NULL") {
                        return;
                    }
                };

                setChartsArray(newChartsArray)
                console.log("chartArray = ", chartsArray);

            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }

        // fetchData().then((chartsArray) => {
        //     console.log("huuuuuuu " + chartsArray);
        // });


        if (!selectedOption) {
            sensorData();
        }
        if (selectedOption !== null) {
            fetchUomData(selectedOption);
        }

        setChartKey(`${selectedOption}-${dateValue}`);

        fetchData();


    }, [selectedOption, dateValue, options, selectedNumber])




    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Experimental Statistics</span>

            {/* select number of charts */}
            <div className={`${css.cards} grey-container`}>

                <div className={css.card}>
                    <select id="numberSelect" value={selectedNumber} onChange={(e) => handleSelectChange(e, 'number')}>
                        {numbers.map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </div>

                {/* selecting sensor id */}
                <div className={css.card}>
                    <select id="dynamicSelect" value={selectedOption} onChange={(e) => handleSelectChange(e, 'sensor')}>
                        {options.map((option) => (
                            <option value={option.uuid}>
                                {option.sensorName}
                            </option>
                        ))}
                    </select>
                </div>

                {/* date picker mui  */}

                <div className={`${css.card} ${css.datePickerContainer}`}>

                    <ThemeProvider theme={theme}>

                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker
                                views={['year', 'month', 'day']}
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                className={`${css.datePicker}`}
                                minDate={minDate}
                                maxDate={maxDate}
                                format="DD-MM-YYYY"
                            />

                        </LocalizationProvider>
                    </ThemeProvider>

                </div>

            </div>

            {/* Iterate through chartsArray and render StatisticsChart component */}
            <div className={css.graph}>
                {chartsArray.map((chartData, index) => (
                    <div className={css.graph} key={index}>
                        <p>Experiment {index + 1}</p>
                        <StatisticsChart
                            lab={"Daily Summary Dashboard"}
                            uom={"KWH"}
                            actualData={chartData.actData}
                            predictedData={chartData.predData}
                            chartTime={chartData.chaTime}
                            chartKey={chartKey}
                        />
                    </div>
                ))}
            </div>


        </div>
    )
}
export default Experiment