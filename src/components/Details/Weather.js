import React from "react";
import style from './Weather.module.css';


const Weather = ()=> 
{

    return(
        <React.Fragment>
        <div className={style.container}>
            <div className={style['container-item']}>
                Icon
            </div>
            <div className={style['container-item']}>
                <div>21<sup>o</sup></div>
                <div>Mostly Sunny</div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Weather;