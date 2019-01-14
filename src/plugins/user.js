import store from '../store/index.js'

export default {
    install(Vue) {
        Vue.mixin({
            computed: {
                "$user"() {
                    var user = store.getters['user/user'];
                    user.setEmail = function(userEmail) {
                        return store.dispatch('user/setEmail', userEmail)
                    }
                    return user
                }
            }
        });
    }
}

