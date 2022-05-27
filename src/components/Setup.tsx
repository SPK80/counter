import React, {useState} from 'react';
import {Button} from "./Button";
import {InputNumber} from "./InputNumber";
import s from './Setup.module.css'


type SetupType = {
    confirm: (startValue: number, maxValue: number) => void
}


export const Setup: React.FC<SetupType> = ({confirm}) => {
    
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    
    const onSetHandler = () => {
        console.log('set')
        confirm(startValue, maxValue)
    }
    
    return (
        <div className={s.setup}>
            <div className={s.inputs}>
                <InputNumber
                    value={maxValue}
                    onChangeNumber={setMaxValue}
                    caption={'max value:'}
                    captionClassName={s.caption}
                    errorMessage={'error max value'}
                />
                <InputNumber
                    value={startValue}
                    onChangeNumber={setStartValue}
                    caption={'start value:'}
                    captionClassName={s.caption}
                    // errorMessage={'error start value'}
                />
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