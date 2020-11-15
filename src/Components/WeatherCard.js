import React from 'react';


const WeatherCard = ({data, time}) => {
    return(
        <div>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description}/>
            <h3>{time}: "{data.weather[0].description}"</h3>
            <h4>Temperature: {data.temp}°F</h4>
            <h4>Feels like: {data.feels_like}°F</h4>
        </div>
    )
}

export default WeatherCard;