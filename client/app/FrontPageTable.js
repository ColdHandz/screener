import Vue from 'vue'
import Component from 'vue-class-component'
import styled from 'vue-styled-components'
import { State } from 'vuex-class'
import { Fragment as VueFragment } from 'vue-fragment'

const TableHeader = styled.th`
    text-align: left;
`

const IconChevronDown = () => <v-icon color="gray" style="cursor: pointer">mdi-chevron-down</v-icon>
const IconChevronUp = () => <v-icon color="gray" style="cursor: pointer">mdi-chevron-up</v-icon>

@Component
class TableRowDetails extends Vue.extend({}) {
    render() {
        return (
            <tr>
                <td colSpan="5">this is TableRowDetails</td>
            </tr>
        )
    }
}

@Component
class TableRow extends Vue.extend({
    props: {
        screenerItem: Array
    }
}) {
    expandRow = false

    expandDetails() {
        this.expandRow = !this.expandRow
    }

    render() {
        return (
            <VueFragment>
                <tr>
                    <td onClick={this.expandDetails}>
                        {this.expandRow ? <IconChevronUp/> : <IconChevronDown/>}
                    </td>
                    <td>{this.screenerItem[0]}</td>
                    <td>{this.screenerItem}</td>
                    <td>{this.screenerItem.length}</td>
                    <td>{typeof this.screenerItem}</td>
                    {this.screenerItem.map((e,i) => {
                        <td>{e}</td>
                    })}
                </tr>
                {this.expandRow ? <TableRowDetails/> : null}
            </VueFragment>
        )
    }
}

@Component
export default class FrontPageTable extends Vue {
    @State(({ screener }) => screener) screener
    @State('counter') counter
    render() {
        return (
            <VContainer>
                <VSimpleTable dense class="rounded">
                    <template slot="default">
                        <thead>
                            <tr>
                                <TableHeader></TableHeader>
                                <TableHeader>this</TableHeader>
                                <TableHeader>this.number</TableHeader>
                                <TableHeader>this.props</TableHeader>
                                <TableHeader>props</TableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {this.screener.filter((e,i) => i < 5).map((e,i) =>
                                <TableRow screenerItem={e} key={i}/>
                            )}
                        </tbody>
                    </template>
                </VSimpleTable>
                <code>
                    {this.screener}
                </code>
            </VContainer>
        )
    }
}