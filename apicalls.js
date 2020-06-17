const axios = require('axios');

const getData = async(url) => {
    try {
        const response = await axios.get(url)
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.log(error);
        console.log(error.response.body);
    }
}

exports.getData = getData;