import React from 'react';
import {Counter} from "./components/counter/Counter";
import s from './App.module.css'
import {Header} from "./components/header/Header";


export const App = () => {
    return (
        <div className={s.App} >
            <Header/>
            <Counter/>
        </div>
    )
}





