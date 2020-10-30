import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      flexGrow: 1,
    },
    inline: {
      display: 'inline',
    },     
  }));

const TeamInfo = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <Typography
                    component="span"
                    variant="body1"
                    className={classes.inline}
                    color="textPrimary"
                >
                    About us:  
                </Typography>                
                <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    {/* <ListItemAvatar>
                    <Avatar alt="Pedro" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar> */}
                    <ListItemText
                    primary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Pedro Rebollar  
                            </Typography>          
                        </React.Fragment>
                    }
                    secondary = {
                        <Link href="https://github.com/prebollar15">
                                Github
                            </Link>      
                    }
                    />
                </ListItem>
                <Divider light />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Harsha Puvvada  
                            </Typography>          
                        </React.Fragment>
                    }
                    secondary = {
                        <Link href="https://github.com/puvvadaharsha">
                                Github
                            </Link>      
                    }
                    />
                </ListItem>
                <Divider light />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Yu Qian  
                            </Typography>          
                        </React.Fragment>
                    }
                    secondary = {
                        <Link href="https://github.com/rayqian">
                                Github
                            </Link>      
                    }
                    />
                </ListItem>
                <Divider light />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Colin McAtee  
                            </Typography>          
                        </React.Fragment>
                    }
                    secondary = {
                        <Link href="https://github.com/colinmac17">
                                Github
                            </Link>      
                    }
                    />
                </ListItem>
                <Divider light />
                </List>         
        </div>     
    )
}

const TechUsed = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Typography
                component="span"
                variant="body1"
                className={classes.inline}
                color="textPrimary"
            >
                Technologies used:  
            </Typography>    

            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary={
                
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            ReactJS  
                        </Typography>            
                    } />
                </ListItem>
                <Divider light />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary={
                
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            JSX  
                        </Typography>            
                    } />
                </ListItem>
                <Divider light />
                <ListItem alignItems="flex-start">
                <ListItemText
                primary={
            
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        Material-UI  
                    </Typography>            
                } />
                </ListItem>
                <Divider light />
                <ListItem alignItems="flex-start">
                <ListItemText
                primary={
            
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        Github  
                    </Typography>            
                } />
                </ListItem>
                <Divider light />
            </List>
        </div>
    )
}

const About = (props) => {
    return(
            <React.Fragment>
                <h2>About</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5}>
                        <TeamInfo/>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TechUsed/>
                    </Grid>
                </Grid>
            </React.Fragment>

    )
}

export default About;

