/**
 * Add your APIKEY to a .env file in the root of the project
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
let ARRIVALS_URL = `https://cors-anywhere.herokuapp.com/http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${API_KEY}`;

const myInit = {
    method: 'HEAD',
    mode: 'no-cors',
}

const CONFIG = new Request(ARRIVALS_URL, myInit);


export {CONFIG, ARRIVALS_URL};