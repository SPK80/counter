import React, {useState} from 'react';
import s from './App.module.css'
import {Counter} from "./Counter";
import {Setup} from "./Setup";
import {MonitorModeType} from "./Monitor";

function App() {
    
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counterValue, setCounterValue] = useState<number>(startValue)
    const [counterMode, setCounterMode] = useState<MonitorModeType>("count")
    
    const isStartValueIncorrect = (value: number) => value < 0
    const isMaxValueIncorrect = (startValue: number, maxValue: number) => maxValue < 0 || maxValue <= startValue
    
    const isErrorInSetup = (startValue: number, maxValue: number) =>
        isStartValueIncorrect(startValue) || isMaxValueIncorrect(startValue, maxValue)
    
    const isSetButtonDisabled = counterMode === "count" || isErrorInSetup(startValue, maxValue)
    
    const onChangeMaxValueHandler = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
        if (isErrorInSetup(startValue, newMaxValue)) setCounterMode("error")
        else setCounterMode("info")
    }
    
    const onChangeStartValueHandler = (newStartValue: number) => {
        setStartValue(newStartValue)
        if (isErrorInSetup(newStartValue, maxValue)) setCounterMode("error")
        else setCounterMode("info")
    }
    
    const onClickIncHandler = () => {
        setCounterValue(counterValue + 1)
    };
    
    const onClickResetHandler = () => {
        setCounterValue(startValue)
    };
    
    const onConfirmHandler = () => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounterValue(startValue)
        setCounterMode("count")
    };
    
    return (
        <div className={s.app}>
            <Setup
                onConfirm={onConfirmHandler}
                maxValue={maxValue}
                startValue={startValue}
                isSetButtonDisabled={isSetButtonDisabled}
                isStartValueIncorrect={isStartValueIncorrect(startValue)}
                isMaxValueIncorrect={isMaxValueIncorrect(startValue, maxValue)}
                onChangeStartValue={onChangeStartValueHandler}
                onChangeMaxValue={onChangeMaxValueHandler}
            />
            <Counter
                mode={counterMode}
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