import { observable, action } from 'mobx'
import axios from 'axios'

class Store {
    @action getMoexData() {
        return axios("https://iss.moex.com/iss/engines/stock/markets/shares/secstats.json")
    }
}

export default new Store()