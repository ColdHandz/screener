import React from 'react'
import { observer, inject } from 'mobx-react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Paper
} from '@material-ui/core'

import { KeyboardArrowDownIcon, KeyboardArrowUpIcon } from '@material-ui/icons'
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

@inject('store')
@observer
export default class Index extends React.Component {
    constructor(props){
        super(props)
        this.sortRowsByVolume = this.sortRowsByVolume.bind(this)
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
    sortRowsByVolume(){
        const rows = this.state.rows.sort((a,b) => Number(a[5]) - Number(b[5])).reverse()
        this.setState({ rows })
        console.log(rows)
    }
    render() {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Тикер</TableCell>
                                <TableCell onClick={this.sortRowsByVolume} style={{cursor: 'pointer'}}>VOLTODAY1</TableCell>
                                <TableCell>VOLTODAY2</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map((e,i) =>
                                <Row row={e} key={i} />
                            )}
                        </TableBody>
                    </Table>
                    </TableContainer>
            </div>
        )
    }
}

function Row(props) {
    const { row } = props;
    const [isRowCollapsed, collapseRow] = React.useState(false)

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => collapseRow(!isRowCollapsed)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{row[0]}</TableCell>
                <TableCell align="right">{row[1]}</TableCell>
                <TableCell align="right">{row[2]}</TableCell>
                <TableCell align="right">{row[3]}</TableCell>
                <TableCell align="right">{row[4]}</TableCell>
                <TableCell align="right">{row[5]}</TableCell>
                <TableCell align="right">{row[6]}</TableCell>
                <TableCell align="right">{row[7]}</TableCell>
                <TableCell align="right">{row[8]}</TableCell>
                <TableCell align="right">{row[9]}</TableCell>
                <TableCell align="right">{row[10]}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={11}>
                <Collapse in={isRowCollapsed} timeout="auto" unmountOnExit>
                    <div>asd</div>
                </Collapse>
            </TableCell>
            </TableRow>
        </React.Fragment>
    )
  }