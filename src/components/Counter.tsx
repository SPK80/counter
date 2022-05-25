import React, {useState} from 'react';
import s from "./Counter.module.css";
import {Monitor} from "./Monitor";
import {Button} from "./Button";

type CounterType = {
    startValue: number
    maxValue: number
}

export const Counter: React.FC<CounterType> = ({startValue, maxValue}) => {
    
    const [count, setCount] = useState<number>(startValue)
    
    
    const onClickIncHandler = () => {
        setCount(count + 1)
    };
    
    const onClickResetHandler = () => {
        setCount(startValue)
    };
    
    const isIncBtnDisabled: boolean = count === maxValue
    const isResetBtnDisabled: boolean = count === startValue
    
    return (
        <div className={s.counter}>
            <Monitor
                count={count}
                isMaxValue={count >= maxValue}
            />
            
            <div className={s.buttonsPanel}>
                <Button
                    name={'inc'}
                    onClick={onClickIncHandler}
                    disabled={isIncBtnDisabled}
                />
                <Button
                    name={'reset'}
                    onClick={onClickResetHandler}
                    disabled={isResetBtnDisabled}
                />
            </div>
        
        </div>
    )
}