import store from '../store/index.js'

export default {
    install(Vue) {
        Vue.mixin({
            computed: {
                "$theme"() {
                    var theme = store.getters['theme/theme'];
                    user.setTheme = function(setTheme) {
                        return store.dispatch('theme/setTheme', setTheme)
                    }
                    return theme
                }
            }
        });
    }
}


    