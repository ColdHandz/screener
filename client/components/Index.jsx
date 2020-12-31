import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class Company extends React.Component {
    render() {
        return <div>Hi, this is Index route2!!</div>
    }
}