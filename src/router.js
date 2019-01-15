import Vue       from 'vue';
import Router    from 'vue-router';
import Home      from './screens/Home.vue';
import Login     from './screens/Login.vue';
import Register  from './screens/Register.vue';
import Menu      from './screens/Menu.vue';
import Tabs      from './screens/Tabs.vue';
import Cart      from './screens/Cart.vue';
import Checkout  from './screens/Checkout.vue';

import firebase from 'firebase';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/login' },
    { path: '/', redirect: '/login' },
    { path: '/tabs', 
        name: 'tabs',
        component: Tabs, 
        meta: { requiresAuth: true},
    },
    { path: '/home', name: 'home', component: Home, meta: { requiresAuth: true } },
    { path: '/login', name: 'login', component: Login
      // I have no idea how viable webpack chunking is in a mobile environment
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "login" */ './screens/Login.vue'),
    },
    { path: '/register', name: 'register', component: Register },
    { path: '/menu', name: 'menu', component: Menu, meta: { requiresAuth: true } },
    { path: '/cart', name: 'cart', component: Cart },
    { path: '/checkout', name: 'checkout', component: Checkout }
  ],
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (!currentUser && requiresAuth) next('login')
    // else if (currentUser && !requiresAuth) next('tabs')
    else next()
});

export default router;
