import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'
/**
 *  Es un sistema de rutas secundario, la unica diferencia con el principal es que no se le define el router, solo se usa el switch
 * @returns 
 */
export const DashboardRoutes = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mt-2">
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen}></Route>
                    <Route exact path='/hero/:heroId' component={HeroScreen}></Route>
                    <Route exact path='/dc' component={DcScreen}></Route>
                    <Route exact path='/search' component={SearchScreen}></Route>
                    <Redirect to="/marvel"></Redirect>
                </Switch>
            </div>
        </div>
    )
}
