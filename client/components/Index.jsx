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
            rows: [],
            asd: 'asd'
        }
    }
    componentDidMount() {
        this.props.store.getMoexData().then(e => {
            this.state.rows = e.data.secstats.data
        })
    }
    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Тикер</TableCell>
                                <TableCell align="right">VOLTODAY1</TableCell>
                                <TableCell align="right">VOLTODAY2</TableCell>
                                <TableCell align="right">Carbs (g)</TableCell>
                                <TableCell align="right">Protein (g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows}
                            {this.state.rows.map(e =>
                                <TableRow>
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