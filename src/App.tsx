import React, {useState} from 'react';
import s from './App.module.css'
import {Button} from "./components/button/Button";


export const App = () => {

        const [count,setCount] = useState(0)

        const increase = () => {
            setCount(count + 1)
        }
        const reset = () => {
            setCount(0)
        }

    return (
        <div>
            <div>{count}</div>
            <div>
                <Button title={'Inc'} callback={increase} disabled={count === 5}/>
                <Button title={'Reset'} callback={reset} disabled={count === 0}/>
            </div>
        </div>
    )
}





