import React from 'react';
import s from './App.module.css'
import {Counter} from "./counter/Counter";
import {Setup} from "./setup/Setup";
import {useDispatch, useSelector} from "react-redux";
import {
    CounterStateType,
    incrementCounterAC,
    resetCounterAC, setCounterModeAC,
    setMaxValueAC,
    setStartValueAC
} from "../bll/counterReducer";

function App() {
    
    const {
        value,
        maxValue,
        startValue,
        counterMode
    } = useSelector<CounterStateType, CounterStateType>(state => state)
    
    const dispatch = useDispatch()
    
    
    const isStartValueIncorrect = (startValue: number) =>
        startValue < 0 || startValue > 9999
    
    const isMaxValueIncorrect = (startValue: number, maxValue: number) =>
        maxValue < 0 || maxValue > 9999 || maxValue <= startValue
    
    // const defaultStartValue: number = 0;
    // const defaultMaxValue: number = 5;
    // useEffect(() => {
    // let sv: number = +(localStorage.getItem("startValue") ?? defaultStartValue.toString())
    // sv = Number.isNaN(sv) ? 0 : sv
    // setStartValue(sv)
    //     let mv: number = +(localStorage.getItem("maxValue") ?? defaultMaxValue.toString())
    //     mv = Number.isNaN(sv) ? 0 : mv
    //     setMaxValue(mv)
    //     setCounterValue(sv)
    // }, [])
    
    const isErrorInSetup = (startValue: number, maxValue: number) =>
        isStartValueIncorrect(startValue) || isMaxValueIncorrect(startValue, maxValue)
    
    const isSetButtonDisabled = counterMode === "count" || isErrorInSetup(startValue, maxValue)
    
    const onChangeMaxValueHandler = (newMaxValue: number) => {
        dispatch(setMaxValueAC(newMaxValue))
        if (isErrorInSetup(startValue, newMaxValue)) dispatch(setCounterModeAC("error"))
        else dispatch(setCounterModeAC("info"))
    }
    
    const onChangeStartValueHandler = (newStartValue: number) => {
        dispatch(setStartValueAC(newStartValue))
        if (isErrorInSetup(newStartValue, maxValue)) dispatch(setCounterModeAC("error"))
        else dispatch(setCounterModeAC("info"))
    }
    
    const onClickIncHandler = () => {
        dispatch(incrementCounterAC())
    }
    
    const onClickResetHandler = () => {
        dispatch(resetCounterAC())
    };
    
    const onConfirmHandler = () => {
        dispatch(setCounterModeAC("count"))
        dispatch(resetCounterAC())
        // localStorage.setItem('startValue', startValue.toString())
        // localStorage.setItem('maxValue', maxValue.toString())
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
                counterValue={value}
                onClickInc={onClickIncHandler}
                onClickReset={onClickResetHandler}
            />
        </div>
    );
}

export default App;