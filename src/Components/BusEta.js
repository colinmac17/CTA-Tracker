import React from 'react';
import '../index.css';
import {API, BUS_URL, CONFIG} from '../api/';
import busData from '../assets/data/busRoutes.json'
import BusCard from "./BusCard";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


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

  handleFav(event){
    let array = JSON.parse(localStorage.getItem("favorites_bus") || '0');
    let Obj = {selectedRoute: this.state.selectedRoute, selectedDirection: this.state.selectedDirection, busStopId: this.state.busStopId};
    let dup = false;
    for(let i = 0; i < array.length; i++){
      if(array[i].selectedRoute === Obj.selectedRoute && array[i].selectedDirection === Obj.selectedDirection && array[i].busStopId === Obj.busStopId){
        dup = true;
        break;
      }
    }
    if(dup){
      window.alert("Already added this train to the fav list. ")
    }
    else{
      if(!(array instanceof Array)){
        array = []
      }

        array.push(Obj);
        localStorage.setItem("favorites_bus", JSON.stringify(array));
 
    }
  }

  render(){

    const busDataNotLoaded = (
      <Typography gutterBottom variant="h4" component="h4" >
          No busses expected at this time.
      </Typography>
    );
           
    const busDataLoaded = (
      <Grid container spacing={1}>
          <Grid item xs={12}>
              <BusCard direction={this.state.selectedDirection} destination={this.state.destination} route={this.state.selectedRoute} arrivalTime={this.state.arrivalTime}/>
          </Grid>
      </Grid>
    );

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
            <button type="submit">Submit</button>
          </form>
          <button onClick={this.handleFav.bind(this, this.state.selectedRoute, this.state.selectedDirection, this.state.busStopId)}>
                        Add to Favorite
          </button>
          <hr/>
          
          <div><h2>Schedule:</h2></div>
          <div id="predictions">
            { this.state.arrivalTime ?
              busDataLoaded
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