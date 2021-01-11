import Vue from 'vue'
import Component from 'vue-class-component'
import styled from 'vue-styled-components'
import { Fragment as VueFragment } from 'vue-fragment'

const TableHeader = styled.th`
    text-align: left;
`

const IconChevronDown = () => <v-icon color="gray" style="cursor: pointer">mdi-chevron-down</v-icon>
const IconChevronUp = () => <v-icon color="gray" style="cursor: pointer">mdi-chevron-up</v-icon>

@Component
class TableRow extends Vue.extend({
    props: {
        nubmer: Number
    }
}) {
    expandRow = false
    mounted() {
        console.log('mounted', this)
    }
    render() {
        return (
            <VueFragment>
                <tr>
                    <td>
                        {this.expandRow ? <IconChevronUp/> : <IconChevronDown/>}
                    </td>
                    <td>{this}</td>
                    <td>{this.number}</td>
                    <td>asd2</td>
                    <td>asd2</td>
                    <td>asd2</td>
                </tr>
            </VueFragment>
        )
    }
}

@Component
export default class FrontPageTable extends Vue {
    render() {
        return (
            <VContainer>
                <VSimpleTable dense class="rounded">
                    <template slot="default">
                        <thead>
                            <tr>
                                <TableHeader>asd</TableHeader>
                                <TableHeader>asd</TableHeader>
                                <TableHeader>asd</TableHeader>
                                <TableHeader>asd</TableHeader>
                                <TableHeader>asd</TableHeader>
                                <TableHeader>asd</TableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {[1,2,3].map((e,i) =>
                                <TableRow number={e}/>
                            )}
                        </tbody>
                    </template>
                </VSimpleTable>
            </VContainer>
        )
    }
}