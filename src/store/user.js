export default {
    namespaced: true,
    state: {
        token: {
            access_token: '',
            expires_in: '',
            token_type: '',
        },
        user: {
            accepts_marketing: null,
            created_at: null,
            deleted_at: null,
            email: '',
            first_name: '',
            last_name: '',
            phone: null,
            provider: null,
            provider_id: null,
            role: '',
            updated_at: null
        }
    },
    getters: {
        user: (state) => {
            return state.user;
        },
        token: (state) => {
            return state.token;
        }
    },
    mutations: {
        setEmail(state, newEmail) {
            state.user.email = newEmail;
        },
        setUser(state, newUser) {
            state.user = newUser;
        },
        setToken(state, newTokenSet) {
            state.token = newTokenSet;
        },
        clearSession(state) {
            state.user = {};
            state.token = {};
        }
    },
    actions: {
        setEmail(context, payload) {
            context.commit('setEmail', payload);
        },
        setUser(context, newUser) {
            context.commit('setUser', newUser);
        },
        setToken(context, newTokenSet) {
            context.commit('setToken', newTokenSet);
        },
        clearSession(context) {
            context.commit('clearSession');
        }
    },
};
