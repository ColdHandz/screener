import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Index from './components/Index.jsx'
import Company from './components/Company.jsx'
import './styles/index.sass'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/company" children={ <Company /> } />
            <Route path="/" children={ <Index /> } />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)