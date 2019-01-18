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

// const config = {
//     apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//     authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
// };

// firebase.initializeApp(config);

Vue.use(Ionic);
Vue.use(Toast);
Vue.use(User);
Vue.use(Cart);
Vue.use(LoadingSpinner);
Vue.use(Alert);
Vue.use(Auth);

// let app = '';
// firebase.auth().onAuthStateChanged(() => {
//     if(!app) {
        new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app')
//     }
// });
