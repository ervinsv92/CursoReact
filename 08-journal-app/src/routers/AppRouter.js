import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import {firebase} from '../firebase/firebase.config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes, startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isloggedIn, setIsloggedIn] = useState(false);

    //este use effect solo se ejecuta una vez, como el evento de firebase es un observable
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user)=>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsloggedIn(true);

                dispatch(startLoadingNotes(user.uid));
            }else{
                setIsloggedIn(false);
            }

            setChecking(false)
        })
        
    }, [dispatch, setChecking, setIsloggedIn]);

    if(checking){
        return (
            <h1>Wait...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={isloggedIn} path='/auth' component={AuthRouter} />
                    <PrivateRoute isAuthenticated={isloggedIn} exact path='/' component={JournalScreen} />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    )
}
