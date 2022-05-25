import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";

type SetupType = {
    confirm: (startValue: number, maxValue: number) => void
}

export const Setup: React.FC<SetupType> = ({confirm}) => {
    
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    
    
    const onSetHandler = () => {
        console.log('set')
        confirm(startValue, maxValue)
    };
    
    
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    };
    
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    };
    
    return (
        <div>
            <div>
                <div>
                    <span>max value:</span>
                    <input value={maxValue} onChange={onChangeMaxValueHandler}/>
                </div>
                <div>
                    <span>start value:</span>
                    <input value={startValue} onChange={onChangeStartValueHandler}/>
                </div>
            </div>
            <div>
                <Button
                    name={'set'}
                    onClick={onSetHandler}
                />
            </div>
        </div>
    );
}