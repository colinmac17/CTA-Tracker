import React from 'react';
import { Link } from "react-router-dom";

const TemperatureWidget = (props) => {
    return(
        <div>
            <p>Current Temp: 33°F</p>
        </div>
    )
}

const AlertWidget = (props) => {
    return(
        <div>
            <h3>Current CTA alerts:</h3>
            <ol>
                <li>Alert 1: Info about alert 1</li>
                <li>Alert 2: Info about alert 2</li>
                <li>Alert 3: Info about alert 3</li>
            </ol>
        </div>
    )
}

const Home = (props) => {
    return(
            <div>
                <TemperatureWidget />

                <Link to="/bus-eta">
                    <button>
                        <img src="" alt="Bus Button"/>
                        <p>Bus Button</p>
                    </button>
                </Link>

                <Link to="/train-eta">
                    <button>
                        <img src="" alt="Train Button"/>
                        <p>Train Button</p>
                    </button>
                </Link>
    
                <AlertWidget />
            </div>
    )
}


export default Home;