

import { useEffect, useState } from "react";



function WeatherInfo(){
    
    let day="sunday";
    const d = new Date();
    let dayN = d.getDay();
    
    var date = (new Date()).toString().split(' ').splice(1,2).join(' ');
    
    if(dayN==0)
    {
        day="Sunday";
    }
    if(dayN==1)
    {
        day="Monday";
    }
    if(dayN==2)
    {
        day="Tuesday";
    }
    if(dayN==3)
    {
        day="Wednesday";
    }
    if(dayN==4)
    {
        day="Thursday";
    }
    if(dayN==5)
    {
        day="Friday";
    }
    if(dayN==6)
    {
        day="Saturday";
    }
    
    
    window.navigator.geolocation.getCurrentPosition(console.log, console.log);
    
    let location="Kathmandu";

    let [weather,setWeather]=useState([]);
    let [temp,setTemp]=useState([]);
    let [geo,setlocation]=useState(["kathmandu"]);
    var weather1;
    
    function readValue(value)
    {
        location=value;
       console.log(value);  
    }

    useEffect(()=>{
        getWeather();
    },[])

    function getWeather(){

        setlocation(location);

        fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${geo}&units=metric&cnt=4&appid=aea7fbafa0aa1dbedbd0e07af86c83ce`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            // weather1=data;
            // console.log(weather1);
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

    return(
        <div className="main">
           
            <div  className="content">
                <input type="text"  className="searchbar" placeholder="Location" onChange={ (event)=>{readValue(event.target.value)}}/>
                <button className="searchbutton" onClick={getWeather}>Search</button>
            </div>
            <p className="head">
                    Current Weather
            </p>
            <div  className="info">
                <div className="basic">
                    <p className="day">
                    {day}
                    </p>
                    <p className="date">
                        {date}
                    </p>
                    <p className="city">
                    {geo}
                    </p>
                    <p className="temperature">
                        {temp.temp}­°C
                    </p>
                    <p className="condition">
                        {weather.description}
                        
                    </p>
                </div>
                <div className="detail"></div>
            
            </div>
        </div>
    )

}
export default WeatherInfo;