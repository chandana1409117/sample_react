import React from 'react';
import { useState } from 'react';






const Counter = () => {
    let [counter,setCounter] = useState(0)

    let incValue = ()=>{
        setCounter(++counter)
    }
    let resValue = ()=>{
        setCounter(0)
    }
    let decValue = ()=>{
        setCounter(counter--)
    }
    return (
        <div className='parent'>
             <div className='card'>
            <h1>{counter}</h1>
            <div className='btns'>
            <button onClick={incValue}>Inc</button>
            <button onClick={resValue}>Reset</button>
            <button onClick={decValue}>Dec</button>
            </div>
        </div>
        </div>
        
    );
}

export default Counter;
