export default {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        add(state, payload) {
            state.counter += payload.value
        }
    },
    actions: {
        incrementAsync(context, payload) {
            setTimeout(() => {
                context.commit('add', payload)
            }, payload.delay)
        }
    },
    getters: {
        counter(state) {
            // if (state.counter > 50) {
            //     return 0
            // }
            return state.counter
        },
        doubleCounter(_, getters) {
            return getters.counter * 2
        }
    }
}