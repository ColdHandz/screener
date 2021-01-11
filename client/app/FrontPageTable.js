import Vue from 'vue'
import Component from 'vue-class-component'
import styled from 'vue-styled-components'

const TableHeader = styled.th`
    text-align: left;
`

const IconChevronDown = () => <v-icon color="gray">mdi-chevron-down</v-icon>

@Component
export default class FrontPageTable extends Vue {
    render() {
        return (
            <v-container>
            <v-simple-table dense class="rounded">
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
            </v-simple-table>
        )
    }
}