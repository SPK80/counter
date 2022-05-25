import React from 'react';
import s from './App.module.css'
import {Counter} from "./Counter";
import {Setup} from "./Setup";

function App() {
    
    return (
        <div className={s.app}>
            <Setup/>
            <Counter/>
        </div>
    );
}

export default App;