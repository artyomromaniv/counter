import React from 'react';
import s from './ContolPanel.module.css'
import {Button} from "../button/Button";


type ControlPanelPropsType = {
    incCounter: () => void
    decCounter: () => void
    resetCounter: () => void
    disabled?: boolean
    value: number
    max: number
    min: number
}

export const ControlPanel = (props: ControlPanelPropsType) => {

    return (
        <div className={s.container}>
            <Button title={'INC'} callback={props.incCounter} disabled={props.value === props.max}/>
            <Button title={'DEC'} callback={props.decCounter} disabled={props.value === props.min}/>
            <Button title={'RESET'} callback={props.resetCounter} disabled={props.value === props.min}/>
        </div>
    )
}