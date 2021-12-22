

import { useEffect, useState } from "react";



function WeatherInfo(){
    
    
    const d = new Date();
    // let dayN = d.getDay();
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var date = (new Date()).toString().split(' ').splice(1,2).join(' ');
    // let time=d.getHours()+":"+d.getMinutes();
    let time= d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    let day= days[d.getDay()];
   
    window.navigator.geolocation.getCurrentPosition(console.log, console.log);
    
    let location="Kathmandu";

    let [weather,setWeather]=useState([]);
    let [temp,setTemp]=useState([]);
    let [geo,setlocation]=useState(["kathmandu"]);
   
    
    function readValue(value)
    {
        location=value;
       console.log(value);  
    }
    let loc;
    useEffect(()=>{
        getWeather();
    },[])

    function getWeather(){

        setlocation(location);

        //replace space with +


        loc=location.replace(/\s+/g, '+');
        console.log(loc);
        fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${loc}&units=metric&cnt=4&appid=aea7fbafa0aa1dbedbd0e07af86c83ce`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            
            setWeather(data.weather[0]);
            // console.log(weather);
            
            setTemp(data.main);
            // console.log(temp);
        })
        .catch((err)=>{
            console.log(err);
        })
        console.log(weather);
    }

    console.log(weather);
    console.log(temp);

    let icon="https://openweathermap.org/img/wn/"+weather.icon+"@4x.png";


    return(
        <div className="main">
           
            <div  className="content">
                <input type="text"  className="searchbar" placeholder="Location" onChange={ (event)=>{readValue(event.target.value)}}/>
                <button className="searchbutton" onClick={getWeather}>Search</button>
            </div>
            <p className="head">
                    {/* Current Weather */}
            </p>
            <div  className="info">
                <div className="iconcity">
                    <div className="cityTime">
                        <p className="city">
                        {geo}
                        </p>
                        <p className="time">
                            {time},{day},{date}
                        </p>
                    </div>
                    <img src={icon} alt="" className="weathericon" />
                </div>
                <div className="basic">
                    {/* <p className="day">
                    
                    </p>
                    <p className="date">
                        
                    </p> */}
                    
                    <div className="temperature">
                        <p className="temp">{Math.round(temp.temp)}­ </p> <p className="cel1">°C</p> 
                    </div>
                    <p className="condition">
                        {weather.description}
                        
                    </p>
                <div className="desc">
                    <div className="humidity">
                        <p className="hum">{temp.humidity}%</p>
                        <p className="humt">Humidity</p>
                    </div>
                    <div className="maxtemp">
                        <p className="temM">{temp.temp_max}°C</p>
                        <p className="tempt">Max</p>
                    </div>
                    <div className="mintemp">
                       <p className="minN"> {temp.temp_min}°C</p>
                       <p className="mint">Min</p>
                    </div>
                    </div>
                </div>           
            </div>
        </div>
    )

}
export default WeatherInfo;