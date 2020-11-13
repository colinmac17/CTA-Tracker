import React from 'react';


const WeatherCard = ({icon, description, temp, feelsLike, time}) => {
    return(
        <div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description}/>
            <h3>{time}: {description}</h3>
            <h4>Temperature: {temp}</h4>
            <h4>Feels like: {feelsLike}</h4>
        </div>
    )
}

export default WeatherCard;