import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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

const styles = theme => ({

  root: {
    marginTop: "20px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
    paddingLeft: 20,
    paddingRight:20,
    paddingTop:40,
    paddingBottom: 50,

  },
  formControl: {
    margin: theme.spacing(0),
    paddingBottom: 10,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: "20px",
    background:'#FFB8B8',
    color: 'white',
  },
  typography: {
    margin: '2.5rem',
    textAlign:'center',

  }
});

class MapComponent extends React.Component {
  constructor(props){
    super(props);
      this.state = {
          category: [],
          take: [],
          takes: [],
          favorites: [],

          default_category: "--Choose Category--",
          default_take : "--Choose Take--"

      }
      this.categoryChange = this.categoryChange.bind(this);
      this.takeChange = this.takeChange.bind(this);
  };

  componentDidMount(props){
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


render() {
  const take = this.state.take;
  const hasTake = take.length !== 0;
  const { classes } = this.props;

  return (
      <div>
        <Typography className={classes.typography} >
          <Box fontWeight="fontWeightMedium" fontSize="h4.fontSize" m={1}>
          MAPS 
          </Box>
        </Typography>

        <Card variant="outlined" className={classes.root}>
  
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel>Dropdown menu to choose bus/train</InputLabel>
              <Select
                value={this.category}
                onChange={this.categoryChange}
                variant='outlined'
              >
                {dataCategories.map((e, key) => {
                    return <MenuItem value={e.categoryName}>{e.categoryName}</MenuItem>;
                  })}
              </Select>
            </FormControl>
                
            <FormControl className={classes.formControl} fullWidth={true}>
            <InputLabel>Choose train/bus line</InputLabel>
              <Select
                  value={this.take}
                  onChange={this.takeChange}
                  variant='outlined'
                >
                {this.state.takes.map((e, key) => {
                    return <MenuItem value={e.name}>{e.name}</MenuItem>;
                  })}
              </Select> 
            </FormControl>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
              onClick={this.handleClick.bind(this, this.state.category, this.state.take)}
              disabled={!hasTake}
              fullWidth={true}
            >
              Go to CTA Map Page
            </Button>
        </Card>
      </div>
  );
}
}

export default withStyles(styles)(MapComponent);