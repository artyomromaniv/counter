import React, {useEffect, useState} from 'react';
import {Button} from './components/button/Button';
import s from './App.module.css'


export const App = () => {

    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        getCounterFromLocalStorage()
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    },[value])

    const increase = () => {
        setValue(value + 1)
    }
    const reset = () => {
        setValue(0)
    }

    const getCounterFromLocalStorage = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    return (
        <div className={s.App}>
            <div>
                <h1 className={s.error}>{value}</h1>
            </div>
            <div className={s.buttonsBlock}>
                <Button title={'Inc'} callback={increase} disabled={value === 5}/>
                <Button title={'Reset'} callback={reset} disabled={value === 0}/>
            </div>
        </div>
    )
}





