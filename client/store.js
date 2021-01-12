import axios from 'axios'
import { set } from 'lodash'

const store = {
    state: {
        screener: []
    },
    mutations: {
        setState(state, { name, value}) {
            state[name] = value
        },
        increase(state) {
            state.counter++
        }
    },
    actions: {
        getAllMoexStocks({ commit }) {
            axios.get('/moex/getallstocks').then(({ data }) => {
                commit('setState', { name: 'screener', value: data.secstats.data })
                commit('increase')
            })
        }
    },
    getters: {}
}

export default store