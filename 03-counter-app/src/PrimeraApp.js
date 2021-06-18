//import React, {Fragment} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//const PrimeraApp = ({saludo ='Hola mundo'}) =>{
const PrimeraApp = ({saludo, subtitulo, sub2 = 'soy sub 2'}) =>{

    /*
    if(!saludo){
        throw new Error('El saludo es necesario')
    }*/

    //const saludo = 'Hola mundo const';
    const obj = {
        "nombre":"Ervin",
        "profesion":"Desarrollador"
    };

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(obj)}</pre> */}
            <p>Soy un parrafo</p>
            <p>{subtitulo}</p>
        </>
    );
}

/*
    Se indica el formato de los props y si son requeridos
*/ 
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra:PropTypes.number
}

PrimeraApp.defaultProps={
    subtitulo:'Soy un subtitulo desde las props'
}

export default PrimeraApp;