import React from 'react';
import {API} from "../api/index";
import WeatherCard from "./WeatherCard";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



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
            <Typography gutterBottom variant="h4" component="h2" >
                Weather data not loaded. Please refresh page.
            </Typography>
        );

        const weatherDataLoaded = (
            <Grid container spacing={1}>

                <Grid item xs={12}>
                    <WeatherCard data={this.state.current} time={"Currently:"} />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <WeatherCard data={this.state.hourly[0]} time={"In One Hour:"} />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <WeatherCard data={this.state.hourly[1]} time={"In Two Hours:"} />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <WeatherCard data={this.state.hourly[2]} time={"In Three Hours:"} />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <WeatherCard data={this.state.hourly[3]} time={"In Four Hours:"} />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <WeatherCard data={this.state.hourly[4]} time={"In Five Hours:"} />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <WeatherCard data={this.state.hourly[5]} time={"In Six Hours:"} />
                </Grid>
        
            </Grid>
        );

        return(
            <div>
                <Typography variant="h4" component="h1" style={{margin: '1.5rem', textAlign:'center'}}>
                    Weather Forecast In Chicago
                </Typography>
                {this.state.hourly.length > 0 ? weatherDataLoaded : weatherDataNotLoaded}
            </div>
        );
    }
}

export default Weather;