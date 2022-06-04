import React, {ChangeEvent} from "react";
import s from './Input.module.css'

type InputType = {
    value: number
    inputClassName?: string
    onChangeValue: (value: number) => void
    caption?: string
    captionClassName?: string
    error?: boolean
    errorClassName?: string
}

export const InputNumber: React.FC<InputType> = (props) => {
    
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.valueAsNumber
        e.currentTarget.value = ''
        if (Number.isNaN(val))
            props.onChangeValue(0)
        else
            props.onChangeValue(val)
    }
    
    const finalCaptionClassName = `${s.caption} ${props.captionClassName ?? ''}`
    const finalInputClassName = `${s.input} ${props.inputClassName ?? ''} ${props.error ? s.errorInput : ''} `
    return (
        <div className={s.captionAndInputWrap}>
            {props.caption && <span className={finalCaptionClassName}>{props.caption}</span>}
            <input
                className={finalInputClassName}
                type="number"
                value={props.value}
                onChange={onChangeHandler}/>
        </div>
    )
}