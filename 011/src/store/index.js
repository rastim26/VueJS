import { createStore } from 'vuex'
import { counterModule } from './modules/counter'
import mutations from './modules/mutations'
import actions from './modules/actions'


export default createStore({
    modules: {
        count: counterModule
    },
    state() {
        return {
            appTitle: 'Vuex Working!'
        }
    },
    mutations: mutations,
    actions: actions,
    getters: {
        uppercaseTitle(state) {
            return state.appTitle.toUpperCase()
        }
    }
})