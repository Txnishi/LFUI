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

export const postJdvnlCircleData = async () => {
    try {
        const res = await axios.post(`http://13.127.57.185:5000/get_jdvvnlcircleList`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const postJdvnlSensorList = async (selectedCircle) => {
    try {
        const response = await axios({
            method: 'post',
            url: "http://13.127.57.185:5000/get_jdvvnlSensorList",
            data: {
                "circle_id": selectedCircle, // This is the body part
            }
        })

        return response.data;
    } catch (error) {
        console.error('Error fetching sensor list:', error);
        return null;
    }
};

export const postJdvnlDailyChartData = async (selectedOptionId, value) => {
    try {
        const response = await axios({
            method: 'post',
            url: "http://13.127.57.185:5000/getJDVVNLDailyData",
            data: {
                "id": selectedOptionId,
                "date": value
            }
        })

        return response.data;
    } catch (error) {
        console.error('Error fetching sensor list:', error);
        return null;
    }
}





// export default getChartData;