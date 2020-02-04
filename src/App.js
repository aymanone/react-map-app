import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import WeatherDisplay from "./WeatherDisplay";
import WeatherApi from "./WeatherApi";
class App extends Component {
    constructor(props){
        super(props);
        this.weatherApi=new WeatherApi();
        this.mapStyles={
  width: '100%',
  height: '100%'
};
this.mapClicked=this.mapClicked.bind(this);
this.getWeather=this.getWeather.bind(this);
this.state={
      latitude:47.444 ,
      longitude: -122.176 ,
       info:<WeatherDisplay />
    }
   
    
    }
 async getWeather(event){
    try{
    let res=await this.weatherApi.getByLatLng(this.state.latitude,this.state.latitude);
    this.setState({
        info:<WeatherDisplay response={true} info={res}/>
                  },
                  function (){console.log("new info")}
                 );
    
   
    }catch(err){
        console.log(err.message);
        this.setState({
            info:<WeatherDisplay response={true}/>
        },function(){console.log("no new info");});
    }
}
mapClicked(mapProps, map, clickEvent) {
let lat=clickEvent.latLng.lat();
let lng=clickEvent.latLng.lng();
this.setState({latitude:lat,longitude:lng});
}
componentDidMount(){
      (async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      }), 
     err=> console.log("error")
    );  
        
    })(); 
}
     
   render(){
       return(
           <>
          <button onClick={this.getWeather}>see the weather of that place</button>
           {this.state.info}
            <Map
           onClick={this.mapClicked}
          google={this.props.google}
           style={this.mapStyles}
          zoom={8}
          
          initialCenter={{ lat:this.state.latitude, lng: this.state.longitude}}
        center={{ lat:this.state.latitude, lng: this.state.longitude}}
          
        />
           </>
           
           
       );
   }
}

export default GoogleApiWrapper({
  apiKey: ''
})(App);
