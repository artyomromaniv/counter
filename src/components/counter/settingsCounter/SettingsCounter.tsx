import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './SettingsCounter.module.css'
import {Button} from "../button/Button";
import {StorageType} from "../Counter";

export type SettingsCounterPropsType = {
    storage: StorageType
    changeSettings: (newStorage: StorageType) => void
    setSettings: (status: 'on' | 'off') => void
    setError: (text: string) => void
    error: string
}

export const SettingsCounter = (props: SettingsCounterPropsType) => {

    const [newStorage, setNewStorage] = useState(props.storage)
    useEffect(() => {
        setNewStorage(props.storage)
    }, [props.storage])
    useEffect(() => {
        if (newStorage.START_VALUE >= newStorage.MAX_VALUE
            || newStorage.STEP_VALUE < 1
            || newStorage.STEP_VALUE > (newStorage.MAX_VALUE - newStorage.START_VALUE)
            || (newStorage.MAX_VALUE - newStorage.START_VALUE) % newStorage.STEP_VALUE !== 0
        ) {
            props.setError('Incorrect value!')
        } else {
            props.setError("")
        }
    }, [newStorage, props.error, props])

    const onChangeStartHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewStorage({...newStorage, START_VALUE: Number(event.currentTarget.value)})
    }
    const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewStorage({...newStorage, MAX_VALUE: Number(event.currentTarget.value)})
    }
    const onChangeStepHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewStorage({...newStorage, STEP_VALUE: Number(event.currentTarget.value)})

    }
    const onClickSaveButton = () => {
        props.changeSettings(newStorage)
    }
    const onClickDefaultButton = () => {
        let newStorageValue = {
            MAX_VALUE: 5,
            START_VALUE: 0,
            STEP: 1
        }
        //props.changeSettings(newStorageValue)
    }

    const inputStartClass = newStorage.START_VALUE >= newStorage.MAX_VALUE ? s.errorInput : s.input
    const inputMaxClass = newStorage.MAX_VALUE <= newStorage.START_VALUE ? s.errorInput : s.input
    const inputStepClass = (newStorage.STEP_VALUE < 1) || (newStorage.MAX_VALUE - newStorage.START_VALUE) % newStorage.STEP_VALUE !== 0 ? s.errorInput : s.input
    return (
        <div className={s.container}>
            <label>Enter start value:</label>
            <input
                type={'number'}
                className={inputStartClass}
                value={newStorage.START_VALUE}
                onChange={onChangeStartHandler}/>
            <label>Enter max value:</label>
            <input
                type={'number'}
                className={inputMaxClass}
                value={newStorage.MAX_VALUE}
                onChange={onChangeMaxHandler}/>
            <label>Enter step value:</label>
            <input
                type={'number'}
                className={inputStepClass}
                value={newStorage.STEP_VALUE}
                onChange={onChangeStepHandler}/>

            <div className={s.panel}>
                <Button title={'SAVE'} callback={onClickSaveButton} disabled={props.error !== ""}/>
                <Button title={'SET DEFAULT'} callback={onClickDefaultButton} disabled={false}/>
            </div>
        </div>
    )
}