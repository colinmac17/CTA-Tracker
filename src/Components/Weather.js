import React from 'react';
import Container from '@material-ui/core/Container';
import {API} from "../api/index";

class Weather extends React.Component{
    state = {
        weatherData: {},
    }


    componentDidMount(){
        API.getWeatherData()
            .then(data => {
                this.setState({weatherData: data}); 
                this.setState({'current': this.state.weatherData.current});
                this.setState({'hourly': this.state.weatherData.hourly});
            })
            .catch(error => console.error(error)); 
    };

    render(){
        console.log(this.state);

        return(
            <Container>
                <div>
                    
                </div>
            </Container>
        );
    }
}

export default Weather;