import { useContext } from 'react';
import WeatherCtx from '../../store/weatherContext';
import style from './Header.module.css'

const Header = ()=>
{
    const ctx = useContext(WeatherCtx)
    const timeZone = ctx.city.timezone/3600
    const {list} =ctx
    const{dt_txt} = list?.[0] ?? {}
    const stringDate = new Date(dt_txt)

    return(
        <header className={style.heading}>
            <h1 className={style['h1-heading']}>{ctx.city.name},{ctx.city.country}</h1>
            <p className={style['p-heading']}>{stringDate.toDateString()} GMT ({timeZone>=0?'+':'-'}{timeZone})</p>
        </header>
    )
}
export default Header;