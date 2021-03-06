import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';

/** 
 *  A las rutas hijas no se les coloca el exact en la ruta
*/

import {LoginScreen} from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const {user} = useContext(AuthContext)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={user.logged}  />
                    <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={user.logged} />
                </Switch>
            </div>
        </Router>
    )
}
