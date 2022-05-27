import React, {ChangeEvent} from "react";
import s from './Input.module.css'

type InputType = {
    value: string
    inputClassName?: string
    onChangeValue: (value: string) => void
    caption?: string
    captionClassName?: string
    errorMessage?: string | null
    errorClassName?: string
}

export const Input: React.FC<InputType> = (
    {
        value,
        inputClassName,
        onChangeValue,
        caption,
        captionClassName,
        errorMessage,
        errorClassName
    }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeValue(e.currentTarget.value)
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