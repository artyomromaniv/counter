import React, {useState} from 'react';
import {Button} from './components/button/Button';
import s from './App.module.css'


export const App = () => {

    const [count, setCount] = useState<number>(0)

    const increase = () => {
        setCount(count + 1)
    }
    const reset = () => {
        setCount(0)
    }
    const setCounterToLocalStorage = () => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }
    const getCounterFromLocalStorage = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
    }

    return (
        <div className={s.App}>
            <div>
                <h1 className={s.error ? 'error' : ''}>{count}</h1>
            </div>
            <div className={s.buttonsBlock}>
                <Button title={'Inc'} callback={increase} disabled={count === 5}/>
                <Button title={'Reset'} callback={reset} disabled={count === 0}/>
                <Button title={'Set'} callback={setCounterToLocalStorage} />
                <Button title={'Get'} callback={getCounterFromLocalStorage} />
            </div>
        </div>
    )
}





