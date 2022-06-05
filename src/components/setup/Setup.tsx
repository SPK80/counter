import React from 'react';
import setupStyles from './Setup.module.css'
import panelStyles from '../common/Panel.module.css'
import {Button} from "../common/Button";
import {InputNumber} from "../common/InputNumber";

type SetupType = {
    onConfirm: () => void
    onChangeMaxValue: (value: number) => void
    onChangeStartValue: (value: number) => void
    maxValue: number
    startValue: number
    isSetButtonDisabled: boolean
    isMaxValueIncorrect: boolean
    isStartValueIncorrect: boolean
}

export const Setup: React.FC<SetupType> = (props) => {
    
    return (
        <div className={setupStyles.setup + ' ' + panelStyles.panel}>
            <InputNumber
                value={props.maxValue}
                onChangeValue={props.onChangeMaxValue}
                caption={'max value:'}
                captionClassName={setupStyles.caption}
                error={props.isMaxValueIncorrect}
            />
            <InputNumber
                value={props.startValue}
                onChangeValue={props.onChangeStartValue}
                caption={'start value:'}
                captionClassName={setupStyles.caption}
                error={props.isStartValueIncorrect}
            />
            
            <Button
                disabled={props.isSetButtonDisabled}
                onClick={props.onConfirm}
            > set
            </Button>
        
        </div>
    );
}