import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import trainStation from '../assets/illustrations/trainStation-Illustration.svg';
import trainView from '../assets/illustrations/insideTrain-Illustration.svg';
import traffic from '../assets/illustrations/traffic-Illustration.svg';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontSize: '1.5rem',
        fontWeight:'200',
        marginTop:'2.5rem',
    },
    gridStyle: {
        justifyContent: "center",
        alignItems: "center",
    },

    landingHighlight: {
        color: '#FFB8B8',
        fontWeight: '600',
        fontStyle: 'Italic',
    },
    headingImage:{ 
        maxWidth: '60%',
        maxHeight: '60%',
    },
    itemOrder1: {
        order: -2,
        [theme.breakpoints.up('md')]: {
            order: 0,
          },
    },
    itemOrder2: {
        order: 2,
        [theme.breakpoints.up('md')]: {
            order: 0,
          },
    },
    itemOrder3: {
        order: 1,
        [theme.breakpoints.up('md')]: {
            order: 0,
          },
    },
  }));

const Home = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root} >
            <Grid container direction="row" spacing={1}  className={classes.gridStyle}>

                <Grid item md={6} sm={12} >
                    <p className={classes.pTag}>
                        <span className={classes.landingHighlight}>RideChicago</span> helps you get estimated time of arrival for Chicago trains and Buses!
                    </p>
                </Grid>
                <Grid item md={6} sm={12} style={{ display: "flex", justifyContent: "center" }} className={classes.itemOrder1}>
                        <img src={trainStation} alt="Train Station" className={classes.headingImage} />
                </Grid>

                <Grid item md={6} sm={12} style={{ display: "flex", justifyContent: "center" }}>
                        <img src={trainView} alt="Train Station" className={classes.headingImage} />
                </Grid>
                <Grid item md={6} sm={12} >
                    <p className={classes.pTag}>
                        <span className={classes.landingHighlight}>RideChicago</span> has maps of train and bus routes and allows you to save your favorite stops for convenient access!
                    </p>
                </Grid>

                <Grid item md={6} sm={12} className={classes.itemOrder2}>
                    <p className={classes.pTag}>
                        <span className={classes.landingHighlight}>RideChicago</span> provides weather data so you always know how to dress up before going out!
                    </p>
                </Grid>
                <Grid item md={6} sm={12} style={{ display: "flex", justifyContent: "center" }} className={classes.itemOrder3}>
                        <img src={traffic} alt="Train Station" className={classes.headingImage} />
                </Grid>

            </Grid>
        </div>
    )
}


export default Home;
