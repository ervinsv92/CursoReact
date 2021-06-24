import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

    return (
        <div>
            <h1>Counter with hook: {state}</h1>
            <hr/>
            <button onClick={()=> increment(2)} className="btn btn-primary">+1</button>
            <button onClick={reset} className="btn btn-primary">Reset</button>
            <button onClick={()=> decrement(2)} className="btn btn-primary">-1</button>

        </div>
    )
}
