import React from 'react';
import '../index.css';
import {API, BUS_URL, CONFIG} from '../api/';
<<<<<<< HEAD
//import busData from '../assets/CTA_Bus_Routes_List.json'
=======
>>>>>>> 2973c92f49646db8518fb9a014b01ef169875bf2


class BusEta extends React.Component {

<<<<<<< HEAD
  //busData = require('../assets/CTA_Bus_Routes_List.json')

  //var myData = JSON.parse(busData);
  
=======
>>>>>>> 2973c92f49646db8518fb9a014b01ef169875bf2
  constructor(props){
      super(props)
      this.state = {
          data: [],
      }
  }

  componentDidMount(){
      this.getBus();
  }

  async getBus(){
      /**
       * Example of how we can get data from the api into our component state
       * I have hardcoded in a map id here for an exmaple.
       * */
      //var tempInt = parseInt(this.state.train)
      //console.log("This is the int version " + tempInt)
      const data = await API.getTrainData(20, 456);
      this.setState({
          data: data,
          
      })
      console.log(this.state.data)
      //console.log("Trying to get the eta " + this.state.data[0].arrT)
      //this.state.nextTrain = this.state.data[0].arrT
      //this.state.destination = this.state.data[0].destNm

  }

  onFormSubmit = (e) => {
      e.preventDefault()
      console.log(this.state.data)
      this.getBus()
  }

  render(){

    //console.log("This is the bus data " + busData[0].route)

    return (
    
          <div>
          <form onSubmit={this.onFormSubmit}>
            <label>
              <h2>Bus Route Information:</h2>
              <select>
                <option value="0">-- Select a Bus Route --</option>
                <option value="358">1 Bronzeville/Union Station</option>
                <option value="159">2 Hyde Park Express</option>
                <option value="160">3 King Drive</option>
                <option value="162">4 Cottage Grove - OWL</option>
                <option value="164">N5 South Shore Night Bus - OWL</option>
                <option value="165">6 Jackson Park Express</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>

          <hr/>

          <h3> Currently Viewing: </h3>
          </div>
        )
}
}

export default BusEta