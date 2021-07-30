import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/firebase.config';
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';
import { noteLogout } from "./notes";

//ejemplo accion asyncrona, en algun punto tiene que llamar una accion sincrona
export const startLoginEmailPassword = (email, password)=>{
    //lleva este callback porque es una llamada asyncrona. el dispatch ya lo define la libreria thunk
    return (dispatch) =>{
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password).then(({user}) =>{
            
            dispatch(finishLoading());
            dispatch(
                login(user.uid, user.displayName)
            )
        }).catch(e => {
            dispatch(finishLoading());
            Swal.fire('Error', e.message, 'error');
        });
    }
}

export const startRegisterWithEmailPassword = (email, passrowd, name) =>{
    return (dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email, passrowd).then(async ({user}) =>{

            await user.updateProfile({displayName:name});

            dispatch(
                login(user.uid, user.displayName)
            )
        }).catch(e => {
            Swal.fire('Error', e.message, 'error');
        });
    }
}

export const startGoogleLogin = ()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider).then(({user}) =>{
            dispatch(
                login(user.uid, user.displayName)
            )
        });
    }
}

export const login = (uid, displayName) => ({
    type:types.login,
    payload:{
        uid,
        displayName
    }
})

export const startLogout = ()=>{
    return async (dispatch) =>{
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch(noteLogout());
    }
}

export const logout = ()=>({
    type:types.logout
})