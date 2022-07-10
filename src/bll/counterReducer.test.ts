import {
    counterReducer,
    incrementCounterAC,
    resetCounterAC,
    setCounterModeAC,
    setMaxValueAC,
    setStartValueAC
} from "./counterReducer";
import {MonitorModeType} from "../components/counter/Monitor";

let initialState: {
    value: number,
    startValue: number,
    maxValue: number,
    counterMode: 'count' | 'info' | 'error'
}

beforeEach(() => {
    initialState = {
        value: 4,
        startValue: 0,
        maxValue: 5,
        counterMode: 'count' as MonitorModeType,
    }
})

test('counter value must be incremented', () => {
    initialState.value = 1
    const newState = counterReducer(initialState, incrementCounterAC())
    expect(newState.value).toBe(initialState.value + 1)
})

test('counter value must be less or equal than maxValue', () => {
    initialState.value = initialState.maxValue
    const newState = counterReducer(initialState, incrementCounterAC())
    expect(newState.value).toBeLessThanOrEqual(newState.maxValue)
})

test('counter must be reset', () => {
    const newState = counterReducer(initialState, resetCounterAC())
    expect(newState.value).toBe(newState.startValue)
})

test('startValue must be set', () => {
    const newState = counterReducer(initialState, setStartValueAC(3))
    expect(newState.startValue).toBe(3)
})

test('startValue must be less than maxValue', () => {
    const newState = counterReducer(initialState, setStartValueAC(3))
    expect(newState.startValue).toBeLessThan(newState.maxValue)
})

test('maxValue must be set', () => {
    const newState = counterReducer(initialState, setMaxValueAC(10))
    expect(newState.maxValue).toBe(10)
})

test('maxValue must be greater than startValue', () => {
    const newState = counterReducer(initialState, setStartValueAC(10))
    expect(newState.maxValue).toBeGreaterThan(newState.startValue)
})

test('counterMode must be set', () => {
    let newState = counterReducer(initialState, setCounterModeAC("count"))
    expect(newState.counterMode).toBe("count")
    
    newState = counterReducer(initialState, setCounterModeAC("error"))
    expect(newState.counterMode).toBe("error")
    
    newState = counterReducer(initialState, setCounterModeAC("info"))
    expect(newState.counterMode).toBe("info")
})