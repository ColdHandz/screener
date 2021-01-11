import Vue from 'vue'
import Component from 'vue-class-component'
import styled from 'vue-styled-components'
import { VSimpleTable, VIcon, VContainer } from 'vuetify/lib'

const TableHeader = styled.th`
    text-align: left;
`

const IconChevronDown = () => <VIcon color="gray">mdi-chevron-down</VIcon>

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
                            <tr>
                                <td>
                                    <IconChevronDown/>
                                </td>
                                <td>asd2</td>
                                <td>asd2</td>
                                <td>asd2</td>
                                <td>asd2</td>
                                <td>asd2</td>
                            </tr>
                        </tbody>
                    </template>
                </VSimpleTable>
            </VContainer>
        )
    }
}