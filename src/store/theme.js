export default {
    namespaced: true,
    state: {
        theme: {
            primary: '#cab645',
            secondary: '#3d3c2e',
            danger: '#f53d3d',
            light: '#e74c3c',
            dark: '#222222'
        }
    },
    getters: {
        theme: (state) => {
            return state.theme
        }
    },
    mutations: {
        setTheme(state, newTheme) {
            state.user.theme = newTheme
        },
    },
    actions: {
        setTheme(context, newTheme) {
            context.commit('setTheme', newTheme)
        },
    },
};
