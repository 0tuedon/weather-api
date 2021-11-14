import style from './Card.module.css'
const Card = (props)=>
{
    return(
        <div className={style['card-container']}>
            {props.children}
        </div>
    )
}

export default Card;