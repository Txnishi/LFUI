import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'
import { color } from 'three/examples/jsm/nodes/Nodes.js';



// const StatisticsChart = ({ value: dateValue, selectedOptionId: sensorId }) => {
//     const [actualData, setActualData] = useState([]);
//     const [predictedData, setPredictedData] = useState([]);

//     const [chartKey, setChartKey] = useState('');

// const date = dateValue;
// const senId = sensorId;




// const chartData = async() => {

//     const collectedData = await axios.get(
//         // `http://13.127.57.185:5000/getPredData?id=5f718c439c7a78.65267835&date=${date}`
//         `http://13.127.57.185:5000/getPredDataHourly?id=${senId}&date=${date}`
//     );

//     const collectedData = collectedData.data.data;
//         console.log(collectedData)

//     const actualData = collectedData.actual_data.map((data)=> {
//         return data.act_kwh;
//     });

//     console.log("actualData",actualData)
//     setActualData(actualData);


//     const predictedData = collectedData.predicted_data.map((data)=>{
//         return data.pre_kwh;
//     });
//     console.log("prediectData",predictedData);
//     setPredictedData(predictedData);

// } 

// useEffect(() =>{
//     chartData();
// }, [senId, date]);


// useEffect(() => {
//     const chartData = async () => {
//         try {
//             const collectedData = await axios.get(`http://13.127.57.185:5000/getPredDataHourly?id=${senId}&date=${date}`);
//             const collectedData = collectedData.data.data;
//             const actualData = collectedData.actual_data.map((data) => data.act_kwh);
//             const predictedData = collectedData.predicted_data.map((data) => data.pre_kwh);
//             setActualData(actualData);
//             setPredictedData(predictedData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     chartData();
//     // Update the chart key whenever selectedOptionId or dateValue changes
//     setChartKey(`${senId}-${date}`);
// }, [date, senId]);/







