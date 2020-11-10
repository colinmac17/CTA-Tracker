import axios from 'axios';
/**
 * Add your REACT_APP_CTA_API_KEY to a .env file in the root of the project
 * React scripts automatcially includes .env vars into the proceess when prepended with REACT_APP_
 * Example:
 * REACT_APP_CTA_API_KEY=2434324fdfdsgdgddsfdsfndjfsd9
 */

const CTA_API_KEY = process.env.REACT_APP_CTA_API_KEY;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const CTA_BUS_API_KEY = process.env.REACT_APP_CTA_BUS_API_KEY;

/**
 * Utilize Cors anywhere to avoid CORS errors - @see https://cors-anywhere.herokuapp.com/
 * Example request to hardcoded mapid (update thi)
 * Look at console.log result to see data we get back
 * We can add the other API Urls here for other endpoints and export them
 */
const CORS_EVERYWHERE_URL = "https://cors-anywhere.herokuapp.com/";
const ARRIVALS_URL = `${CORS_EVERYWHERE_URL}http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${CTA_API_KEY}`;
const WEATHER_URL = `${CORS_EVERYWHERE_URL}https://api.openweathermap.org/data/2.5/onecall?lat=41.878113&lon=-87.629799&exclude=minutely,daily&appid=${WEATHER_API_KEY}&units=imperial`;
const BUS_URL = `${CORS_EVERYWHERE_URL}http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=${CTA_BUS_API_KEY}`;

const myInit = {
    method: 'HEAD',
    mode: 'no-cors',
}

const CONFIG = new Request(ARRIVALS_URL, myInit);
const WEATHER_CONFIG = new Request(WEATHER_URL, myInit);
const BUS_CONFIG= new Request(BUS_URL, myInit);

/**
 * Define our API Object
 * We can add async functions, await the results, and return the data to our components. See TrainEta.js for an example use.
 */
const API = {
    /**
     * Gets Train Etas based on a mapId
     * @param {int} mapId 
     */
    async getTrains(mapId){
        try{
            const res = await axios.get(`${ARRIVALS_URL}&mapid=${mapId}&outputType=JSON`, CONFIG)
            return await res.data
        }catch(e){
            console.log("Failed to get train data.")
        }
    },
    async getWeatherData(){
        try{
            const res = await axios.get(WEATHER_URL, WEATHER_CONFIG);
            return await res.data
        }catch(e){
            console.log("Failed to get weather data.")
        }
    },
    async getTrainData(routeId, stopId){
        try{
            const res = await axios.get(`${BUS_URL}&rt=${routeId}&stpid=${stopId}&format=json`, BUS_CONFIG);
            return await res.data
        }catch(e){
            console.log("Failed to get weather data.")
        }
    },
    
}

export {API, CONFIG, ARRIVALS_URL};