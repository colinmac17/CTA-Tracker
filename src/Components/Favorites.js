import React from 'react';
import {Link} from 'react-router-dom'

class ShowFav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favs_train:[],
    };
    this.showFav = this.showFav.bind(this);
  }

  componentDidMount(){
    const getArray = JSON.parse(localStorage.getItem("favorites_train") || '0');

    if(getArray !== 0){
      this.setState({favs_train: getArray})
    }
  }

  deleteFav(key){
    const getArray = JSON.parse(localStorage.getItem("favorites_train") || '0');
    const update = getArray.filter(e => e.train !== key);//remove the element
    this.setState(
      {favs_train: update}
    )
    localStorage.setItem("favorites_train", JSON.stringify(update));
  }


  handleRedirect(item){
    let array = JSON.parse(localStorage.getItem("redirect_train") || '0');

    if(!(array instanceof Array)){
        array = [array]
      }
    array.splice(0, 1, item);
    localStorage.setItem("redirect_train", JSON.stringify(array));
  }

  showFav(item){
    return (
      <div key={item.train}>
        <li>
        {item.trainColor}: {item.train}
        <button type="button" onClick={() => this.deleteFav(item.train)}>
          Remove
        </button>
        
        <button type="button" onClick={() => this.handleRedirect(item)}>
          <Link to={{
              pathname: '/train-eta',
            }}
            >
            Redirect to another page with this info prefilled
          </Link>
        </button>
        </li>
      </div>
    )
  }

  render(){
    var favTrainEntries = this.state.favs_train;
    var listItems = favTrainEntries.map(this.showFav);

    // var favBusEntries = this.state.favs_bus;
    // var listItems2 = favBusEntries.map(this.showFav);
    return(
      <div>
        <p>Your favorite train line(s): </p>
        <ul>{listItems}</ul>
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