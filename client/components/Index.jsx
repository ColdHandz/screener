import React from 'react'
import { observer, inject } from 'mobx-react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core'

@inject('store')
@observer
export default class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            rows: []
        }
    }
    componentDidMount() {
        this.props.store.getMoexData().then(e => {
            this.setState({
                rows: e.data.secstats.data
            })
        })
    }
    render() {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Тикер</TableCell>
                                <TableCell>VOLTODAY1</TableCell>
                                <TableCell>VOLTODAY2</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map((e,i) =>
                                <TableRow key={i}>
                                    <TableCell>{e[0]}</TableCell>
                                    <TableCell>{e[5]}</TableCell>
                                    <TableCell>{e[6]}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    </TableContainer>
            </div>
        )
    }
}