import { observable, action } from 'mobx'

class store {
    @observable someNumber = 123
    @action makeSomeNumberMore() {
        this.someNumber = this.someNumber + 1
    }
}

export default store