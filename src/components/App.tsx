import React, {useState} from 'react';
import s from './App.module.css'
import {Counter} from "./Counter";
import {Setup} from "./Setup";

function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)

    const [counterValue, setCounterValue] = useState<number>(startValue)

    const onClickIncHandler = () => {
        setCounterValue(counterValue + 1)
    };

    const onClickResetHandler = () => {
        setCounterValue(startValue)
    };
    
    const confirmHandler = (newStartValue: number, newMaxValue: number) => {
        setStartValue(newStartValue)
        setCounterValue(newStartValue)
        setMaxValue(newMaxValue)
    };

    return (
        <div className={s.app}>
            <Setup confirm={confirmHandler}/>
            <Counter
                startValue={startValue}
                maxValue={maxValue}
                counterValue={counterValue}
                onClickInc={onClickIncHandler}
                onClickReset={onClickResetHandler}
            />
        </div>
    );
}

export default App;