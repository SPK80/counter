import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import {Counter} from "./Counter";
import {Setup} from "./Setup";
import {MonitorModeType} from "./Monitor";

function App() {
    
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counterValue, setCounterValue] = useState<number>(startValue)
    const [counterMode, setCounterMode] = useState<MonitorModeType>("count")
    
    const isStartValueIncorrect = (startValue: number) =>
        startValue < 0 || startValue > 9999
    
    const isMaxValueIncorrect = (startValue: number, maxValue: number) =>
        maxValue < 0 || maxValue > 9999 || maxValue <= startValue
    
    useEffect(() => {
        
        let sv: number = +(localStorage['startValue'] ?? '0')
        sv = Number.isNaN(sv) ? 0 : sv
        setStartValue(sv)
        
        let mv: number = +(localStorage['maxValue'] ?? '5')
        mv = Number.isNaN(sv) ? 0 : mv
        setMaxValue(mv)
        
        setCounterValue(sv)
    }, [])
    
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
        localStorage['startValue'] = startValue
        localStorage['maxValue'] = maxValue
        
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