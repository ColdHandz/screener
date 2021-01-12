import Vue from 'vue'
import Component from 'vue-class-component'
import FrontPageTable from './FrontPageTable.js'

@Component
export default class App extends Vue {
    mounted() {
        this.$store.dispatch('getAllMoexStocks')
    }
    render() {
        return (
            <VContainer>
                <div>Hello from vue!</div>
                <FrontPageTable />
            </VContainer>
        )
    }
}