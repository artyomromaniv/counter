import React, {ChangeEvent} from 'react';
import s from './Input.module.css'


type InputPropsType = {
    placeholder: string
    callback: (newValue: string) => void
    value: string
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value)
    }

    return (
        <div className={s.inputs}>
            <input
                className={s.input}
                placeholder={props.placeholder}
                onChange={onChangeHandler}
                value={props.value}
            />
        </div>
    )
}