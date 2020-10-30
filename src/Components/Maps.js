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
        this.key = Date.now()
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
            <p>BusMaps</p>
                <ul>
                    {Buses.map(bus => (
                        <div key = {bus.number}>
                            <li>{bus.number}</li>
                            <a href={bus.url} title={bus.url}>{bus.number}</a>
                        </div>
                    ))}
                </ul>
        </div>
    )
}

const TrainMaps = (props) => {
    
    return(
        <div>
            <p>TrainMaps</p>
                <ul>    
                    {TrainLines.map(train => (
                        <div key = {train.lineName}>
                            <li>{train.lineName}</li>
                            <a href={train.url} title={train.url}>{train.lineName}</a>
                        </div>
                    ))}
                </ul>
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
BusNumber.forEach(AddBus) 
TrainColor.forEach(AddTrain)
export default Maps;