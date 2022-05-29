import React from 'react';
import counterStyles from "./Counter.module.css";
import panelStyles from './Panel.module.css'
import {Monitor, MonitorModeType} from "./Monitor";
import {Button} from "./Button";

type CounterType = {
    startValue: number
    maxValue: number
    counterValue: number
    onClickInc: () => void
    onClickReset: () => void
    mode: MonitorModeType
}

export const Counter: React.FC<CounterType> = (props) => {
    const errorMessage = 'Incorrect value'
    const infoMessage = "Enter values and press 'set'"
    
    const isIncBtnDisabled: boolean = props.mode !== "count" || props.counterValue === props.maxValue
    const isResetBtnDisabled: boolean = props.mode !== "count" || props.counterValue === props.startValue
    
    let monitorData = ''
    switch (props.mode) {
        case "count" || "isMaxVal":
            monitorData = props.counterValue.toString()
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
                mode={props.mode}
                data={monitorData}
                isMaxValue={props.counterValue === props.maxValue}
            />
            
            <div className={counterStyles.buttonsPanel}>
                <Button
                    name={'inc'}
                    onClick={props.onClickInc}
                    disabled={isIncBtnDisabled}
                />
                <Button
                    name={'reset'}
                    onClick={props.onClickReset}
                    disabled={isResetBtnDisabled}
                />
            </div>
        
        </div>
    )
}