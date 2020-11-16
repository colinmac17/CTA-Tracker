import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    root: {
      marginTop: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f2f2f2",
      flexDirection:"row"
    },

    media: {
      height: 100,
      width: 100,
      background: "#c9c9c9",
      borderRadius: "10px",
    },

  });
  

const WeatherCard = ({data, time}) => {
    const classes = useStyles();

    return(
        <Card variant="outlined" className={classes.root}>
            <CardMedia
            className={classes.media}
            image={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            title={data.weather[0].description}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                    {time}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {data.weather[0].description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Temperature: {data.temp}°F
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Feels like: {data.feels_like}°F
                </Typography>
            </CardContent>
        </Card>
    );
}

export default WeatherCard;


//   <div>
//             <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description}/>
//             <h3>{time}: "{data.weather[0].description}"</h3>
//             <h4>Temperature: {data.temp}°F</h4>
//             <h4>Feels like: {data.feels_like}°F</h4>
//         </div>