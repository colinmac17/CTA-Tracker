import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Home} from './Components/Home';
import {About} from './Components/About';
import {TrainEta} from './Components/TrainEta';
import {BusEta} from './Components/BusEta';
import {Maps} from './Components/Maps';
import {Favorites} from './Components/Favorites';
import {Weather} from './Components/Weather';
import {NoMatch} from './Components/NoMatch';

function App() {
  return (
    <Router>
      <div>
        <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bus-eta">Bus ETA</Link>
          </li>
          <li>
            <Link to="/train-eta">Train ETA</Link>
          </li>
          <li>
            <Link to="/maps">Maps</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        </header>
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
      </div>
    </Router>
  );
}

export default App;
