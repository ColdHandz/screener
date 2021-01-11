import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import App from './app/App.js'
import store from './store.js'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Vuex)

new Vue({
    el: "#root",
    store: new Vuex.Store(store),
    vuetify: new Vuetify(),
    components: {
        App
    }
})
