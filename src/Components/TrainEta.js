import React from 'react';
import '../index.css';
// import Button from '@material-ui/core/Button';
import {API, ARRIVALS_URL, CONFIG} from '../api/'

const lookup = {
    "Red": [
      { id: '41220', text: 'Fullerton' },
      { id: '41320', text: 'Belmont' },
      { id: '41420', text: 'Addison' },
      { id: '41090', text: 'Monroe' },
      { id: '40560', text: 'Jackson' },
      { id: '40540', text: 'Wilson' }
    ],
    "Brown": [
      { id: '41500', text: 'Montrose' },
      { id: '40530', text: 'Diversey' },
      { id: '41210', text: 'Wellington' },
      { id: '40660', text: 'Armitage' },
      { id: '40460', text: 'Merchandise Mart' },
      { id: '41480', text: 'Western' },
    ],

    "Blue":[
        { id: '40670', text: 'Western - Ohare br.' },
        { id: '40220', text: 'Western - Forest Park' },

    ],
    "Green":[
        {id: '40280', text: 'Central'}

    ],
    "Yellow":[
        {id: '40140', text: 'Dempster-Skokie'}

    ],
    "Purple":[
        { id: '41210', text: 'Wellington' },

        { id: '40730', text: 'Washington/Wells' }
    ],
    "Orange":[
        { id: '40310', text: 'Western' },
    ],
    "Pink":[
        { id: '40740', text: 'Western' },

    ],

  }
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
            destination: ""
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
        var tempInt = parseInt(this.state.train)
        console.log("This is the int version " + tempInt)
        const data = await API.getTrains(tempInt);
        this.setState({
            data: data.ctatt.eta,
            
        })
        console.log(this.state.data)
        //console.log("Trying to get the eta " + this.state.data[0].arrT)
        this.state.nextTrain = this.state.data[0].arrT
        this.state.destination = this.state.data[0].destNm

    }

    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.train)
        this.getTrains()
    }

    render(){

        const {trainColor} = this.state
        const options = lookup[trainColor]

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label>
                    <h2>Train Route Information:</h2>
                    </label>
                    <select value={this.state.trainColor}  onChange={this.onChange} onChange={e=>this.setState({trainColor: e.target.value})}>
                        <option value="0">-- Select a Train Route --</option>
                        <option value="Red">Red Line</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Brown">Brown</option>
                        <option value="Purple">Purple</option>
                        <option value="Orange">Orange</option>
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
            <p>The next {this.state.trainColor} line train towards {this.state.destination} arrives at: {this.state.nextTrain}</p>
            
            </div>
        );
    }
}
    

export default TrainETA