import {useEffect,useState} from 'react';
function card(){

    let [weather,setWeather]=useState([]);
    
    let loc="newyork";
    useEffect(()=>{

       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=aea7fbafa0aa1dbedbd0e07af86c83ce`)

        .then((res)=>res.json())
        .then((data)=>{
            
            console.log(data);
          
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <div className="main">
            
        </div>
    )
}
export default card;