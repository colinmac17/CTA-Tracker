import React from 'react';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { HomeOutlined, DirectionsBus, Train, Map, Star, WbSunny, Info } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    nav: {
        padding: '1rem',
        backgroundColor: '#d2d6dc',
        color: '#000',
        height: '100vh',
        //Make sure to set height to auto on mobile view
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
        },
    },
    litem: {
        display: 'block',
        marginTop: '12px',
        fontSize: '1.15rem',
    },
    licon: {
        display: 'inline-block',
    },
    link: {
        color: '#3f51b5',
        textDecoration: 'none',
        display: 'inline-block',
        marginLeft: '3px',
    },
    list: {
        listStyleType: 'none',
        textAlign: 'left',
    },
    title: {
        fontSize: '1.75rem',
        textAlign: 'left',
        fontWeight: '700',
    },
  }))

export function Nav() {
    const classes = useStyles();
    return (
        <Container className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes.litem}>
                    <h1 className={classes.title}>CTA Tracker</h1>
                </li>
                <li className={classes.litem}>
                    <span className={classes.licon}>
                        <HomeOutlined color="primary" />
                    </span>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                </li>
                <li className={classes.litem}>
                    <span className={classes.licon}>
                        <DirectionsBus color="primary" />
                    </span>
                    <Link to="/bus-eta" className={classes.link}>
                       Bus ETA
                    </Link>
                </li>
                <li className={classes.litem}>
                    <span className={classes.licon}>
                        <Train color="primary" />
                    </span>
                    <Link to="/train-eta" className={classes.link}>
                       Train ETA
                    </Link>
                </li>
                <li className={classes.litem}>
                    <span className={classes.licon}>
                        <Map color="primary"/>
                    </span>
                    <Link to="/maps" className={classes.link}>
                       Maps
                    </Link>
                </li>
                <li className={classes.litem}>
                    <span className={classes.licon}>
                        <Star color="primary"/>
                    </span>
                    <Link to="/favorites" className={classes.link}>
                       Favorites
                    </Link>
                </li>
                <li className={classes.litem}>
                    <span className={classes.licon}>
                        <WbSunny color="primary" />
                    </span>
                    <Link to="/weather" className={classes.link}>
                       Weather
                    </Link>
                </li>
                <li className={classes.litem}>
                    <span className={classes.licon}>
                        <Info color="primary" />
                    </span>
                    <Link to="/about" className={classes.link}>
                       About
                    </Link>
                </li>
            </ul>
        </Container>
    );
}