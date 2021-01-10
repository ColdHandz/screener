import Vue from 'vue'
import Vuex from 'vuex'
import App from './app/App.js'
// import store from './store.js'

// Vue.use(Vuex)

new Vue({
    el: "#root",
    // store: new Vuex(store),
    components: {
        App
    }
})