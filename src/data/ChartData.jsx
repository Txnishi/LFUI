import axios from "axios";

const getChartData = async (selectedOptionId, value) => {
    try {
        const res = await axios.get(`http://13.127.57.185:5000/getPredDataDaily?id=${selectedOptionId}&date=${value}`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export default getChartData;