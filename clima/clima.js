const axios = require('axios');


const getClima = async(lat, lng) => {


    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=9beedbc65caacc53466bb433aad5d631&units=metric`)

    return respuesta.data.main.temp;

}


module.exports = {
    getClima
}