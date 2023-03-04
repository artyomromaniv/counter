import React from 'react';
import s from './Button.module.css'


type ButtonPropsType = {
    title: string
    callback: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div className={s.buttons}>
            <button
                className={s.btn}
                onClick={onClickHandler}
                disabled={props.disabled}
            >
                {props.title}
            </button>
        </div>
    )
}
