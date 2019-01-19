import auth from '@/libraries/auth.js';

export default {
    install(Vue) {
        Vue.prototype.$auth = auth;
    }
}
