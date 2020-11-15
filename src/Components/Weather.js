import React from 'react';
import {API} from "../api/index";
import WeatherCard from "./WeatherCard";



class Weather extends React.Component{

    state = {
        weatherData: {},
        current: {},
        hourly: [],
    }

    componentDidMount(){
        API.getWeatherData()
            .then(data => this.setState({
                weatherData: data,
                current: data.current,
                hourly: data.hourly,
            }))
            .catch(error => console.error(error)); 
    }

    render(){

        const weatherDataNotLoaded = (
            <div>       
                <p>Weather data not loaded. Please refresh page.</p>
            </div>
        );

        const weatherDataLoaded = (
            <div>
                <WeatherCard data={this.state.current} time={"Currently"} />
                <WeatherCard data={this.state.hourly[0]} time={"In One Hour"} />
                <WeatherCard data={this.state.hourly[1]} time={"In Two Hours"} />
                <WeatherCard data={this.state.hourly[2]} time={"In Three Hours"} />

            </div>
        );

        return(
            <div>
                <h1>Current Weather In Chicago</h1>
                {this.state.hourly.length > 0 ? weatherDataLoaded : weatherDataNotLoaded}
            </div>
        );
    }
}

export default Weather;