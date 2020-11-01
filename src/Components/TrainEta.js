import React from 'react';
import '../index.css';
import axios from 'axios';
// import Button from '@material-ui/core/Button';
import {ARRIVALS_URL, CONFIG} from '../api/'

const trainLine = ["Red", "Blue", "Green", "Yellow", "Brown", "Purple", "Orange"];
// const items = [];


class TrainETA extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount(){
        this.getTrains();
    }

    getTrains(){
        /**
         * Example of how we can get data from the api into our component state
         * I have hardcoded in a map id here for an exmaple. You will need to dynamically configure this url per the CTA docs
         * */
        axios.get(`${ARRIVALS_URL}&mapid=40360&outputType=JSON`, CONFIG)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    data: response.data
                })
            }).catch(function(e){
                console.log(e)
                return false;
            })
    }

    render(){
        return (
            <div>
                <h2>Select a Train Line</h2>
                    {trainLine.map((value, index) => {
                        return <button type='button' key={index} style={{backgroundColor: {value}}}> {value} </button>
                    })}
    
                <hr/>
                <button type='button' >View Trains</button>
            </div>
        
        ); 
    }
}

export default TrainETA