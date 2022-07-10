export const incrementCounterAC = () => ({
    type: 'INCREMENT-COUNTER'
} as const)

export const resetCounterAC = () => ({
    type: 'RESET-COUNTER'
} as const)

export const setStartValueAC = (startValue: number) => ({
    type: 'SET-START-VALUE',
    startValue
} as const)

export const setMaxValueAC = (maxValue: number) => ({
    type: 'SET-MAX-VALUE',
    maxValue
} as const)

export const setCounterModeAC = (counterMode: MonitorModeType) => ({
    type: 'SET-COUNTER-MODE',
    counterMode
} as const)


type ActionsType = ReturnType<typeof incrementCounterAC>
    | ReturnType<typeof resetCounterAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setCounterModeAC>

type MonitorModeType = 'count' | 'info' | 'error'

const initialState = {
    value: 1,
    startValue: 0,
    maxValue: 5,
    counterMode: 'count' as MonitorModeType,
}

export type CounterStateType = typeof initialState

export const counterReducer = (state = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        
        case "INCREMENT-COUNTER":
            return (state.value === state.maxValue)
                ? state
                : {...state, value: state.value + 1}
        
        case "RESET-COUNTER":
            return {...state, value: state.startValue}
        
        case "SET-START-VALUE":
            return (action.startValue >= state.maxValue)
                ? state
                : {...state, startValue: action.startValue}
        
        case "SET-MAX-VALUE":
            return (action.maxValue < state.startValue)
                ? state
                : {...state, maxValue: action.maxValue}
        case "SET-COUNTER-MODE":
            return {...state, counterMode: action.counterMode}
        default:
            return state
        
    }
}
