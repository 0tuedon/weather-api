import React, { useEffect,useState } from "react";
const WeatherCtx = React.createContext({
    id:0,
    status:"",
    city:{},
    country:"",
    list:[],
    current:{
        main:{}
    },
    timeZone:"",
    sunrise:0,
    sunset:0,
})
export const WeatherctxProvider = (props)=>
{
    
const [weatherForeCast,setWeatherForeCast] = useState({
    cod:0,
    city:{
        id:0,
    },
    country:"",
    list:[],
    timeZone:0,
    sunrise:0,
    sunset:0,
    current:{
        main:{}
    }
})
useEffect(()=>{
    const getFullWeather = async ()=>{
        const url = 'https://api.openweathermap.org/data/2.5/forecast?q=ABUJA&appid=54dd919bfdd8425a9c09edb660c119ff';
        const response = await fetch(url);
        const data   = await response.json();
        setWeatherForeCast(data);
        
      }
      getFullWeather()
     
},[])
return (
    <WeatherCtx.Provider
    value={
        {
    id:weatherForeCast.city.id,
    status:weatherForeCast.cod,
    city:weatherForeCast.city,
    weatherForecast:weatherForeCast.list,
    timeZone:weatherForeCast.timeZone,
    list:weatherForeCast.list,
    current:weatherForeCast.list[0],
        }
    }
    >
    {props.children}
    </WeatherCtx.Provider>
)
}

 export default WeatherCtx;