import React, { useContext,useState } from "react"
import WeatherCtx from "../../store/weatherContext"
import style from './Search.module.css'
const Search = (props)=>{
    const ctx =  useContext(WeatherCtx)
    const [location,setLocation] = useState("")
    const weatherLocation = (event)=>
    {
        const {value } = event.target
        setLocation(value)
    }
    const onSubmit =(event)=>{
        ctx.setFinalLocation(location)
        event.preventDefault();
        setLocation("")
    }
    return(
        <div className={style['search-container']}>
            <form onSubmit={onSubmit}>
            <div>
                <input onChange={weatherLocation} value={location}  id='weatherSearch' placeholder="search for a City"/>
            </div>
            </form>
        </div>
    )
}



export default Search;