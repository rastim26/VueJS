import { createStore, createLogger } from 'vuex'
import { counterModule } from './modules/counter'
import mutations from './modules/mutations'
import actions from './modules/actions'


export default createStore({
    plugins: [createLogger()],
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