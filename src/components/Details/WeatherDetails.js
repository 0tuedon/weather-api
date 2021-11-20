import React, { useContext } from "react"
import WeatherCtx from "../../store/weatherContext";
import style from "./WeatherDetails.module.css";
const WeatherDetails = () => {
    const ctx = useContext(WeatherCtx)
    const {list,city} =ctx ?? {}
    const {main,wind}  = list?.[0] ?? {}
    let {speed} = wind ?? {}
    let {temp_min,temp_max} = main
    temp_min = temp_min.toFixed(0) -273
    temp_max = temp_max.toFixed(0) -273
    
    let {sunrise,sunset} = city
     sunrise = sunrise * 1000
    sunset = sunset *1000
    let sunriseDateString = new Date(sunrise)
    let sunsetDateString  =  new Date(sunset)
    const dayDate = (dayDate)=> dayDate.toLocaleTimeString('en-NG',{
        hour:'2-digit',
        minute:'2-digit'})
   let sunriseDate = dayDate(sunriseDateString)
   let sunsetDate  = dayDate(sunsetDateString)

    return (
        <React.Fragment>
            <div className={style.container}>
                <div className={style['container-item']}>
                    <h3>{temp_max}</h3>
                    <p>High</p>
                </div>
                <div className={style['container-item']}>
                    <h3>{speed} M/S</h3>
                    <p>Wind</p>
                </div>
                <div className={style['container-item']}>
                    <h3>{sunriseDate}</h3>
                    <p>SunRise</p>
                </div>
                <div className={style['container-item']}>
                    <h3>{temp_min}</h3>
                    <p>Low</p>
                </div>
                <div className={style['container-item']}>
                    <h3>{main.humidity}</h3>
                    <p>Humidity</p>
                </div>
                <div className={style['container-item']}>
                    <h3>{sunsetDate}</h3>
                    <p>Sunset</p></div>
            </div>
        </React.Fragment>
    )
}


export default WeatherDetails;