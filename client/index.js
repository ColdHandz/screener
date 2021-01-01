import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'mobx-react'
import Index from '@/components/Index.jsx'
import Company from '@/components/Company.jsx'
import '@/styles/index.sass'
import mobxStore from '@/mobxStore.js'

ReactDOM.render(
    <Provider store={mobxStore}>
        <BrowserRouter>
            <Switch>
                <Route path="/company" children={ <Company /> } />
                <Route path="/" children={ <Index /> } />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)