import React from 'react';



const dataCategories = [
  { categoryName: "Train"},
  { categoryName: "Bus"}
];
const dataLines = [
  { name: "Red Line", Id: "redline", categoryName: "Train" },
  { name: "Blue Line", Id: "blueline", categoryName: "Train" },
  { name: "Brown Line", Id: "brownline", categoryName: "Train" },
  { name: "Green Line", Id: "greenline", categoryName: "Train" },
  { name: "Orange Line", Id: "orangeline", categoryName: "Train" },
  { name: "Pink Line", Id: "pinkline", categoryName: "Train" },
  { name: "Purple Line", Id: "purpleline", categoryName: "Train" },
  { name: "Yellow Line", Id: "yellowline", categoryName: "Train" },
  { name: "1", Id: "1", categoryName: "Bus" },
  { name: "3", Id: "3", categoryName: "Bus" },
  { name: "4", Id: "4", categoryName: "Bus" },
  { name: "12", Id: "12", categoryName: "Bus" },
  { name: "J14", Id: "J14", categoryName: "Bus" },
  { name: "15", Id: "15", categoryName: "Bus" },
  { name: "22", Id: "22", categoryName: "Bus" },
  { name: "24", Id: "24", categoryName: "Bus" },
  { name: "26", Id: "26", categoryName: "Bus" },
  { name: "36", Id: "36", categoryName: "Bus" },
  { name: "37", Id: "37", categoryName: "Bus" },
  { name: "52", Id: "52", categoryName: "Bus" },
  { name: "65", Id: "65", categoryName: "Bus" },
  { name: "78", Id: "78", categoryName: "Bus" },
  { name: "88", Id: "88", categoryName: "Bus" },
  { name: "90", Id: "90", categoryName: "Bus" },
  { name: "95", Id: "95", categoryName: "Bus" },
  { name: "96", Id: "96", categoryName: "Bus" },
  { name: "100", Id: "100", categoryName: "Bus" },
  { name: "115", Id: "115", categoryName: "Bus" },
  { name: "125", Id: "125", categoryName: "Bus" },
  { name: "126", Id: "126", categoryName: "Bus" },
  { name: "143", Id: "143", categoryName: "Bus" },
  { name: "147", Id: "147", categoryName: "Bus" },
  { name: "151", Id: "151", categoryName: "Bus" },
  { name: "152", Id: "152", categoryName: "Bus" },
  { name: "155", Id: "155", categoryName: "Bus" },
];


class MapComponent extends React.Component {
  constructor(props){
    super(props);
      this.state = {
          category: [],
          take: [],
          takes: [],
          favorites: []
      }
      this.categoryChange = this.categoryChange.bind(this);
      this.takeChange = this.takeChange.bind(this);
  };

  componentDidMount(){
    const getArray = JSON.parse(localStorage.getItem("favorites") || '0');

    if(getArray !== 0){
      this.setState({favs: getArray})
    }
  }

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
    let lineId = dataLines.filter(take => take.name === this.state.take).map(({Id}) =>(Id));
    if(this.state.category === 'Train'){     
      url = "https://www.transitchicago.com/" + lineId + "/#map";
    } 
    else if(this.state.category === 'Bus'){
      url = "https://www.transitchicago.com/assets/1/6/stoplist_" + lineId + ".htm";
    }
    window.open(url);
  }

  handleFav(event){
    let array = JSON.parse(localStorage.getItem("favorites") || '0');
    let Obj = {category: this.state.category, take: this.state.take};
    let dup = false;
    for(let i = 0; i < array.length; i++){
      if(array[i].take === Obj.take){
        dup = true;
        break;
      }
    }
    if(dup){
      window.alert("Already added this to fav list. ")
    }
    else{
      if(!(array instanceof Array)){
        array = [array]
      }
      array.push(Obj);
      this.setState({favorites: array})
      localStorage.setItem("favorites", JSON.stringify(array));
    }
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
              <select placeholder="Category" data={dataCategories}  onChange={this.categoryChange}>
                <option>--Choose Category--</option>
                {dataCategories.map((e, key) => {
                  return <option key={key}>{e.categoryName}</option>;
                })}
              </select>
          </div>
          <div style={{ display: 'inline-block', marginLeft: '30px' }}>
              Takes
              <br />
              <select placeholder="Take" disabled={!hasCategory} data={this.state.takes}  onChange={this.takeChange}>
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
          <br/><br/>
          <button onClick={this.handleFav.bind(this, this.state.category, this.state.take)} disabled={!hasTake}>
            Add to Fav
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