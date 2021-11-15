import React, { useContext } from "react";
import style from './Weather.module.css';
import raining from '../../assets/images/Rainny.png'
import WeatherCtx from "../../store/weatherContext";

const Weather = (props)=> 
{
    const ctx = useContext(WeatherCtx);
    const {list} = ctx
    const current = list.filter((weather,index)=>index===0)
    const {main,weather} = current[0]
    const {temp} = main
    const {description} = weather[0]
    let tempinCelsius = temp-273.33

    
   
    return(
        <React.Fragment>
        <div className={style.container}>
            <div className={style['container-item']}>
                <img className={style['container-item-image']} src={raining} alt="raining"/>
            </div>
            <div className={style['container-item']}>
                <div className={style['container-item-temp']}>{tempinCelsius.toFixed(0)}<sup>o</sup></div>
                <div className={style.description}>{description}</div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Weather;