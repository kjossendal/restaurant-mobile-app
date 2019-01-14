import Vue      from 'vue';
import Ionic    from '@ionic/vue';
import firebase from 'firebase';

import App from './App.vue';

import router from './router'
import store  from './store/index.js';

import Toast  from './plugins/toast';
import Theme  from './plugins/theme';
import User   from './plugins/user';

Vue.config.ignoredElements = [/^ion-/]
Vue.config.productionTip = false;

const config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

Vue.use(Ionic);
Vue.use(Toast);
Vue.use(Theme);
Vue.use(User);

let app = '';
firebase.auth().onAuthStateChanged(() => {
    if(!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app')
    }
});
