import React, {useState, useCallback, useEffect} from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';

export const CallbackHook = ()=> {

    const [counter, setCounter] = useState(10);
    /*
    const increment = () => {
        setCounter(counter +1);
    }*/

    /**
     * useCallback sirve para que el componente no se monte cada vez que se renderiza la pantalla, si tiene una funcion que se ejecuta cuando es creado
     * Tambien depende del React.memo
     * Se usa cuando se envia una funcion por property
     */
    const increment = useCallback(
        (num) => {
            setCounter(c => c +num);
        },
        [setCounter],
    )

    useEffect(() => {
        //???
    }, [increment])

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </div>
    )
}
