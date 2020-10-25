import React from 'react';


class Train{
    constructor(line,url){
        this.lineName = line;
        this.url = url;
    }
}
const FavTrain = [];
// const options = [
//     { lineName: 'redline', url: 'RedLine' },
//     { lineName: 'blueline', url: 'BlueLine' },
//     { lineName: 'brownline', url: 'BrownLine' },
//     { lineName: 'greenline', url: 'GreenLine'}
//   ];


class FlavorForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {value: 'redline'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite train line is: ' + this.state.value);
      var line = this.state.value;
      var url = "https://www.transitchicago.com/" + this.state.value + "/#map";
      var newTrain = new Train(line, url);
      FavTrain.push(newTrain);
      this.setState({value: event.target.value});
      event.preventDefault();
    }

    render() {
        return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Pick your favorite train line:</p>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="redline">RedLine</option>
                <option value="blueline">BlueLine</option>
                <option value="brownline">BrownLine</option>
                <option value="greenline">GreenLine</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <ShowFav />
        </div>
        
        );
    }
}




const ShowFav = (props) => {
    const [list, setList] = React.useState(FavTrain);

    const handleClick = (lineName) => {
        setList(list.filter(train => train.lineName !== lineName));
      };

    return (
        <div>
            <p>Your favorite train line(s): </p>
            {FavTrain.map(train => (
                        <li key = {train}>
                            
                            <a href={train.url} title={train.url}>{train.lineName}</a>
                            
                            <button type="button" onClick={() => handleClick(train)}>
                                Remove
                            </button>
                        </li>
            ))}
        </div>
    )
}
    
// export function Favorites() {
const Favorites = (props) => {
    return (
        <div>
            <h2>Favorites</h2>
            <FlavorForm />
            {/* <ShowFav /> */}
        </div>
    )}
    
export default Favorites;