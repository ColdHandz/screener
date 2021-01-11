import Vue from 'vue'
import Component from 'vue-class-component'
import FrontPageTable from './FrontPageTable.js'
import { VContainer, VDivider } from 'vuetify/lib'

@Component
export default class App extends Vue {
    render() {
        return (
            <VContainer>
                <div>Hello from vue!</div>
                <VDivider />
                <FrontPageTable />
            </VContainer>
        )
    }
}