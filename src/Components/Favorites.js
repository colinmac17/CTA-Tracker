import React from 'react';
import {Link} from 'react-router-dom'

class ShowFav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favs_train:[],
      favs_bus:[]
    };
    this.showTrainFav = this.showTrainFav.bind(this);
    this.showBusFav = this.showBusFav.bind(this);
  }

  componentDidMount(){
    const getArray = JSON.parse(localStorage.getItem("favorites_train") || '0');
    if(getArray !== 0){
      this.setState({favs_train: getArray})
    }

    const getArray2 = JSON.parse(localStorage.getItem("favorites_bus") || '0');
    if(getArray2 !== 0){
      this.setState({favs_bus: getArray2})
    }
  }

  deleteTrainFav(key){
    const getArray = JSON.parse(localStorage.getItem("favorites_train") || '0');
    const update = getArray.filter(e => e.train !== key);//remove the element
    this.setState(
      {favs_train: update}
    )
    localStorage.setItem("favorites_train", JSON.stringify(update));
  }

  deleteBusFav(key){
    const getArray = JSON.parse(localStorage.getItem("favorites_bus") || '0');
    const update = getArray.filter(e => e.selectedRoute !== key.selectedRoute || e.selectedDirection !== key.selectedDirection || e.busStopId !== key.busStopId);//remove the element
    this.setState(
      {favs_bus: update}
    )
    localStorage.setItem("favorites_bus", JSON.stringify(update));
  }

  handleTrainRedirect(item){
    let array = JSON.parse(localStorage.getItem("redirect_train") || '0');

    if(!(array instanceof Array)){
        array = [array]
      }
    array.splice(0, 1, item);
    localStorage.setItem("redirect_train", JSON.stringify(array));
  }

  handleBusRedirect(key){
    let url = "";
    const getArray = JSON.parse(localStorage.getItem("favorites_bus") || '0');
    const lineId = getArray.filter(e => e.selectedRoute === key.selectedRoute && e.selectedDirection === key.selectedDirection && e.busStopId === key.busStopId).map(({selectedRoute}) =>(selectedRoute));

    url = "https://www.transitchicago.com/bus/" + lineId + "/";
    
    window.open(url);  
  }
  

  showTrainFav(item){
    return (
      <div key={item.train}>
        <li>
        {/* {item.trainColor}: {item.train} {item.trainStop} */}
        {item.trainColor}: {item.train} 
        <button type="button" onClick={() => this.deleteTrainFav(item.train)}>
          Remove
        </button>
        
        <button type="button" onClick={() => this.handleTrainRedirect(item)}>
          <Link to={{
              pathname: '/train-eta',
            }}
            >
            Redirect to TRAIN page with this info prefilled
          </Link>
        </button>
        </li>
      </div>
    )
  }

  showBusFav(item){
    return (
      <div key={item.selectedRoute}>
        <li>
        {item.selectedRoute} - {item.selectedDirection} - {item.busStopId} 
        <button type="button" onClick={() => this.deleteBusFav(item)}>
          Remove
        </button>
        
        <button type="button" onClick={() => this.handleBusRedirect(item)}>
            Show bus CTA page
        </button>
        </li>
      </div>
    )
  }

  render(){
    var favTrainEntries = this.state.favs_train;
    var listItems = favTrainEntries.map(this.showTrainFav);

    var favBusEntries = this.state.favs_bus;
    var listItems2 = favBusEntries.map(this.showBusFav);
    return(
      <div>
        <p>Your favorite train line(s): </p>
        <ul>{listItems}</ul>
        <br/><br/>
        <p>Your favorite bus line(s): </p>
        <ul>{listItems2}</ul>
      </div>
    );
  }
}



const Favorites = (props) => {
    return (
        <div>
            <h2>Favorites</h2>
            <ShowFav />
        </div>
    )}
    
export default Favorites;