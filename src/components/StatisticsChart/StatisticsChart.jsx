import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'
import axios from "axios";

const StatisticsChart = ({value : dateValue, selectedOptionId : sensorId}) => {
    const [actualData, setActualData] = useState([]);
    const [predictedData, setPredictedData] = useState([]);

    const [chartKey, setChartKey] = useState('');

    const date = dateValue;
    const senId = sensorId;

    // const chartData = async() => {

    //     const res = await axios.get(
    //         // `http://13.127.57.185:5000/getPredData?id=5f718c439c7a78.65267835&date=${date}`
    //         `http://13.127.57.185:5000/getPredDataHourly?id=${senId}&date=${date}`
    //     );

    //     const collectedData = res.data.data;
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

    
  useEffect(() => {
    const chartData = async () => {
      try {
        const res = await axios.get(`http://13.127.57.185:5000/getPredDataHourly?id=${senId}&date=${date}`);
        const collectedData = res.data.data;
        const actualData = collectedData.actual_data.map((data) => data.act_kwh);
        const predictedData = collectedData.predicted_data.map((data) => data.pre_kwh);
        setActualData(actualData);
        setPredictedData(predictedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    chartData();
    // Update the chart key whenever selectedOptionId or dateValue changes
    setChartKey(`${senId}-${date}`);
  }, [date, senId]);

    const option = {
        color: ['var(--orange)'],
        animationDuration: 3500,
        

        toolbox: {
            feature: {
                saveAsImage: {},
            }
        },

        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            },
            backgroundColor: "rgba(0, 0, 0, 0.59)",
            borderWidth: 0,
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "7%",            
            containLabel: false,
            show: true,
        },

        xAxis: [
            {
                
                type: "category",
                name: "Hours",
                nameTextStyle: {
                    fontSize: 15, // Adjust the font size as needed
                    color: '#979A9A',
                },
                axisLabel: {
                    color: '#979A9A', // Set the color of the data values
                    fontSize: 12, // Adjust the font size as needed
                },
                boundaryGap: false,
                data: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18","19", "20", "21", "22", "23"],
            }
            
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,
                },
                name: 'Units Consumed', 
                nameTextStyle: {
                    fontSize: 15, // Adjust the font size as needed
                    color: '#979A9A',
                },
                axisLabel: {
                    color: '#979A9A', // Set the color of the data values
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
        <ReactECharts option={option} key={chartKey}
        />
    )
}

export default StatisticsChart