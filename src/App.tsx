import React, {useEffect, useState} from 'react';
import {Button} from './components/button/Button';
import s from './App.module.css'
import {Input} from "./components/input/Input";


export const App = () => {

    const [value, setValue] = useState<number>(0)
    const [initValue,setInitValue] = useState('')
    const [maxValue,setMaxValue] = useState('')

    useEffect(() => {
        getCounterFromLocalStorage()
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    },[value])


    const getCounterFromLocalStorage = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    const findInitValue = (newValue: string) => {
        if (+newValue < 0) {
            setInitValue('')
        }
        else setInitValue(newValue)
    }

    const findMaxValue = (newValue: string) => {
        if (+newValue < 0) {
            setMaxValue('')
        }
        else setMaxValue(newValue)
    }

    const increase = () => {
        setValue(value + 1)
    }
    const reset = () => {
        setValue(0)
        setMaxValue('')
        setInitValue('')
    }

    const setValueCount = () => {
        setInitValue(initValue)
        setMaxValue(maxValue)
        setValue(+initValue)
    }


    return (
        <div className={s.App}>
            <div>
                <h1 className={s.counter}>{value}</h1>
            </div>
            <div className={s.inputsBlock}>
                <Input placeholder={'initial value'} callback={findInitValue} value={initValue}/>
                <Input placeholder={'max value'} callback={findMaxValue} value={maxValue}/>
            </div>
            <div className={s.buttonsBlock}>
                <Button title={'Inc'} callback={increase} disabled={value === +maxValue}/>
                <Button title={'Reset'} callback={reset} disabled={value === 0}/>
                <Button title={'Set'} callback={setValueCount} />
            </div>
        </div>
    )
}





