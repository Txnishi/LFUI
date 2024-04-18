import { useState, useEffect, useRef } from 'react';
import css from './Statistics.module.css';
import './select.css';
import StatisticsChart from '../StatisticsChart/StatisticsChart'
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { postJdvnlCircleData, postJdvnlSensorList, postJdvnlDailyChartData } from '../../data/ChartData';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


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



const JdvvnlStatistics = ({ handleData, label }) => {

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [circleOption, setCircleOption] = useState([]);
  const [selectedCircle, setSelectedCircle] = useState('');
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


  //Chart Data
  useEffect(() => {

    const fetchData = async () => {
      console.log("FETCH=========================================================")
      try {

        const collectedData = await postJdvnlDailyChartData(selectedOption, dateValue);

        console.log("COLLECTED DATA ", collectedData);

        setPredDailyDemand(collectedData.pred_max_value);
        setPredMaxHour(collectedData.pred_max_hour);
        setPredDailySum(collectedData.pred_daily_sum);

        setActualDailyDemand(collectedData.actual_max_value);
        setActualMaxHour(collectedData.actual_max_hour);
        setActualDailySum(collectedData.actual_daily_sum);

        console.log("chartData")


        if (collectedData === "NULL") {
          return;
        }

        if (collectedData.data) {

          const ActData = collectedData.data.actual_data.map((data) => data.consumed_unit);
          const PredData = collectedData.data.predicted_data.map((data) => data.consumed_unit);
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
            amount: collectedData.actual_daily_sum,
          },
          {
            title: "Total Predicted kWh",
            change: 18,
            amount: collectedData.pred_daily_sum,
          },
          {
            title: "Max Demand(Actual)",
            change: -14,
            amount: collectedData.actual_max_value,
            hour: collectedData.actual_max_hour + 'hh',
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

    }

    if (selectedOption && label) {
      setChartKey(`${selectedOption}-${dateValue}-${label}-${monthValue}`);
      fetchData();
    }

  }, [selectedCircle, selectedOption, value, label]);


  //Circle Data
  useEffect(() => {

    const circleData = async () => {
      try {
        const circleInfo = await postJdvnlCircleData();
        console.log("circle")

        if (circleInfo) {
          setCircleOption(circleInfo.circleList);
          if (!selectedCircle) {
            setSelectedCircle(Object.keys(circleInfo.circleList)[0]);
          }
        }


      } catch (error) {
        console.error('Error fetching circle data:', error);
      }
    };

    circleData();
  }, []);


  //Sensor Data
  useEffect(() => {

    const sensorData = async () => {
      try {
        const ans = await postJdvnlSensorList(selectedCircle);
        console.log("first")

        const gotData = ans.sensorList;

        console.log("jdvvnl sensor data = ", gotData);

        if (gotData) {
          console.log("ON")
          const formattedOptions = gotData.map((sensor) => ({
            label: sensor.name,
            value: sensor.id,
          }));
          setOptions(formattedOptions);
          setSelectedOption('');
          setUomData('');
          console.log("selected option", selectedOption);
        }
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    if (selectedCircle) {
      sensorData();
    }

    if (selectedOption !== '') {
      fetchUomData(selectedOption);
    }

    console.log(monthValue);
    console.log(dateValue);
    console.log("+++++++++++++++++++++++++++++++++")

  }, [selectedCircle]);

  const fetchUomData = (selectedOption) => {
    const foundOption = options.find(option => option['id'] === selectedOption);

    if (foundOption) {
      setUomData(foundOption['UOM']);
      console.log(foundOption['UOM']);
    }
  };

  const handleCircleSelectChange = (event) => {
    const newSelectedCircle = event.target.value;
    setSelectedCircle(newSelectedCircle);
  };


  const handleSelectChange = (newOption) => {
    setSelectedOption(newOption);
  };


  return (
    <div className={`${css.container} theme-container`}>
      <span className={css.title}>Overview Statistics</span>

      <div className={`${css.cards} grey-container`}>
        <div>
          <div id="circleSelection" className={css.card}>
            <select value={selectedCircle} onChange={handleCircleSelectChange}>
              {Object.entries(circleOption).map(([circleId, circleName]) => (
                <option key={circleId} value={circleId}>
                  {circleName}
                </option>
              ))}
            </select>
          </div>

          <div className={css.card}>
            <Select
              components={makeAnimated()}
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
              placeholder="Select Sensor"
              className="dropdown"
              classNamePrefix="select"
              isClearable
              isSearchable

            />
          </div>

          {/* <div className={css.card}>

            <select id="dynamicSelect" value={selectedOption} onChange={handleSelectChange}>
              <option value="" disabled hidden>Select Sensor</option>
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div> */}

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



        </div>

      </div>



      <div >
        <StatisticsChart
          lab={label}
          uom={uomData}
          actualData={actualData}
          predictedData={predictedData}
          chartTime={chartTime}
          chartKey={chartKey}
        />
        <p className={`${css.chartTitle}`}>Actual V/S Prediction</p>
      </div>

    </div>
  )
}

export default JdvvnlStatistics