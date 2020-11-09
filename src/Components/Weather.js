import React from 'react';
import Container from '@material-ui/core/Container';
import {API} from "../api/index";

class Weather extends React.Component{
    state = {
        weatherData: {},
    }


    componentDidMount(){
        API.getWeatherData()
            .then(data => this.setState({weatherData: data}))
            .catch(error => console.error(error))
    };

    render(){

        return(
            <Container>
                <div>
                    
                </div>
            </Container>
        );
    }
}

export default Weather;