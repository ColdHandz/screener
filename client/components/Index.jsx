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
    Collapse,
    Paper
} from '@material-ui/core'

// import { KeyboardArrowDownIcon, KeyboardArrowUpIcon } from '@material-ui/icons'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

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
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>SECID</TableCell>
                            <TableCell>BOARDID</TableCell>
                            <TableCell>TRADINGSESSION</TableCell>
                            <TableCell>TIME</TableCell>
                            <TableCell>PRICEMINUS...</TableCell>
                            <TableCell>VOLTODAY</TableCell>
                            <TableCell>VALTODAY</TableCell>
                            <TableCell>HIGHBID</TableCell>
                            <TableCell>LOWOFFER</TableCell>
                            <TableCell>LASTOFFER</TableCell>
                            <TableCell>LASTBID</TableCell>
                            <TableCell>OPEN</TableCell>
                            <TableCell>LOW</TableCell>
                            <TableCell>HIGH</TableCell>
                            <TableCell>LAST</TableCell>
                            <TableCell>LCLOSEPRICE</TableCell>
                            <TableCell>NUMTRADES</TableCell>
                            <TableCell>WAPRICE</TableCell>
                            <TableCell>ADMITTEDQUOTE</TableCell>
                            <TableCell>MARKETPRICE2</TableCell>
                            <TableCell>LCURRENTPRICE</TableCell>
                            <TableCell>CLOSINGAUCTIONPRICE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((e,i) =>
                            <Row row={e} key={i} />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
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
                        {isRowCollapsed ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="left">{row[0]}</TableCell>
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
                <TableCell align="right">{row[11]}</TableCell>
                <TableCell align="right">{row[12]}</TableCell>
                <TableCell align="right">{row[13]}</TableCell>
                <TableCell align="right">{row[14]}</TableCell>
                <TableCell align="right">{row[15]}</TableCell>
                <TableCell align="right">{row[16]}</TableCell>
                <TableCell align="right">{row[17]}</TableCell>
                <TableCell align="right">{row[18]}</TableCell>
                <TableCell align="right">{row[19]}</TableCell>
                <TableCell align="right">{row[20]}</TableCell>
                <TableCell align="right">{row[21]}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={23}>
                <Collapse in={isRowCollapsed} timeout="auto" unmountOnExit>
                    <div>asd</div>
                </Collapse>
            </TableCell>
            </TableRow>
        </React.Fragment>
    )
  }