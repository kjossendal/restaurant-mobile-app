// import VuexPersistence from 'vuex-persist'
// will persistence be of any use?
import Vuex            from 'vuex'
import Vue             from 'vue'

import User from './user.js';
import Cart from './cart.js';

Vue.use(Vuex);
export default (new Vuex.Store({
//    plugins: [
        //SessionReactive,
        //new VuexPersistence({
            //storage: window.localStorage,
            //modules: [
                //'user',
            //]
        //}).plugin
    //],
    modules: {
        user: User,
        cart: Cart
    }
}));
