export default {
    namespaced: true,
    state: {
        user: {
            email: 'Guest'
        }
    },
    getters: {
        user: (state) => {
            return state.user
        }
    },
    mutations: {
        setEmail(state, newEmail) {
            state.user.email = newEmail
        }
    },
    actions: {
        setEmail(context, payload) {
            context.commit('setEmail', payload)
        }
    },
};
