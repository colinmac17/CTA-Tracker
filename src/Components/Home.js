import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '2rem',
        fontSize: '1.5rem',
        fontWeight:'200',
      },

    landingHighlight: {
        color: '#FFB8B8',
        fontWeight: '600',
        fontStyle: 'Italic',
    },

    imgStyle: {
        width: '500px',
        height: '250px',
    },
    pTag:{
        alignItems: "center",
        justifyContent: "center",
    }
  }));

const Home = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root} >
            <Grid container direction="row" spacing={1} style={{ minHeight: '100vh' }}>
                <Grid item md={6} sm={12}>
                    <p className={classes.pTag}>
                        <span className={classes.landingHighlight}>RideChicago</span> helps you get estimated time of arrival for Chicago trains and Buses!
                    </p>
                </Grid>
                <Grid item md={6} sm={12} >
                    <p>
                        <span className={classes.landingHighlight}>RideChicago</span> helps you get estimated time of arrival for Chicago trains and Buses!
                    </p>
                </Grid>
                <Grid item md={6} sm={12} >
                    <p>
                        <span className={classes.landingHighlight}>RideChicago</span> helps you get estimated time of arrival for Chicago trains and Buses!
                    </p>
                </Grid>
                <Grid item md={6} sm={12} >
                    <p>
                        <span className={classes.landingHighlight}>RideChicago</span> helps you get estimated time of arrival for Chicago trains and Buses!
                    </p>
                </Grid>
                <Grid item md={6} sm={12} >
                    <p>
                        <span className={classes.landingHighlight}>RideChicago</span> helps you get estimated time of arrival for Chicago trains and Buses!
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}


export default Home;
