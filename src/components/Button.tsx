import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    onClick: () => void
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> =
    ({onClick, disabled, children}) => (
        <button
            className={s.button}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )