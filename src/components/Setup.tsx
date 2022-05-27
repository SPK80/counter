import React, {useState} from 'react';
import setupStyles from './Setup.module.css'
import panelStyles from './Panel.module.css'
import {Button} from "./Button";
import {Input} from "./Input";

type SetupType = {
    confirm: (startValue: number, maxValue: number) => void
}

export const Setup: React.FC<SetupType> = ({confirm}) => {
    
    const [startValue, setStartValue] = useState<string>('0')
    const [maxValue, setMaxValue] = useState<string>('5')
    
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
        <div className={setupStyles.setup +' ' +panelStyles.panel}>
            <Input
                value={maxValue}
                onChangeValue={onChangeMaxValueHandler}
                caption={'max value:'}
                errorMessage={isValidNumber(maxValue) ? null : 'Number is required'}
                captionClassName={setupStyles.caption}
            />
            <Input
                value={startValue}
                onChangeValue={onChangeStartValueHandler}
                caption={'start value:'}
                errorMessage={isValidNumber(startValue) ? null : 'Number is required'}
                captionClassName={setupStyles.caption}
            />
            <Button
                disabled={!(isValidNumber(startValue) && isValidNumber(maxValue))}
                name={'set'}
                onClick={onClickSetHandler}
            />
        </div>
    );
}