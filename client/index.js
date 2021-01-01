import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from "react-router-dom"

import Index from './components/Index.jsx'
import Company from './components/Company.jsx'
import store from './store.js'
import './styles/index.sass'

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path="/company" children={ <Company /> } />
            <Route path="/" children={ <Index /> } />
        </Switch>
    </Router>,
    document.getElementById('root')
)