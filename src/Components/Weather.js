import React from 'react';
import Container from '@material-ui/core/Container';

const Weather = (props) => {
    return(
        <div>
            <h2>Current Weather in Chicago</h2>
            <img src="" alt="Current Weather Description"/>

            <div>
                <h5>Current Temperature: </h5>
                <p>33°F</p>
            </div>

            <div>
                <h5>Feels Like: </h5>
                <p>35°F</p>
            </div>

            <button>F/C</button>
        </div>
    );
}

export default Weather;