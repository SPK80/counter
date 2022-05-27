import React from 'react';
import s from "./Counter.module.css";
import {Monitor} from "./Monitor";
import {Button} from "./Button";

type CounterType = {
    startValue: number
    maxValue: number
    counterValue: number
    onClickInc: () => void
    onClickReset: () => void
}

export const Counter: React.FC<CounterType> = (props) => {

    const isIncBtnDisabled: boolean = props.counterValue === props.maxValue
    const isResetBtnDisabled: boolean = props.counterValue === props.startValue

    return (
        <div className={s.counter}>
            <Monitor
                count={props.counterValue}
                isMaxValue={props.counterValue >= props.maxValue}
            />

            <div className={s.buttonsPanel}>
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