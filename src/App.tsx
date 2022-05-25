import React, {useState} from 'react';

import s from './App.module.css'
import {Monitor} from "./Monitor";
import {Button} from "./Button";

function App() {
    
    const defCount = 0;
    const maxCount = 5;
    
    const [count, setCount] = useState<number>(defCount)
    
    
    const onClickIncHandler = () => {
        setCount(count + 1)
    };
    
    const onClickResetHandler = () => {
        setCount(defCount)
    };
    
    const isIncBtnDisabled: boolean = count === maxCount
    const isResetBtnDisabled: boolean = count === defCount
    
    
    return (
        <div className={s.app}>
            <Monitor
                count={count}
                isMaxValue={count >= maxCount}
            />
            
            <div className={s.buttonsPanel}>
                <Button
                    name={'inc'}
                    onClick={onClickIncHandler}
                    disabled={isIncBtnDisabled}
                />
                <Button
                    name={'reset'}
                    onClick={onClickResetHandler}
                    disabled={isResetBtnDisabled}
                />
            </div>
        
        </div>
    )
}

export default App;