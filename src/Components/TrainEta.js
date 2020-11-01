import React from 'react';
import '../index.css';
// import Button from '@material-ui/core/Button';
import {API, ARRIVALS_URL, CONFIG} from '../api/'

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

    async getTrains(){
        /**
         * Example of how we can get data from the api into our component state
         * I have hardcoded in a map id here for an exmaple.
         * */
        const data = await API.getTrains(40360);
        this.setState({
            data: data
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