import * as React from 'react';


const dataCategories = [
  { categoryName: "Train"},
  { categoryName: "Bus"}
];
const dataLines = [
  { name: "Red Line", lineId: 1, linename: "redline", categoryName: "Train" },
  { name: "Blue Line", lineId: 2, linename: "blueline", categoryName: "Train" },
  { name: "Brown Line", lineId: 3, linename: "brownline", categoryName: "Train" },
  { name: "Green Line", lineId: 4, linename: "greenline", categoryName: "Train" },
  { name: "Orange Line", lineId: 5,linename: "orangeline", categoryName: "Train" },
  { name: "Pink Line", lineId: 6, linename: "pinkline", categoryName: "Train" },
  { name: "Purple Line", lineId: 7, linename: "purpleline", categoryName: "Train" },
  { name: "Yellow Line", lineId: 8, linename: "yellowline", categoryName: "Train" },
  { name: "1", numId: 1, categoryName: "Bus" },
  { name: "3", numId: 2, categoryName: "Bus" },
  { name: "4", numId: 3, categoryName: "Bus" },
  { name: "12", numId: 4, categoryName: "Bus" },
  { name: "J14", numId: 5, categoryName: "Bus" },
  { name: "15", numId: 6, categoryName: "Bus" },
  { name: "22", numId: 7, categoryName: "Bus" },
  { name: "24", numId: 8, categoryName: "Bus" },
  { name: "26", numId: 9, categoryName: "Bus" },
  { name: "36", numId: 10, categoryName: "Bus" },
  { name: "37", numId: 11, categoryName: "Bus" },
  { name: "52", numId: 12, categoryName: "Bus" },
  { name: "65", numId: 13, categoryName: "Bus" },
  { name: "78", numId: 14, categoryName: "Bus" },
  { name: "88", numId: 15, categoryName: "Bus" },
  { name: "90", numId: 16, categoryName: "Bus" },
  { name: "95", numId: 17, categoryName: "Bus" },
  { name: "96", numId: 18, categoryName: "Bus" },
  { name: "100", numId: 19, categoryName: "Bus" },
  { name: "115", numId: 20, categoryName: "Bus" },
  { name: "125", numId: 21, categoryName: "Bus" },
  { name: "126", numId: 22, categoryName: "Bus" },
  { name: "143", numId: 23, categoryName: "Bus" },
  { name: "147", numId: 24, categoryName: "Bus" },
  { name: "151", numId: 25, categoryName: "Bus" },
  { name: "152", numId: 26, categoryName: "Bus" },
  { name: "155", numId: 27, categoryName: "Bus" },
];



class MapComponent extends React.Component {
  constructor(props){
    super(props);
      this.state = {
          category: [],
          take: [],
          takes: []
      }
      this.categoryChange = this.categoryChange.bind(this);
      this.takeChange = this.takeChange.bind(this);
  };

  categoryChange(event){
      const category = event.target.value;
      const takes = dataLines.filter(take => take.categoryName === category);

      this.setState({category: category});
      this.setState({takes: takes}); 
      this.setState({take : []})  
  }

  takeChange = (event) => {
    this.setState({take: event.target.value});
}

  handleClick(event){
    let url = "";
    if(this.state.category === 'Train'){
      let lineObj = dataLines.filter(take => take.name === this.state.take).map(({linename}) =>(linename));
      url = "https://www.transitchicago.com/" + lineObj + "/#map";
    } 
    else if(this.state.category === 'Bus'){
      url = "https://www.transitchicago.com/assets/1/6/stoplist_" + this.state.take + ".htm";
    }
    window.open(url);
  }


render() {
  const category = this.state.category;
  const take = this.state.take;
  const hasCategory = category.length !== 0;
  const hasTake = take.length !== 0 && take !== '--Choose Take--';

  return (
      <div>
          <div style={{ display: 'inline-block' }}>
              Categories
              <br />
              <select placeholder="Category" data={dataCategories} value={this.state.category} onChange={this.categoryChange}>
                <option>--Choose Category--</option>
                {dataCategories.map((e, key) => {
                  return <option key={key}>{e.categoryName}</option>;
                })}
              </select>
          </div>
          <div style={{ display: 'inline-block', marginLeft: '30px' }}>
              Takes
              <br />
              <select placeholder="Take" disabled={!hasCategory} data={this.state.takes} value={this.state.take} onChange={this.takeChange}>
                <option>--Choose Take--</option>
                {this.state.takes.map((e, key) => {
                  return <option key={key}>{e.name}</option>;
                })}
              </select>
          </div>
          <br/><br/>
          <button onClick={this.handleClick.bind(this, this.state.category, this.state.take)} disabled={!hasTake}>
            Show Map
          </button>
      </div>
  );
}
}

  const Maps = (props) => {
    return(
            <div>
                <MapComponent/>              
            </div>
    )
}

export default Maps;