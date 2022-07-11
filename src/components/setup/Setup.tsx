import React, {useCallback} from 'react';
import setupStyles from './Setup.module.css'
import panelStyles from '../common/Panel.module.css'
import {Button} from "../common/Button";
import {InputNumber} from "../common/InputNumber";
import {useDispatch, useSelector} from "react-redux";
import {
    CounterStateType,
    resetCounterAC,
    setCounterModeAC,
    setMaxValueAC,
    setStartValueAC
} from "../../bll/counterReducer";

export const Setup: React.FC = () => {
    
    const isStartValueIncorrect = (startValue: number) =>
        startValue < 0 || startValue > 9999
    
    const {
        maxValue,
        startValue,
        counterMode
    } = useSelector<CounterStateType, CounterStateType>(state => state)
    
    const isMaxValueIncorrect = (startValue: number, maxValue: number) =>
        maxValue < 0 || maxValue > 9999 || maxValue <= startValue
    
    const isErrorInSetup = (startValue: number, maxValue: number) =>
        isStartValueIncorrect(startValue) || isMaxValueIncorrect(startValue, maxValue)
    
    const isSetButtonDisabled = counterMode === "count" || isErrorInSetup(startValue, maxValue)
    
    const dispatch = useDispatch()
    
    const onChangeMaxValueHandler = useCallback((newMaxValue: number) => {
        dispatch(setMaxValueAC(newMaxValue))
        if (isErrorInSetup(startValue, newMaxValue)) dispatch(setCounterModeAC("error"))
        else dispatch(setCounterModeAC("info"))
    }, [])
    
    const onChangeStartValueHandler = useCallback((newStartValue: number) => {
        dispatch(setStartValueAC(newStartValue))
        if (isErrorInSetup(newStartValue, maxValue)) dispatch(setCounterModeAC("error"))
        else dispatch(setCounterModeAC("info"))
    }, [])
    
    const onConfirmHandler = useCallback(() => {
        dispatch(setCounterModeAC("count"))
        dispatch(resetCounterAC())
        // localStorage.setItem('startValue', startValue.toString())
        // localStorage.setItem('maxValue', maxValue.toString())
    }, [])
    
    return (
        <div className={setupStyles.setup + ' ' + panelStyles.panel}>
            <InputNumber
                value={maxValue}
                onChangeValue={onChangeMaxValueHandler}
                caption={'max value:'}
                captionClassName={setupStyles.caption}
                error={isMaxValueIncorrect(startValue, maxValue)}
            />
            <InputNumber
                value={startValue}
                onChangeValue={onChangeStartValueHandler}
                caption={'start value:'}
                captionClassName={setupStyles.caption}
                error={isStartValueIncorrect(startValue)}
            />
            
            <Button
                disabled={isSetButtonDisabled}
                onClick={onConfirmHandler}
            > set
            </Button>
        
        </div>
    )
}