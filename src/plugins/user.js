import { Plugins } from '@capacitor/core';
const { Storage } = Plugins

import store from '../store/index.js'

export default {
    install(Vue) {
        Vue.mixin({
            computed: {
                "$user"() {
                    var user = store.getters['user/user'];
                    user.setEmail = function(userEmail) {
                        return store.dispatch('user/setEmail', userEmail)
                    };
                    user.setUser = function(newUser) {
                        return store.dispatch('user/setUser', newUser)
                    };
                    user.setToken = function(newTokenSet) {
                        return store.dispatch('user/setToken', newTokenSet)
                    };
                    user.getToken = async function() {
                        const t = await Storage.get({key: 'token'})
                        return JSON.parse(t.value)
                        // const user = await Storage.get(obj)
                        // return store.getters['user/token'];
                    };
                    return user;
                }
            }
        });
    }
}

