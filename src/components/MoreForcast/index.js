/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Card from '../UI/Card';
import style from './MoreForecast.module.css'
import WeatherCtx from '../../store/weatherContext';
const MoreForeCast = () => {
    const [forecast,setForecast] = useState([])
    const day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const ctx = useContext(WeatherCtx)
    const { list } = ctx
    const unixToDateString = (unix) => {
        return new Date(unix * 1000);
    }
    
    const getData = useCallback( () => {
        const weather = list.filter(
            (data, index) => {
             let weatherDate = unixToDateString(data.dt).getDay()
             let today = new Date().getDay()

             return weatherDate !== today
            }
        )
        const threeDayForecast = weather.filter((data,index)=>
        {
            let dayLoop = 8
            return index % dayLoop === 0
        }
        )
        const threeDaysForecast =  threeDayForecast.filter((data,index)=>index < 3)
        setForecast(threeDaysForecast)

     return weather
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[list])
    
    useEffect(()=>{
        getData();
        
    },[])
    return (
        <React.Fragment>
            <h3>Forecast for Next 3 Days</h3>
            <div className={style.container}>
                {
                    forecast.map((data, index) => {
                        const weatherId = ctx.getWeatherId(data.weather[0].id)
                        const {main} = data
                        let {temp} = main
                        temp = temp - 273

                        return (<Card
                            key={index}
                        >
                            <h4 className={style['card-heading']}>{day[unixToDateString(data.dt).getDay()]}
                            </h4>
                            <img className={style['card-image']} src={weatherId.props.src} alt='Weather Type'
                             
                            />
                            <p>{temp.toFixed(0)}<sup>o</sup> C</p>
                        </Card>)
                    })
                }
            </div>
        </React.Fragment>
    )
}
export default MoreForeCast;