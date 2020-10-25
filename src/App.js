import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import {About} from './Components/About';
import {TrainEta} from './Components/TrainEta';
import {BusEta} from './Components/BusEta';
import {Maps} from './Components/Maps';
import {Favorites} from './Components/Favorites';
import Weather from './Components/Weather';
import {NoMatch} from './Components/NoMatch';
import {Nav} from './Components/Nav';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//@see https://material-ui.com/components/grid/#grid-with-breakpoints for documentation
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

/**
 * We use the Grid component to make a responsive layout
 * On small screens and above the navbar is the leftmost three columns and the app components are the right most 9.
 * On mobile devices, the navbar is on top with components below
 */
function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Nav />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/favorites">
                  <Favorites />
                </Route>
                <Route exact path="/maps">
                  <Maps />
                </Route>
                <Route exact path="/bus-eta">
                  <BusEta />
                </Route>
                <Route exact path="/train-eta">
                  <TrainEta />
                </Route>
                <Route exact path="/weather">
                  <Weather />
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
