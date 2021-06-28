import React, {useRef} from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = ()=>{
        //document.querySelector('input').select(); //una forma de hacerlo
        inputRef.current.select();//Otra forma de hacerlo, no es tan comun 
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input 
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-2"
                onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}
