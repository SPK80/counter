import React from "react";
import s from './Monitor.module.css'

type CounterPropsType = {
    count: number
    isMaxValue: boolean
}
export const Monitor: React.FC<CounterPropsType> = ({count, isMaxValue}) => {
    const className = `${isMaxValue ? s.isMaxValue:''} ${s.monitor}`
    return(
        <div className={className}> {count} </div>
    )
}