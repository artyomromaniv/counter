import React, {useEffect, useState} from 'react';
import s from './Counter.module.css'
import {Input} from "./input/Input";
import {ControlPanel} from "./controlPanel/ContorlPanel";
import {SettingsCounter} from "./settingsCounter/SettingsCounter";



export type StorageType = {
    START_VALUE: number
    MAX_VALUE: number
    STEP_VALUE: number
}

export const Counter = () => {
//useState
    const [storage, setStorage] = useState<StorageType>({
        START_VALUE: 0,
        MAX_VALUE: 5,
        STEP_VALUE: 1
    })
    const [value, setValue] = useState<number>(0)
    const [initValue,setInitValue] = useState('')
    const [maxValue,setMaxValue] = useState('')
    const [settings,setSettings] = useState('off')
    const [error, setError] = useState('')

//useEffect
    useEffect(() => {
        getCounterFromLocalStorage()
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    },[value])

    useEffect(() => {
        let local_storage = localStorage.getItem('counter_settings')
        let local_settings = localStorage.getItem('settings')
        if (local_storage) {
            let storage_get = JSON.parse(local_storage)
            setStorage(storage_get)
            setValue(storage_get.START_VALUE)
        }
        if (local_settings) {
            setSettings(JSON.parse(local_settings))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings))
    }, [settings])

    useEffect(() => {
        let local_storage = {
            START_VALUE: storage.START_VALUE,
            MAX_VALUE: storage.MAX_VALUE,
            STEP: storage.STEP_VALUE
        }
        localStorage.setItem('counter_settings', JSON.stringify(local_storage))
    }, [storage])


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

    const incCounter = () => {
        if (value < storage.MAX_VALUE) {
            setValue(value + storage.STEP_VALUE)
        }
    }
    const decCounter = () => {
        if (value > storage.START_VALUE) {
            setValue(value - storage.STEP_VALUE)
        }
    }
    const resetCounter = () => {
        setValue(storage.START_VALUE)
    }

    const changeSettings = (newStorage: StorageType) => {
        setStorage(newStorage)
        setValue(newStorage.START_VALUE)
        setError('')
    }


    return (
        <div className={s.App}>
                <div className={s.settingsCounterBlock}>
                    <SettingsCounter
                        storage={storage}
                        changeSettings={changeSettings}
                        setSettings={setSettings}
                        setError={setError}
                        error={error}/>
                </div>
            <div>
                <h1 className={s.counter}>{value}</h1>
            </div>

            <div className={s.buttonsBlock}>
                <ControlPanel
                    incCounter={incCounter}
                    decCounter={decCounter}
                    resetCounter={resetCounter}
                    value={value}
                    max={storage.MAX_VALUE}
                    min={storage.START_VALUE}
                />
            </div>
        </div>
    )
}