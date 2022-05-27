import React, {useState} from 'react';
import {Button} from "./Button";
import s from './Setup.module.css'
import {Input} from "./Input";

type SetupType = {
    confirm: (startValue: number, maxValue: number) => void
}

export const Setup: React.FC<SetupType> = ({confirm}) => {

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)

    const onSetHandler = () => {
        confirm(startValue, maxValue)
    }

    const onChangeMaxValueHandler=(newValue:string)=>{
        setMaxValue(+newValue)
    }

    const onChangeStartValueHandler=(newValue:string)=>{
        setStartValue(+newValue)
    }

    return (
        <div className={s.setup}>
            <Input
                value={maxValue.toString()}
                onChangeValue={onChangeMaxValueHandler}
                caption={'max value:'}
                errorMessage={'error max value'}
            />
            <Input
                value={startValue.toString()}
                onChangeValue={onChangeStartValueHandler}
                caption={'start value:'}
                // errorMessage={'error start value'}
            />
            <Button
                name={'set'}
                onClick={onSetHandler}
            />
        </div>
    );
}