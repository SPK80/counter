import React from "react";
import s from './Monitor.module.css'

export type MonitorModeType = 'count' | 'info' | 'error'

type MonitorPropsType = {
    mode: MonitorModeType
    data: string
    isMaxValue: boolean
}

export const Monitor: React.FC<MonitorPropsType> = React.memo((props) => {
    
    let className = s.monitor;
    switch (props.mode) {
        case "count":
            className += ' ' + (props.isMaxValue ? s.maxValue : s.normValue)
            break
        case "info":
            className += ' ' + s.info
            break
        case "error":
            className += ' ' + s.error
            break
    }
    return <div className={className}> {props.data} </div>
})