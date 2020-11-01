import axios from 'axios';
/**
 * Add your REACT_APP_CTA_API_KEY to a .env file in the root of the project
 * React scripts automatcially includes .env vars into the proceess when prepended with REACT_APP_
 * Example:
 * REACT_APP_CTA_API_KEY=2434324fdfdsgdgddsfdsfndjfsd9
 */
const API_KEY = process.env.REACT_APP_CTA_API_KEY;

/**
 * Utilize Cors anywhere to avoid CORS errors - @see https://cors-anywhere.herokuapp.com/
 * Example request to hardcoded mapid (update thi)
 * Look at console.log result to see data we get back
 * We can add the other API Urls here for other endpoints and export them
 */
const CORS_EVERYWHERE_URL = "https://cors-anywhere.herokuapp.com/";
const ARRIVALS_URL = `${CORS_EVERYWHERE_URL}http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${API_KEY}`;

const myInit = {
    method: 'HEAD',
    mode: 'no-cors',
}

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
        const res = await axios.get(`${ARRIVALS_URL}&mapid=${mapId}&outputType=JSON`, CONFIG)
        return await res.data
    }
}

const CONFIG = new Request(ARRIVALS_URL, myInit);


export {API, CONFIG, ARRIVALS_URL};