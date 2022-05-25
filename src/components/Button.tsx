import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled: boolean
}

export const Button: React.FC<ButtonPropsType> =
    ({name, onClick, disabled}) => (
        <button
            className={s.button}
            onClick={onClick}
            disabled={disabled}
        >{name}
        </button>
    )