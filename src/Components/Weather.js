import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {API} from "../api/index";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontSize: '1.5rem',
        fontWeight:'200',
        marginTop:'2.5rem',
    },
  }));


const Weather = (props) => {


    const classes = useStyles();

    const [weatherData, setWeatherData] = useState({});
    const [current, setCurrent] = useState({});
    const [hourly, setHourly] = useState([]);

    useEffect(() => {
        API.getWeatherData()
            .then(data => {
                setWeatherData(data); 
                setCurrent(data.current);
                setHourly(data.hourly);
            })
            .catch(error => console.error(error)); 
    },[]);

    if(weatherData){
        return(
        <div>
            <p>Data from OpenWeather.org. We still need to present in nicely</p>
            {weatherData ? <p>Current Weather: {current.temp}°F</p> : <p>Loading weather data</p>}
            {hourly.length > 1 ? <p>in one hour {hourly[1].temp}°F</p> : <p>Loading weather data</p>}
            {hourly.length > 1 ? <p>in two hours {hourly[2].temp}°F</p> : <p>Loading weather data</p>}
            {hourly.length > 1 ? <p>in three hours {hourly[3].temp}°F</p> : <p>Loading weather data</p>}
        </div>
        )
    }

    return(
        <div>
            <p>Weather data did not load</p>
        </div>
    )
        
}

export default Weather;