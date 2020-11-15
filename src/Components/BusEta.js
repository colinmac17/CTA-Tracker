import React from 'react';
import '../index.css';
import {API, BUS_URL, CONFIG} from '../api/';
import busData from '../assets/data/busRoutes.json'


class BusEta extends React.Component {
  
  constructor(props){
      super(props)
      this.state = {
          data: [],
          stopName: "",
          destination: "",
          route: "",
          routedata: [],
          directionData: [],
          busStopData: [],
          selectedRoute: "",
          selectedDirection: "",
          busStopName: "",
          busStopId: ""
      }
  }

  componentDidMount(){
      //this.getBusPrediction();
      this.getRoutes();
      //this.getBusDirections();
      //this.getBusStops();
  }

  async getRoutes(){
    const res = await API.getBusRoute();
    console.log("fetching routes");
    this.setState({
      routedata: res["bustime-response"]["routes"],
    })
  }

  async getBusDirections(){
    const res = await API.getBusDirections(this.state.selectedRoute);
    console.log("fetching route direction");
    this.setState({
      directionData: res["bustime-response"]["directions"],
      //selectedDirection: res["bustime-response"]["directions"][0]["dir"]
    })
  
  }

  async getBusStops(){
    var tempInt = parseInt(this.state.selectedRoute);
    var direction = this.state.selectedDirection;
    console.log("Within Log" + this.state.selectedDirection)
    const res = await API.getBusStops(tempInt, direction);
    this.setState({
      busStopData: res["bustime-response"]["stops"],
    })
  }
  
   
  async getBusPrediction(){
    var tempInt = parseInt(this.state.selectedRoute);
    console.log("The Route is " + this.state.selectedRoute)
    var direction = this.state.selectedDirection;
    console.log("The Route is " + this.state.selectedDirection)
    var stopId = parseInt(this.state.busStopId);
    console.log("The stopID is " + this.state.busStopId)

    const data = await API.getBusData(tempInt, stopId, direction);
    this.setState({
        data: data,
    })
    console.log(this.state.data)
  }

  handleRouteSelect = (e) => {
    this.state.selectedRoute = e.target.value;
    this.state.directionData = [];
    this.state.busStopData = [];
    this.getBusDirections();
  }

  handleDirectionSelect = (e) => {
    this.state.selectedDirection = e.target.value;
    this.state.busStopData = [];
    this.getBusStops();
  }

  handleStopSelect = (e) => {
    this.state.busStopId = e.target.value;
    this.getBusPrediction();
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.getBusPrediction()
  }

  render(){

    return (
      <div>
          <div>
          <form onSubmit={this.onFormSubmit}>
            <label>
              <h2>Bus Route Information:</h2>

              <div id="route-input">
                <select value={this.state.selectedRoute} onChange={this.handleRouteSelect} style={{width: 300}}>
                  {this.state.routedata.map((item, index) => <option value={item.rt}>{item.rt}. {item.rtnm} </option> )}
                </select>
              </div>
            
              <div id="direction-input">
                <select value={this.state.selectedDirection} onChange={this.handleDirectionSelect} style={{width: 300}}>
                 {this.state.directionData.map((item, index) => <option value={item.dir}>{item.dir} </option> )}
                </select>
              </div> 

              <div id="stop-input">
                <select value={this.state.busStopId} onChange={this.handleStopSelect} style={{width: 300}}>
                  {this.state.busStopData.map((item, index) => <option value={item.stpid}>{item.stpnm} </option>)}
                </select>
              </div> 

            </label>
            <button type="submit">Submit</button>
          </form>

          <hr/>
          <h3> Currently Viewing: {this.state.selectedRoute} </h3>
          <h3> Direction: {this.state.selectedDirection} </h3>
        </div>
      </div>
    )
}
}

export default BusEta