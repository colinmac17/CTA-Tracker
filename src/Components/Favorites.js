import React from 'react';
import {Link} from 'react-router-dom'

class ShowFav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favs:[],
    };
    this.showFav = this.showFav.bind(this);
  }

  componentDidMount(){
    const getArray = JSON.parse(localStorage.getItem("favorites") || '0');

    if(getArray !== 0){
      this.setState({favs: getArray})
    }
  }

  deleteFav(key){
    const getArray = JSON.parse(localStorage.getItem("favorites") || '0');
    const update = getArray.filter(e => e.train !== key);//remove the element
    this.setState(
      {favs: update}
    )
    localStorage.setItem("favorites", JSON.stringify(update));
  }


  handleRedirect(item){
    let array = JSON.parse(localStorage.getItem("redirect") || '0');

    if(!(array instanceof Array)){
        array = [array]
      }
    array.splice(0, 1, item);
    localStorage.setItem("redirect", JSON.stringify(array));
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
    var favEntries = this.state.favs;
    var listItems = favEntries.map(this.showFav);

    return(
      <div>
        <p>Your favoriteline(s): </p>
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