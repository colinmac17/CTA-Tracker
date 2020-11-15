import React from 'react';
import '../index.css';
import {API, ARRIVALS_URL, CONFIG} from '../api/';
import trainLookup from '../assets/data/trainStops.json'

class TrainETA extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            //data: {},
            data: [],
            train: '41220',
            mapId: 40360,
            trainColor: "Red",
            nextTrain: "",
            destination: "",
            trainStop: ""
        }
    }

    componentDidMount(){
        this.getTrains();
    }

    async getTrains(){

        var tempInt = parseInt(this.state.train)
        var route = this.state.trainColor

        const response = await API.getTrains(tempInt, route);
        this.setState({
            data: response.ctatt.eta,
            nextTrain: response.ctatt.eta[0].arrT,
            destination:  response.ctatt.eta[0].destNm,
            trainStop: response.ctatt.eta[0].staNm
  
        })
        /* this.setState({
            nextTrain: this.state.data[0].arrT,
            destination:  this.state.data[0].destNm
  
        }) */
        console.log("API call made for this stop: " + response.ctatt.eta[0].staNm)
        console.log(this.state.data)
        //console.log("Trying to get the eta " + this.state.data[0].arrT)
        //this.state.nextTrain = this.state.data[0].arrT
        //this.state.destination = this.state.data[0].destNm

    }

    onFormSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state.train)
        this.getTrains()
    }

    render(){

        const {trainColor} = this.state
        const options = trainLookup[trainColor]

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label>
                    <h2>Train Route Information:</h2>
                    </label>
                    <select value={this.state.trainColor}  onChange={this.onChange} onChange={e=>this.setState({trainColor: e.target.value})}>
                        <option value="Red">Red Line</option>
                        <option value="Blue">Blue</option>
                        <option value="G">Green</option>
                        <option value="Y">Yellow</option>
                        <option value="Brn">Brown</option>
                        <option value="P">Purple</option>
                        <option value="Org">Orange</option>
                        <option value="Pink">Pink</option>
                    </select>
                        
                    <select value={this.state.train} onChange={this.onChange} onChange={e=>this.setState({train: e.target.value})}>
                        {options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
                    </select>
                    <br></br>
                    <button type="submit" >Submit</button>
                </form>
            <hr/>

            <h3> Currently Viewing: {this.state.trainColor}</h3>
            <p>Current mapId Selection: {this.state.train}</p>
            <p>The next {this.state.trainColor} line train at {this.state.trainStop} towards {this.state.destination} arrives at: {this.state.nextTrain}</p>
            
            </div>
        );
    }
}
    

export default TrainETA