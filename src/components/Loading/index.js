import React from 'react';
import ReactDOM from 'react-dom';
import style from './loading.module.css'

const Loading = () => {
    return (
        <div className={style.loading}>
        <div className={style['lds-roller']}><div>
        </div><div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
        </div>
    )
}

const LoadingModal = () => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Loading />, document.querySelector("#loading"))}
        </React.Fragment>
    )
}
export default LoadingModal;