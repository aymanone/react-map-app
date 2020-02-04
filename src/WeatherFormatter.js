class WeatherFormatter{
    caseInform(info,response){
        if(! response){return "wait for response";}
        if(! info){return "getting no info";}
        return "get weather's info";
    }
    showWind(info,response){
       if (! response || ! info){return "";}
       if( !info.wind){return "no wind";}
        return `wind speed is ${info.wind.speed}`;
    }
    
    showClouds(info,response){
        if(! response || ! info){return "";}
        if(! info.clouds){return "no clouds";}
        return `clouds covered ${info.clouds.all}%`;
    }
    showWeather(info,response){
        if(! response || ! info){return "";}
        if(! info.weather){return "there's no description";}
        return `the state of the weather is ${info.weather[0].description}`;
    }
}
export default WeatherFormatter;