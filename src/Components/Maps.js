import React from 'react';

const TrainLines = []
const TrainColor = ["Red", "Blue", "Brown", "Green", "Pink", "Purple", "Yellow"]
class Train{
    constructor(line,url){
        this.lineName = line;
        this.url = url;
    }
}
function AddTrain(value){
    var line = value+"Line";
    var url = "https://www.transitchicago.com/" + line + "/#map";
    var newTrain = new Train(line, url);
    TrainLines.push(newTrain);
}

const Buses = []
const BusNumber = ["1", "3", "4", "J14"]
class Bus{
    constructor(number,url){
        this.number = number;
        this.url = url;
    }
}
function AddBus(value){
    var number = value;
    var url = "https://www.transitchicago.com/assets/1/6/stoplist_"+value+".htm";
    var newBus = new Bus(number, url);
    Buses.push(newBus);
}

const BusMaps = (props) => {
    return(
        <div>
            <p>BusMaps
                <ul>
                    {Buses.map(bus => (
                        <li key = {bus}>
                            <div>{bus.number}</div>
                            <a href={bus.url} title={bus.url}>{bus.number}</a>
                        </li>
                    ))}
                </ul>
            </p>
        </div>
    )
}

const TrainMaps = (props) => {
    return(
        <div>
            <p>TrainMaps
                <ul>    
                    {TrainLines.map(train => (
                        <li key = {train}>
                            <div>{train.lineName}</div>
                            <a href={train.url} title={train.url}>{train.lineName}</a>
                        </li>
                    ))}
                </ul>
            </p>
        </div>
    )
}

const Maps = (props) => {
    return(
            <div>
                <h3>Maps</h3>  
                <BusMaps/>               
                <TrainMaps/>
            </div>
    )
}

{BusNumber.forEach(AddBus)}  
{TrainColor.forEach(AddTrain)}
export default Maps;