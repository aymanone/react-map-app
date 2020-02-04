import React, { Component } from 'react';
import WeatherFormatter from "./WeatherFormatter";
class WeatherDisplay extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
   static getDerivedStateFromProps(props,state){
       let weatherFormatter=new WeatherFormatter();
       return {
           caseInform:
           weatherFormatter.caseInform(props.info,props.response),
           weather:
           weatherFormatter.showWeather(props.info,props.response),
           wind:
           weatherFormatter.showWind(props.info,props.response),
           clouds:
           weatherFormatter.showClouds(props.info,props.response)
           
       };
        
    }
    
    render(){
    
        return <div>
            <p>state:{this.state.caseInform}</p>
            <p>weather:{this.state.weather}</p>
            <p>clouds:{this.state.clouds}</p>
            <p>wind:{this.state.wind}</p>
            </div>;
    }
}
WeatherDisplay.defaultProps={
    info:{},
    response:false
};
export default WeatherDisplay;