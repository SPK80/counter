import React, {useState} from 'react';
import {Button} from "./Button";
import s from './Setup.module.css'
import {Input} from "./Input";

type SetupType = {
    confirm: (startValue: number, maxValue: number) => void
}

export const Setup: React.FC<SetupType> = ({confirm}) => {
    
    const [startValue, setStartValue] = useState('0')
    const [maxValue, setMaxValue] = useState('5')
    
    const onClickSetHandler = () => {
        confirm(+startValue, +maxValue)
    }
    
    const onChangeMaxValueHandler = (newValue: string) => {
        setMaxValue(newValue.trim())
    }
    
    const onChangeStartValueHandler = (newValue: string) => {
        setStartValue(newValue.trim())
    }
    
    const isValidNumber = (value: string): boolean => !(Number.isNaN(+value) || !value)
    
    return (
        <div className={s.setup}>
            <Input
                value={maxValue}
                onChangeValue={onChangeMaxValueHandler}
                caption={'max value:'}
                errorMessage={isValidNumber(maxValue) ? null : 'Number is required'}
            />
            <Input
                value={startValue}
                onChangeValue={onChangeStartValueHandler}
                caption={'start value:'}
                errorMessage={isValidNumber(startValue) ? null : 'Number is required'}
            />
            <Button
                disabled={!(isValidNumber(startValue) && isValidNumber(maxValue))}
                name={'set'}
                onClick={onClickSetHandler}
            />
        </div>
    );
}