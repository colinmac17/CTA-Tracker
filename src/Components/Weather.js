import React, {useState, useEffect} from 'react';
import {API} from "../api/index";

const Weather = (props) => {

    const [weatherData, setWeatherData] = useState({});
    const [current, setCurrent] = useState({});
    const [hourly, setHourly] = useState([]);

    useEffect(() => {
        console.log("here");
        API.getWeatherData()
            .then(data => {
                setWeatherData(data); 
                setCurrent(weatherData.current);
                setHourly(weatherData.hourly);
            })
            .catch(error => console.error(error)); 
    },[]);

    return(
        <div>

        </div>
    );
}

export default Weather;