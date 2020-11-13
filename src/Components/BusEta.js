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
          stopId: "",
          route: "",
          routedata: [],
          selectedRoute: ""
      }
  }

  componentDidMount(){
      this.getBus();
      this.getRoutes();
  }

  async getRoutes(){
    const res = await API.getBusRoute();
    console.log("fetching routes");
    this.setState({
      routedata: res["bustime-response"]["routes"],
      //routedata: res,
    })
    console.log(this.state.routedata)

  }
  
   
  async getBus(){
      /**
       * Example of how we can get data from the api into our component state
       * I have hardcoded in a map id here for an exmaple.
       * */
      //var tempInt = parseInt(this.state.train)
      //console.log("This is the int version " + tempInt)
      const data = await API.getBusData(20, 456);
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
      //this.getBus()
      this.getRoutes()
  }

  handleRouteSelect = (e) => {
    //setSelectedRoute(e.target.value);
    //setSelectedDirection("");
    //setSelectedStop("");
    console.log("selected route: " + e.target.value);
  }

  render(){

    //console.log("This is the bus data " + busData[0].route)

    return (

      <div>
        {/* <div className="dropdown-routes">
            <label>Routes</label>
            <select 
              value={this.state.selectedRoute}
              onChange={this.handleRouteSelect}
            >
              {this.routedata.map((item, index) => <menuitem value={item.rt}>{item.rt}. {item.rtnm} </menuitem> )}
            </select>
        </div>
     */}

          <div>
          <form onSubmit={this.onFormSubmit}>
            <label>
              <h2>Bus Route Information:</h2>

              <div id="route-input">
              <select value={this.state.selectedRoute} onChange={this.onChange} onChange={e=>this.setState({selectedRoute: e.target.value})}>
                {this.state.routedata.map((item, index) => <option value={item.rt}>{item.rt}. {item.rtnm} </option> )}
              </select>
              </div>



            </label>


            <button type="submit">Submit</button>
          </form>

          <hr/>

          <h3> Currently Viewing: {this.state.selectedRoute} </h3>
          {/*  <h3> Destination: {this.state.destination} </h3>
          <h3> At Stop: {this.state.selectedRoute} </h3> */}
          </div>
          </div>
        )
}
}

export default BusEta