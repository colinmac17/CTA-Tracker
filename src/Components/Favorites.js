import React from 'react';
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TrainIcon from '@material-ui/icons/Train';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import Icon from '@material-ui/core/Icon';

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
  title: {
    margin: '2.5rem',
    textAlign:'center',

  },
  subtitle: {
    margin: '0.5rem',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
});

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
    const { classes } = this.props;
    return (
      <div key={item.train}>
        <Grid item className={classes.item}>
          <Icon marginRight="10px">
            <TrainIcon color='primary'/>
          </Icon>
          <Link 
              to={{pathname: '/train-eta',}}
              onClick={() => this.handleTrainRedirect(item)}
              >
              {item.trainColor}: {item.train}
            </Link>
          <IconButton
              onClick={() => this.deleteTrainFav(item.train)}
            >
            <DeleteIcon/>
          </IconButton>
        </Grid>
      </div>
    )
  }

  showBusFav(item){
    const { classes } = this.props;
    return (
      <div key={item.selectedRoute}>
        <Grid item className={classes.item}>
          <Icon marginRight="10px">
            <DirectionsBusIcon color='primary'/>
          </Icon>
          <Link 
              onClick={() => this.handleBusRedirect(item)}
              >
              {item.selectedRoute} - {item.selectedDirection} - {item.busStopId} 
          </Link>
          <IconButton
              onClick={() => this.deleteBusFav(item)}
          >
            <DeleteIcon/>
          </IconButton>
        </Grid>
      </div>
    )
  }

  render(){
    const { classes } = this.props;
    var favTrainEntries = this.state.favs_train;
    var listItems = favTrainEntries.map(this.showTrainFav);

    var favBusEntries = this.state.favs_bus;
    var listItems2 = favBusEntries.map(this.showBusFav);
    return(
      <div>
        <Typography className={classes.title} >
          <Box fontWeight="fontWeightMedium" fontSize="h4.fontSize" m={1}>
          Your Favorite Stops 
          </Box>
        </Typography>
        <Grid container 
                direction="column"
                justify="center"
                alignItems="center">
          <Grid item>
            <Typography className={classes.subtitle} >
              Favorite train stop(s):
            </Typography>
          </Grid>
          <Grid container
                direction="column"
                justify="center"
                alignItems="center">
            {listItems}
          </Grid>
        </Grid>

        <Grid container 
                direction="column"
                justify="center"
                alignItems="center">
          <Grid item>
            <Typography className={classes.subtitle} >
              Favorite bus stop(s):
            </Typography>
          </Grid>
          <Grid container
                direction="column"
                justify="center"
                alignItems="center">
            {listItems2}
          </Grid>
        </Grid>
      </div>
    );
  }
}

    
export default withStyles(styles)(ShowFav);