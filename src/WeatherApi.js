class WeatherApi {
    constructor(){
        this.apiKey="bcb81c54972267caf865c3c2ac89e681";
        this.api="http://api.openweathermap.org/data/2.5/weather?";
    }
    async getByLatLng(lat,long){
        try{
            let url=`${this.api}lat=${lat}&lon=${long}&APPID=${this.apiKey}`;
            let res=await fetch(url);
            res= await res.json();
            return res;
        }catch(e){
            console.log("error in api");
            throw new Error(`error name:${e.name} about:${e.message}`);
    }
    }
}
export default WeatherApi;