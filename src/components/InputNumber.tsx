import React, {ChangeEvent} from "react";
import s from './InputNumber.module.css'

type InputNumberType = {
    value: number
    inputClassName?: string
    onChangeNumber: (value: number) => void
    caption?: string
    captionClassName?: string
    errorMessage?: string
    errorClassName?: string
}

export const InputNumber: React.FC<InputNumberType> = (
    {
        value,
        inputClassName,
        onChangeNumber,
        caption,
        captionClassName,
        errorMessage,
        errorClassName
    }) => {
    
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newVal: number = +e.currentTarget.value
        if (Number.isNaN(newVal)) return
        
        onChangeNumber(newVal)
    }
    
    const finalCaptionClassName = `${s.caption} ${captionClassName ?? ''}`
    const finalInputClassName = `${s.input} ${inputClassName ?? ''} ${errorMessage ? s.errorInput:''} `
    const finalErrorClassName = `${s.error} ${errorClassName ?? ''}`
    
    return (
        <>
            <div className={s.captionAndInputWrap}>
                {caption && <span className={finalCaptionClassName}>{caption}</span>}
                <input className={finalInputClassName} value={value} onChange={onChangeHandler}/>
            </div>
            <div className={finalErrorClassName}>{errorMessage && <span>{errorMessage}</span>}</div>
        </>
    )
}