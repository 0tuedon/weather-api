import React, { useEffect, useState } from "react";
import Rain from '../assets/images/Weather/Rain.png';
import ThunderStorm from '../assets/images/Weather/ThunderStorm.png';
import Drizzle from '../assets/images/Weather/Drizzle.png';
import Snow from '../assets/images/Weather/Snow.png';
import Moist from '../assets/images/Weather/Moist.png';
import Clear from '../assets/images/Weather/Clear.png';

const WeatherCtx = React.createContext({
    id: 0,
    status: "",
    city: {},
    country: "",
    list: [],
    current: {
        main: {}
    },
    timeZone: "",
    sunrise: 0,
    sunset: 0,
    getWeatherId: () => { }
})

export const WeatherctxProvider = (props) => {

    const [weatherForeCast, setWeatherForeCast] = useState({
        cod: 0,
        city: {
            id: 0,
        },
        country: "",
        list: [],
        timeZone: 0,
        sunrise: 0,
        sunset: 0,
        current: {
            main: {}
        }
    })

    const getWeatherId = (code) => {
        if (code >= 200 && code < 300) {
            return (
                <img src={ThunderStorm} alt='ThunderStorm' />
            )
        }
        else if (code >= 300 && code < 400) {
            return (
                <img src={Drizzle} alt='Drizzle' />
            )
        }
        else if (code >= 500 && code < 600) {
            return (
                <img src={Rain} alt='Rain' />
            )
        }
        else if (code >= 600 && code < 700) {
            return (
                <img src={Snow} alt='Snow' />
            )
        }
        else if (code >= 700 && code < 800) {
            return (
                <img src={Moist} alt='Moist' />
            )
        }
        else {
            return (
                <img src={Clear} alt='Clear Sky' />
            )
        }
    }

    useEffect(() => {
        const getFullWeather = async () => {
            const url = 'https://api.openweathermap.org/data/2.5/forecast?q=ABUJA&appid=54dd919bfdd8425a9c09edb660c119ff';
            const response = await fetch(url);
            const data = await response.json();
            setWeatherForeCast(data);
        }
        getFullWeather();
    }, [])

    return (
        <WeatherCtx.Provider
            value={
                {
                    id: weatherForeCast.city.id,
                    status: weatherForeCast.cod,
                    city: weatherForeCast.city,
                    weatherForecast: weatherForeCast.list,
                    timeZone: weatherForeCast.timeZone,
                    list: weatherForeCast.list,
                    current: weatherForeCast.list[0],
                    getWeatherId: getWeatherId
                }
            }
        >
            {props.children}
        </WeatherCtx.Provider>
    )
}
export default WeatherCtx;