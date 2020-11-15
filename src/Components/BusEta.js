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
          busStopId: "",
          arrivalTime: "",
          message: "",
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
      //selectedRoute: res["bustime-response"]["routes"][0]["rt"]
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
    if (data["bustime-response"]["prd"])
      this.setState({
          data: data,
          destination: data["bustime-response"]["prd"][0]["des"],
          arrivalTime: data["bustime-response"]["prd"][0]["prdctdn"]
      })
    else 
      this.setState({
        data: data,
        message: data["bustime-response"]["error"][0]["msg"]

      })
    console.log(this.state.data)
  }

  handleRouteSelect = (e) => {
    this.state.selectedRoute = e.target.value;
    this.state.directionData = [];
    this.state.busStopData = [];
    this.state.selectedDirection = "";
    this.state.destination = "";
    this.state.arrivalTime = "";
    this.state.message = "";
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
              
              {this.state.directionData.length > 0 ?
                <div id="direction-input">
                  <select value={this.state.selectedDirection} onChange={this.handleDirectionSelect} style={{width: 300}}>
                  {this.state.directionData.map((item, index) => <option value={item.dir}>{item.dir} </option> )}
                  </select>
                </div> 
                : 
                <div id="direction-input">
                  <select style={{width: 300}}>
                  {<option >Please sleect route</option> }
                  </select>
                </div>
              }

              {this.state.busStopData.length > 0 ?
                <div id="stop-input">
                  <select value={this.state.busStopId} onChange={this.handleStopSelect} style={{width: 300}}>
                    {this.state.busStopData.map((item, index) => <option value={item.stpid}>{item.stpnm} </option>)}
                  </select>
                </div> 
                :
                <div id="stop-input">
                  <select style={{width: 300}}>
                  {<option >Please sleect direction</option> }
                  </select>
                </div>
              }

            </label>
            {/* <button type="submit">Submit</button> */}
          </form>

          <hr/>

          <div id="predictions">
            { this.state.arrivalTime ?
              <h3> The next {this.state.selectedDirection} {this.state.selectedRoute} bus towards {this.state.destination} arrives in {this.state.arrivalTime} min </h3>
            : this.state.message ?
              <h3> {this.state.selectedDirection} {this.state.selectedRoute}:  {this.state.message}</h3>
            :<h3>No Information Available</h3>
            }
          </div>
        
        
        </div>


      </div>
    )
}
}

export default BusEta