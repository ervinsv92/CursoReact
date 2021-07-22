import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        //history.push("/");//agrega la ruta al historial, permite volver adelante y atras
        //history.replace('/');//sobreescribe la ruta actual, lo que la omite del historial de rutas
        dispatch({
            type: types.login,
            payload:{
                name:'Ervin'
            }
        });

        history.replace('/');
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Ingresar
            </button>
        </div>
    )
}
