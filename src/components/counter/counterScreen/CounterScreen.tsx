import React from "react";
import s from './CounterScreen.module.css'

type CounterScreenPropsType = {
    value: number
    max: number
    min: number
    error?: string
}
export const CounterScreen = (props: CounterScreenPropsType) => {
    let titleStyle = props.value < props.max ? s.title : s.titleEnd
    let containerStyle = props.value < props.max ? s.container : s.containerEnd

    return (
        <div className={containerStyle}>
            {props.error !== '' ? <h1 className={s.errorMessage}>{props.error}</h1>
                : <h1 className={titleStyle}>{props.value}</h1>}
        </div>
    )
}