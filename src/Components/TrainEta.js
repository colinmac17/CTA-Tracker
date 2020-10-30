import React from 'react';
import '../index.css';
// import Button from '@material-ui/core/Button';




export default function TrainEta() {

    const trainLine = ["Red", "Blue", "Green", "Yellow", "Brown", "Purple", "Orange"];
    // const items = [];

    return (
        <div>
            <h2>Select a Train Line</h2>
                {trainLine.map((value, index) => {
                    return <button type='button' key={index} style={{backgroundColor: {value}}}> {value} </button>
                })}

            <hr/>
            <button type='button' >View Trains</button>
        </div>
    
    );
}