import style from './Header.module.css'

const Header = ()=>
{
    
    return(
        <header className={style.heading}>
            <h1 className={style['h1-heading']}>London,UK</h1>
            <p className={style['p-heading']}> Saturday 13th August</p>
        </header>
    )
}

export default Header;