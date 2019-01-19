import Vue      from 'vue';
import Ionic    from '@ionic/vue';
// import firebase from 'firebase';

import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './router'
import store  from './store/index.js';

import LoadingSpinner  from './plugins/loadingSpinner';
import Alert           from './plugins/alert';
import Toast           from './plugins/toast';
import Auth            from './plugins/auth';
import User            from './plugins/user';
import Cart            from './plugins/cart';

library.add(faUserNinja)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.ignoredElements = [/^ion-/]
Vue.config.productionTip = false;

Vue.use(Ionic);
Vue.use(Toast);
Vue.use(User);
Vue.use(Cart);
Vue.use(LoadingSpinner);
Vue.use(Alert);
Vue.use(Auth);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
