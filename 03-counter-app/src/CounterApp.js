//import React, {Fragment} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//const PrimeraApp = ({saludo ='Hola mundo'}) =>{
const CounterApp = ({value}) =>{

    const handledAdd = (e) =>{

    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{value}</h2>
            {/* Al agregar la funcion al boton no se pone () porque se ocupa que se ejecute despues de que se renderiza */}
            <button onClick={handledAdd}>+1</button>
        </>
    );
}

/*
    Se indica el formato de los props y si son requeridos
*/ 
CounterApp.propTypes = {
    value:PropTypes.number
}

CounterApp.defaultProps={
    subtitulo:'Soy un subtitulo desde las props'
}

export default CounterApp;