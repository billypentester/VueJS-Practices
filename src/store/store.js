import { createStore } from 'vuex'

const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },
        decrement(context) {
            context.commit('decrement')
        }
    },
    getters: {
        getCount: state => state.count
    }
})

export default store