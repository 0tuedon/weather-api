import React from 'react'
import Card from '../UI/Card';
import style from './MoreForecast.module.css'
import raining from '../../assets/images/Rainny.png'
const MoreForeCast = () => {
 


    const datas = [1,2,3,4,5,6]
    return (
        <React.Fragment>
            <h3>More Forecast</h3>
            <div className={style.container}>
               {
                   datas.map((data)=>{
                    return(<Card
                    key={data}
                    >
                    <h4 className={style['card-heading']}>Tue</h4>
                    <img className={style['card-image']} src={raining} alt='Weather Type'/>
                    <p>Text</p>
                    </Card>)
                   })
             

               }
               
            </div>
        </React.Fragment>

    )
}

export default MoreForeCast;