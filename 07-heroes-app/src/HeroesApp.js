import React, {useReducer, useEffect} from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './router/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged:false}
}

export const HeroesApp = () => {

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])   

    const [user, dispatch] = useReducer(authReducer, {}, init)

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
