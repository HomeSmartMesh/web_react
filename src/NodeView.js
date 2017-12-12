import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import Temperature from './Temperature';
import Light from './Light';
import Pressure from './Pressure';
import Humidity from './Humidity';

import time_to_text from './utils'

function SensorsMap(props){
    const listitems = Object.keys(props.sensors).map((sensor) =>
        {
            if(sensor === "temperature")
            {
                return (
                    <Temperature    key={props.nodeName+sensor}
                                    nodeName = {props.nodeName}
                                    value={props.sensors[sensor].Values[0]}
                                    time={props.sensors[sensor].Times[0]}
                    />
                );
            }
            else if(sensor === "light")
            {
                return (
                    <Light  key={props.nodeName+sensor}
                            nodeName = {props.nodeName}
                            value={props.sensors[sensor].Values[0]}
                            time={props.sensors[sensor].Times[0]}
                    />
                );
            } if(sensor === "pressure")
            {
                return (
                    <Pressure   key={props.nodeName+sensor}
                                nodeName = {props.nodeName}
                                value={props.sensors[sensor].Values[0]}
                                time={props.sensors[sensor].Times[0]}
                    />
                );
            } if(sensor === "humidity")
            {
                return (
                    <Humidity   key={props.nodeName+sensor}
                                nodeName = {props.nodeName}
                                value={props.sensors[sensor].Values[0]}
                                time={props.sensors[sensor].Times[0]}
                    />
                );
            } else
            {
                return (
                    <div key={props.nodeName+sensor}>
                        {sensor} : {props.sensors[sensor].Values[0].toFixed(2)}  ({time_to_text(props.sensors[sensor].Times[0])})
                    </div>
                    
                );
            }
        }
        
    );

        return(
            <div className="NodeView">{listitems}</div>
        );
}

class NodeView extends Component{
    render(){
        return(
        <center>
            <h2><Label>{this.props.nodeName}</Label></h2>
            <SensorsMap sensors={this.props.sensors} nodeName={this.props.nodeName}/> 
        </center>
        );
    }
}

export default NodeView;
