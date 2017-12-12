import React, { Component } from 'react';
import time_to_text from './utils';

class Pressure extends Component{
    constructor(props){
        super(props);
        this.state = {color:"black"}
        this.state.name = props.vname;
    }
    componentWillReceiveProps(newProps){
        if(newProps.time !== this.props.time)
        {
            console.log("new Props Press:", this.props.nodeName);
            this.setState({color:"red"})
            setTimeout(()=>{this.setState({color:"black"})},1000);
        }
    }
    render(){
        return (
            <div style={{color:this.state.color}}>
            Pressure : {this.props.value.toFixed(2)}  ({time_to_text(this.props.time)})
            </div>
            );
    }
}

export default Pressure;
