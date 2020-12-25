import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Index from './src/Index.jsx'
import Company from './src/Company.jsx'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" children={ <Index /> } />
                    <Route path="/company" children={ <Company /> } />
                </Switch>
            </Router>
        )
    }
}