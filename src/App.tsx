import React from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Button} from "./components/button/Button";

export const App = () => {
    return (
        <div className="App">
                <Counter/>
                <Button/>
                <Button/>
        </div>
    );
}


