import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Notfound from './componenets/Notfound'
import  Connexion from './componenets/connexion'
import * as serviceWorker from './serviceWorker'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
//utilisation des chemients 
const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component = {Connexion}></Route>
            <Route exact path='/pseudo/:pseudo' component = {App}></Route>
            <Route component = {Connexion}></Route>
        </Switch>
    </BrowserRouter>

)
ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
