import React from 'react';


class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favs:[]};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      var newTrain = {
        lineName : this.state.value || "redline",
        url: "https://www.transitchicago.com/" + this.state.value + "/#map",
        key: Date.now()
      };

      this.setState((prevState) => {
        return { 
          favs: prevState.favs.concat(newTrain) 
        };
      });

      event.preventDefault();
    }

    deleteItem(key){
      var filterdItems = this.state.favs.filter(function (item){
        return (item.key !== key);
      });

      this.setState({
        favs : filterdItems
      });
    }

    render() {
        return (
        <div>
          <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Pick your favorite train line:</p>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="redline">RedLine</option>
                <option value="blueline">BlueLine</option>
                <option value="brownline">BrownLine</option>
                <option value="greenline">GreenLine</option>
                <option value="pinkline">PinkLine</option>
                <option value="purpleline">PurpleLine</option>
                <option value="yellowline">YellowLine</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
          </div>
          <ShowFav entries={this.state.favs}
                  delete={this.deleteItem}
          />  
        </div>
        );
    }
}

class ShowFav extends React.Component{
  constructor(props){
    super(props);
    this.addFav = this.addFav.bind(this);
  }
  delete(key){
    this.props.delete(key);
  }

  addFav(item){
    return (
      <div key={item.key}>
        <li>
        {/* <a href={item.url} title={item.url}>{item.lineName}</a> */}
        {item.lineName}
        <button type="button" onClick={() => this.delete(item.key)}>
          Remove
        </button>
        </li>
      </div>
    )
  }

  render(){
    var favEntries = this.props.entries;
    var listItems = favEntries.map(this.addFav);

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
            <FlavorForm />
        </div>
    )}
    
export default Favorites;