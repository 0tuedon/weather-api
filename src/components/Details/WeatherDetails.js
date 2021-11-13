import React from "react"
import style from "./WeatherDetails.module.css";
const WeatherDetails = () => {

    return (
        <React.Fragment>
            <div className={style.container}>
                <div className={style['container-item']}>
                    <h3>23</h3>
                    <p>High</p>
                </div>
                <div className={style['container-item']}>
                    <h3>7MPH</h3>
                    <p>Wind</p>
                </div>
                <div className={style['container-item']}>
                    <h3> 06:33</h3>
                    <p>SunRise</p>
                </div>
                <div className={style['container-item']}>
                    <h3>14</h3>
                    <p>Test</p>
                </div>
                <div className={style['container-item']}>
                    <h3> 0</h3>
                    <p> Hello</p>
                </div>
                <div className={style['container-item']}>
                    <h3> 20:57 </h3>
                    <p>Sunset</p></div>
            </div>
        </React.Fragment>
    )
}


export default WeatherDetails;