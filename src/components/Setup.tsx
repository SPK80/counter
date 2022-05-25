import React from 'react';
import {Button} from "./Button";

export const Setup = () => {
    const onSetHandler = () => {
        console.log('set')
    };
    
    return (
        <div>
            <div>
                <div><span>max value:</span><input/></div>
                <div><span>start value:</span><input/></div>
            </div>
            <div>
                <Button
                    name={'set'}
                    onClick={onSetHandler}
                />
            </div>
        </div>
    );
}