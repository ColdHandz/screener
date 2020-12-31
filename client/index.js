import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { Router, Switch, Route } from "react-router-dom"
import createBrowserHistory from 'history/createBrowserHistory'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

import store from './store.js'
import Index from './components/Index.jsx'
import Company from './components/Company.jsx'
import './styles/index.sass'

const browserHistory = createBrowserHistory()
const routing = new RouterStore()
const history = syncHistoryWithStore(browserHistory, routing)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/company" children={ <Company /> } />
                <Route path="/" children={ <Index /> } />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)