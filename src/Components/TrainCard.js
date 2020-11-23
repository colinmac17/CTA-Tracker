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

  });
  

const TrainCard = ({trainColor, trainStop, destination, eta}) => {
    const classes = useStyles();

    return(
        <Card variant="outlined" className={classes.root}>
            
            <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                    {trainColor} line 
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                     at {trainStop} towards {destination}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                     will arrive at {eta}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default TrainCard;