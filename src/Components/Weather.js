import React, {useState, useEffect} from 'react';
import {API} from "../api/index";
import WeatherCard from "./WeatherCard";

const Weather = (props) => {

    const [weatherData, setWeatherData] = useState({});
    const [current, setCurrent] = useState({});
    const [hourly, setHourly] = useState([]);

    useEffect(() => {
        API.getWeatherData()
            .then(data => {
                setWeatherData(data); 
                setCurrent(data.current);
                setHourly(data.hourly);
                console.log(data);
            })
            .catch(error => console.error(error)); 
    },[]);

    const dataNotLoaded = (
        <div>
            <p>Loading Data</p>
            <img src="#" alt="Weather Loading"/>
        </div>
    )

    const dataLoaded = (
        <div>
            <h1>Weather data for Chicago</h1>
            <WeatherCard icon={current.weather[0].icon} description={current.weather[0].description} 
                    temp = {current.temp} feelsLike = {current.feels_like} time={"Current"} />

            <WeatherCard icon={hourly[0].weather[0].icon} description={hourly[0].weather[0].description} 
                        temp = {hourly[0].temp} feelsLike = {hourly[0].feels_like} time={"In One Hour"} />

            <WeatherCard icon={current.weather[1].icon} description={current.weather[1].description} 
                        temp = {current.weather[1].temp} feelsLike = {current.weather[1].feels_like} time={"In Two Hours"} />
            
            <WeatherCard icon={current.weather[2].icon} description={current.weather[2].description} 
                        temp = {current.weather[2].temp} feelsLike = {current.weather[2].feels_like} time={"In Two Hours"} />
        </div> 
    )

    return(
        <>
            {weatherData ? dataLoaded : dataNotLoaded}
        </>
    )   
}

export default Weather;