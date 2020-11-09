import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridStyle: {
        marginTop:'2rem',
        fontSize: '1.5rem',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '200px',
        },
    },

    landingHighlight: {
        color: '#FFB8B8',
        fontWeight: '600',
        fontStyle: 'Italic',
    },

    imgStyle: {
        width: '500px',
        height: '250px',
    }


  }));

const Home = (props) => {
    const classes = useStyles();
    return(
        <Container>
            <>
                <Grid container spacing={2} className={classes.gridStyle} alignItems="center" justify="center">

                    <Grid item md={6} sm={12}>
                        <p>
                            <span className={classes.landingHighlight}>RideChicago</span> helps you get estimated time of arrival for Chicago trains and Buses!
                        </p>
                    </Grid>

                    <Grid item md={6} sm={12}>
                        <img className={classes.imgStyle} src="../assets/illustrations/trainStation-Illustration.svg"        alt="Train Station"/>
                    </Grid>

                    <Grid item xs={12} sm={6}>

                    </Grid>
                    <Grid item xs={6} sm={3}>

                    </Grid>
                    <Grid item xs={6} sm={3}>

                    </Grid>
                    <Grid item xs={6} sm={3}>

                    </Grid>
                    <Grid item xs={6} sm={3}>

                    </Grid>
                </Grid>
            </>
        </Container>
    )
}


export default Home;
