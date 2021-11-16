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
    const today = new Date().getDay()
    let Weatherarray = []
    const getData = useCallback( () => {
        const weather = list.filter(
            (data, index) => {
                const date = unixToDateString(data.dt)
                if (date.getDay() === today + 1 && today+1 <7) {
                    if (unixToDateString(data.dt).getHours() === 13) {
                        Weatherarray.push(data);
                    }
                }
                else if (date.getDay() === today + 2 && today+2 <7) {
                    if (unixToDateString(data.dt).getHours() === 13) {
                      Weatherarray.push(data);
                    }
                }
                else if (date.getDay() === today + 3 && today+3 <7) {
                    if (unixToDateString(data.dt).getHours() === 13) {
                        Weatherarray.push(data);  
                    }
                }
                else if (date.getDay() === today + 4 && today+4<7) {
                    if (unixToDateString(data.dt).getHours() === 13) {
                         Weatherarray.push(data);
                        
                    }
                }
                else if (date.getDay() === today + 5 && today+4 <7) {
                    if (unixToDateString(data.dt).getHours() === 13) {
                         Weatherarray.push(data);
                    }
                }
                else if (date.getDay() === today + 5 && today+5 <7) {
                    if (unixToDateString(data.dt).getHours() === 13) {
                         Weatherarray.push(data);
                    }
                }
                else if (date.getDay() === today + 6&& today+6 <7) {
                    if (unixToDateString(data.dt).getHours() === 13) {
                         Weatherarray.push(data);
                    }
                }
                
               
                return Weatherarray ;

            }
           
        )
     return weather
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[today,list])
    console.log(forecast)
        useEffect(()=>{
                getData();
            setForecast(Weatherarray)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
    
    return (
        <React.Fragment>
            <h3>More Forecast</h3>
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
                            <h4 className={style['card-heading']}>{day[unixToDateString(data.dt).getDay()]}</h4>
                            <img className={style['card-image']} src={weatherId.props.src} alt='Weather Type' />
                            <p>{temp.toFixed(0)}<sup>o</sup> C</p>
                        </Card>)
                    })
                }
            </div>
        </React.Fragment>
    )
}
export default MoreForeCast;