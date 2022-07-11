import React from 'react';
import counterStyles from "./Counter.module.css";
import panelStyles from '../common/Panel.module.css'
import {Monitor} from "./Monitor";
import {Button} from "../common/Button";
import {useDispatch, useSelector} from "react-redux";
import {CounterStateType, incrementCounterAC, resetCounterAC} from "../../bll/counterReducer";

export const Counter: React.FC = () => {
    
    const {
        value,
        maxValue,
        startValue,
        counterMode
    } = useSelector<CounterStateType, CounterStateType>(state => state)
    
    const dispatch = useDispatch()
    
    const errorMessage = 'Incorrect value'
    const infoMessage = "Enter values and press 'set'"
    
    const isIncBtnDisabled: boolean = counterMode !== "count" || value === maxValue
    const isResetBtnDisabled: boolean = counterMode !== "count" || value === startValue
    
    let monitorData = ''
    switch (counterMode) {
        case "count" || "isMaxVal":
            monitorData = value.toString()
            break
        case "info":
            monitorData = infoMessage
            break
        case "error":
            monitorData = errorMessage
    }
    
    return (
        <div className={counterStyles.counter + ' ' + panelStyles.panel}>
            <Monitor
                mode={counterMode}
                data={monitorData}
                isMaxValue={value === maxValue}
            />
            <div className={counterStyles.buttonsPanel}>
                <Button
                    onClick={() => dispatch(incrementCounterAC())}
                    disabled={isIncBtnDisabled}
                > inc
                </Button>
                <Button
                    onClick={() => dispatch(resetCounterAC())}
                    disabled={isResetBtnDisabled}
                > reset
                </Button>
            </div>
        </div>
    )
}