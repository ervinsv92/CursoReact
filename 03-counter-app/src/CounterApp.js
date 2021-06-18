//import React, {Fragment} from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

//const PrimeraApp = ({saludo ='Hola mundo'}) =>{
const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    const handledAdd = (e) => {
        setCounter(counter + 1);
        //setCounter((c) => c + 1); // casi no se usa
    }

    const handledReset = (e) => setCounter(value);
    const handledSubstract = (e) => {
        setCounter(counter - 1);
    }

    return ( 
        <>
            <h1> Counter App </h1>  
            <h2> { counter } </h2>   
            <button onClick = { handledAdd } > +1 </button> 
            <button onClick = { handledReset } > Reset </button> 
            <button onClick = { handledSubstract } > -1 </button> 
        </>
    );
}

/*
    Se indica el formato de los props y si son requeridos
*/
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;