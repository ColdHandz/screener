import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import Company from './Company.jsx'

const Index = () => <div>Index route</div>
const Nested = () => <div>Nested route</div>

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" children={ <Index /> } />
                    <Route path="/nested" children={ <Nested /> } />
                    <Route path="/company" children={ <Company /> } />
                </Switch>
            </Router>
        )
    }
}