import React, {useState} from 'react';
import s from './App.module.css'
import {Counter} from "./Counter";
import {Setup} from "./Setup";

function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    
    const confirmHandler = (newStartValue: number, newMaxValue: number) => {
        setStartValue(newStartValue)
        setMaxValue(newMaxValue)
    };
    
    return (
        <div className={s.app}>
            <Setup confirm={confirmHandler}/>
            <Counter
                startValue={startValue}
                maxValue={maxValue}
            />
        </div>
    );
}

export default App;