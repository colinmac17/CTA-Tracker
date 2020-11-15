import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      flexGrow: 1,
    },
    inline: {
      display: 'inline',
    },
    title: {
      textAlign: 'center',
      padding: '1rem',
    },
    rowList: {
        marginLeft: '2rem',
        padding: 'auto',
    },
    ml2: {
        width: '75px',
        marginLeft: '14px'
    },
    team: {
        margin: '1rem',
        padding: '1rem',
        [theme.breakpoints.down('xs')]: {
           marginLeft: '0.5rem',
           paddingLeft: '0.5rem',
        },
    }
  }));

const About = (props) => {
    const classes = useStyles();
    return(
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h2 className={classes.title}>Tech Used</h2>
                        <Grid container spacing={4} className={classes.rowList}>
                            <Grid item xs={6} sm={6} md={2}>
                                <img height={75} width={75} src={"https://www.freeiconspng.com/uploads/w3c-html5-logo-0.png"}  alt={"HTML"}/>
                                <p className={classes.ml2}>HTML</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2}>
                                <img height={75} width={75} src={"https://p7.hiclipart.com/preview/509/571/818/cascading-style-sheets-logo-css3-html-web-development-world-wide-web.jpg"}  alt={"HTML"}/>
                                <p className={classes.ml2}>CSS</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2}>
                                <img height={75} width={75} src={"https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"}  alt={"HTML"}/>
                                <p className={classes.ml2}>JavaScript</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2}>
                                <img height={75} width={75} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"}  alt={"HTML"}/>
                                <p className={classes.ml2}>React</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2}>
                                <img height={75} width={75} src={"https://material-ui.com/static/logo.png"}  alt={"HTML"}/>
                                <p className={classes.ml2}>Material UI</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2}>
                                <img height={75} width={75} src={"https://www.netlify.com/img/press/logos/logomark.png"}  alt={"HTML"}/>
                                <p className={classes.ml2}>Netlify</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <h2 className={classes.title}>The Team</h2>
                        <Grid container spacing={8} className={classes.team}>
                            <Grid item xs={12} sm={6}>
                                <Grid container spacing={8} className={classes.rowList}>
                                    <Grid item xs={2}>
                                        <Avatar alt={"CM"} src={"https://avatars1.githubusercontent.com/u/19336132?s=460&u=d1faeb250cda90659be3ad4c22a14e0c046598a6&v=4"}/>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <p>Colin McAtee</p>
                                        <a href={"https://github.com/colinmac17"} target={"_blank"}>Github</a>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container spacing={8} className={classes.rowList}>
                                    <Grid item xs={2}>
                                        <Avatar alt={"HP"} src={"https://avatars1.githubusercontent.com/u/9543054?s=460&v=4"}/>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <p>Harsh Puvvada</p>
                                        <a href={"https://github.com/puvvadaharsha"} target={"_blank"}>Github</a>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container spacing={8} className={classes.rowList}>
                                    <Grid item xs={2}>
                                        <Avatar alt={"PR"} src={"https://avatars1.githubusercontent.com/u/9091293?s=460&u=c6990d9ab40cfb4ec6af24e861351e959392f9c8&v=4"}/>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <p>Pedro Rebollar</p>
                                        <a href={"https://github.com/prebollar15"} target={"_blank"}>Github</a>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container spacing={8} className={classes.rowList}>
                                    <Grid item xs={2}>
                                        <Avatar alt={"YQ"} src={"https://avatars2.githubusercontent.com/u/56770684?s=460&v=4"}/>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <p>Yu Qian</p>
                                        <a href={"https://github.com/rayqian"} target={"_blank"}>Github</a>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>

    )
}

export default About;