const StatisticsChart = ({ lab, uom, actualData, predictedData, chartTime, chartKey }) => {

    // const [actualData, setActualData] = useState([]);
    // const [predictedData, setPredictedData] = useState([]);


    // const [chartTime, setChartTime] = useState([]);

    console.log("chart Key", chartKey);
    console.log(actualData);

    const [actualSum, setActualSum] = useState('');
    const [actualDemand, setActualDemand] = useState('');
    const [actualTime, setActualTime] = useState('');

    const [predSum, setPredSum] = useState('');
    const [predDemand, setPredDemand] = useState('');
    const [predTime, setPredTime] = useState('');
    console.log(actualData, predictedData, chartTime);

    useEffect(() => {

        const wait = async () => {
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        wait();
    }, []);

    // useEffect(() => {
    //     console.log('Chart Data:', actualData, predictedData, chartTime);
    //     console.log('Chart Key:', chartKey);

    //     const wait = async () => {
    //         await new Promise(resolve => setTimeout(resolve, 100));
    //     }

    //     wait();
    // }, [actualData, predictedData, chartTime, chartKey]);

    // useEffect(() => {
    //     console.log('Effect is running!');
    //     console.log(selectedOptionId);
    //     const fetchData = async () => {
    //         try {
    //             const collectedData = await getChartData(selectedOptionId, value);
    //             console.log(collectedData);

    //             // const res = await axios.get(`http://13.127.57.185:5000/getPredDataHourly?id=${selectedOptionId}&date=${value}`);

    //             const actualData = collectedData.data.actual_data.map((data) => data.act_kwh);
    //             const predictedData = collectedData.data.predicted_data.map((data) => data.pre_kwh);
    //             const chartTime = collectedData.data.actual_data.map((data) => data.hour);
    //             setActualData(actualData);
    //             setPredictedData(predictedData);
    //             setChartTime(chartTime);
    //             console.log("yo");


    //             setActualSum(collectedData.actual_kwh_sum);
    //             console.log(actualSum);

    //             setActualDemand(collectedData.actual_max_value);
    //             console.log(actualDemand);

    //             setActualTime(collectedData.actual_max_hour);
    //             console.log(actualTime);


    //             setPredSum(collectedData.pred_daily_sum);
    //             console.log(predSum);

    //             setPredDemand(collectedData.pred_max_value);
    //             console.log(predDemand);

    //             setPredTime(collectedData.pred_max_hour);
    //             console.log(predTime);


    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    //     // Update the chart key whenever selectedOptionId or value changes
    //     setChartKey(`${selectedOptionId}-${value}`);
    // }, [selectedOptionId, value]);


    let xName = (lab == "Daily Summary Dashboard") ? "Hours" : ("Date");

    const option = {

        color: ['var(--orange)', 'blue'],
        animationDuration: 10000,

        toolbox: {
            feature: {
                saveAsImage: {},
            }
        },

        legend: {
            data: ['Actual Power usage', 'Predicted Power usage'],
            textStyle: {
                color: 'lavender', // Adjust the color as needed
                fontSize: 16,
                fontWeight: 540,
            },
            itemGap: 100,
        },

        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                color: 'white',
            },
            backgroundColor: "rgba(0, 0, 0, 0.89)",
            borderWidth: 0,
        },
        grid: {
            left: "5%",
            right: "4%",
            bottom: "6%",
            height: 250,

            containLabel: false,
            show: true,
        },


        xAxis: [
            {

                type: "category",
                name: xName,
                nameTextStyle: {
                    fontSize: 15, // Adjust the font size as needed
                    color: 'lavender',

                },
                axisLabel: {
                    // color: '#979A9A', // Set the color of the data values
                    color: 'lavender',
                    fontSize: 12, // Adjust the font size as needed
                },
                boundaryGap: false,
                data: chartTime,
            }

        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,
                },
                name: 'Units in ' + uom,
                nameTextStyle: {
                    fontSize: 15, // Adjust the font size as needed
                    color: 'lavender',
                },
                axisLabel: {
                    color: 'lavender', // Set the color of the data values
                    fontSize: 12, // Adjust the font size as needed
                },

            }
        ],


        series: [

            // {
            //     name: 'Line 1',
            //     type: 'line',
            //     smooth: true,
            //     showSymbol: true,
            //     lineStyle: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //             {
            //                 offset: 0,
            //                 color: "rgb(135, 206, 250)", 
            //             },
            //             {
            //                 offset: 1,
            //                 color: "rgb(70, 130, 200)" 
            //             }
            //         ]),
            //         width: 4
            //     },
            //     areaStyle: {
            //       opacity: 0.3,
            //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //         {
            //           offset: 0,
            //           color: 'rgb(128, 255, 165)'
            //         },
            //         {
            //           offset: 1,
            //           color: 'rgb(1, 191, 236)'
            //         }
            //       ])
            //     },
            //     emphasis: {
            //       focus: 'series'
            //     },
            //     data: [140, 1000, 101, 264, 200, 340, 250]
            //   },
            //   {
            //     name: 'Line 2',
            //     type: 'line',
            //     smooth: true,
            //     showSymbol: false,
            //     lineStyle: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //             {
            //                 offset: 0,
            //                 color: "rgb(255, 191, 0)",
            //             },
            //             {
            //                 offset: 1,
            //                 color: "#F450D3"
            //             }
            //         ]),
            //         width: 4
            //     },
            //     areaStyle: {
            //       opacity: 0.3,
            //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //         {
            //           offset: 0,
            //           color: 'rgb(255, 191, 0)'
            //         },
            //         {
            //             offset: 1,
            //             color: "#F450D3"
            //         }
            //       ])
            //     },
            //     emphasis: {
            //       focus: 'series'
            //     },
            //     data: [120, 282, 100, 234, 1000, 340, 310]
            //   },
            {
                name: "Actual Power usage",
                type: "line",
                smooth: true,
                color: "blue",

                label: {
                    show: true,
                    position: 'top',
                    color: '#97f0af',
                    fontSize: '16px'
                },
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                        {
                            offset: 0,
                            color: "rgb(135, 206, 250)",
                        },
                        {
                            offset: 1,
                            color: "rgb(70, 130, 180)",
                        }
                    ]),
                    width: 4
                },
                areaStyle: {
                    opacity: .5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "blue"
                        },
                        {
                            offset: 1,
                            color: "rgb(70, 130, 180, 0.1)"
                        }
                    ])
                },
                emphasis: {
                    focus: "series",
                },
                showSymbol: false,
                // data: [26000, 17500, 35000, 25000, 41000, 10000, 29000,26000, 17500, 35000, 25000, 41000, 10000, 29000,26000, 17500, 35000, 25000, 41000, 10000, 29000, 23000, 12000, 23000]
                data: actualData
            },
            {
                name: "Predicted Power usage",
                type: "line",
                smooth: true,
                label: {
                    show: true,
                    position: 'bottom',
                    color: 'white',
                    // backgroundColor: 'black',
                    fontSize: '14px'
                },
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgb(255, 191, 0)",
                        },
                        {
                            offset: 1,
                            color: "#F450D3"
                        }
                    ]),
                    width: 4
                },
                areaStyle: {
                    opacity: .5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
                        {
                            offset: 0,
                            color: "#FE4C00"
                        },
                        {
                            offset: 1,
                            color: "rgba(255,144,70,0.1)"
                        }
                    ])
                },
                emphasis: {
                    focus: "series",
                },
                showSymbol: false,
                // data: [28000, 19000, 32000, 18000, 41000, 30000, 26000,28000, 19000, 32000, 18000, 41000, 30000, 26000,28000, 19000, 32000, 18000, 41000, 30000, 26000, 19000, 34000, 29000]
                data: predictedData
            },
        ]
    }

    return (
        <ReactECharts option={option} key={chartKey} />
    )
}

export default StatisticsChart



