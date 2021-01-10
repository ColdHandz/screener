import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
    asd = 123

    render() {
        return (
            <div>
                <div>Hello from vue!</div>
                <div>{this}</div>
                <div>{this.asd}</div>
                <div>{this.props}</div>
            </div>
        )
    }
}