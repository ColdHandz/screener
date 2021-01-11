import Vue from 'vue'
import Component from 'vue-class-component'
import FrontPageTable from './FrontPageTable.js'
@Component
export default class App extends Vue {
    render() {
        return (
            <div>
                <div>Hello from vue!</div>
                <v-divider />
                <FrontPageTable />
            </div>
        )
    }
}