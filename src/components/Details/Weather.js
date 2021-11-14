import React from "react";
import style from './Weather.module.css';
import raining from '../../assets/images/Rainny.png'

const Weather = ()=> 
{

    return(
        <React.Fragment>
        <div className={style.container}>
            <div className={style['container-item']}>
                <img className={style['container-item-image']} src={raining} alt="raining"/>
            </div>
            <div className={style['container-item']}>
                <div className={style['container-item-temp']}>21<sup>o</sup></div>
                <div>Mostly Sunny</div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Weather;