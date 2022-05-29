import React from 'react';
import setupStyles from './Setup.module.css'
import panelStyles from './Panel.module.css'
import {Button} from "./Button";
import {InputNumber} from "./InputNumber";

type SetupType = {
    onConfirm: () => void
    onChangeMaxValue: (value: number) => void
    onChangeStartValue: (value: number) => void
    maxValue: number
    startValue: number
    isSetButtonDisabled: boolean
}

export const Setup: React.FC<SetupType> = (props) => {
    
    return (
        <div className={setupStyles.setup + ' ' + panelStyles.panel}>
            <InputNumber
                value={props.maxValue}
                onChangeValue={props.onChangeMaxValue}
                caption={'max value:'}
                captionClassName={setupStyles.caption}
            />
            <InputNumber
                value={props.startValue}
                onChangeValue={props.onChangeStartValue}
                caption={'start value:'}
                captionClassName={setupStyles.caption}
            />
            <Button
                disabled={props.isSetButtonDisabled}
                name={'set'}
                onClick={props.onConfirm}
            />
        </div>
    );
}