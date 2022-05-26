import React, {ChangeEvent} from "react";
import s from './InputNumber.module.css'

type InputNumberType = {
    value: number
    className?: string
    onChangeNumber: (value: number) => void
    caption?: string
    captionClassName?: string
    errorMessage?: string|null
    errorClassName?: string
}

export const InputNumber: React.FC<InputNumberType> = (
    {
        value,
        className,
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
    };

    const finalCaptionClassName = `${s.errorMessage} ${captionClassName ? captionClassName : ''}`
    const finalClassName = `${errorMessage ? s.errorInput : s.superInput} ${className}`

    return (
        <div>
            {caption && <span className={finalCaptionClassName}>{caption}</span>}
            <input className={finalClassName} value={value} onChange={onChangeHandler}/>
            {errorMessage && <span className={errorClassName}>{errorMessage}</span>}
        </div>
    )
}