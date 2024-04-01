import axios from "axios";

export const getDailyChartData = async (selectedOptionId, value) => {
    try {
        const res = await axios.get(`http://13.127.57.185:5000/getPredDataDaily?id=${selectedOptionId}&date=${value}`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const getMonthlyChartData = async (selectedOptionId, value) => {
    try {
        const res = await axios.get(`http://13.127.57.185:5000/getPredDataMonthly?id=${selectedOptionId}&date=${value}`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const getJdvnlDailyChartData = async (selectedOptionId, value) => {
    try {
        const res = await axios.get(`http://13.127.57.185:5000/getPredDataDaily?id=${selectedOptionId}&date=${value}`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const getJdvnlMonthlyChartData = async (selectedOptionId, value) => {
    try {
        const res = await axios.get(`http://13.127.57.185:5000/getPredDataMonthly?id=${selectedOptionId}&date=${value}`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};



// export default getChartData;