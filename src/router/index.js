import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Intro from '../views/Intro.vue';
import Gallery from '../views/Gallery.vue';
import Contest from '../views/Contest.vue';
Vue.use(VueRouter);

import InlineSvg from 'vue-inline-svg';
Vue.component('inline-svg', InlineSvg);

const routes = [
    {
        path: '/',
        name: 'Intro',
        component: Intro,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
    },
    {
        path: '/contest',
        name: 'Contest',
        component: Contest,
    },
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: function (to) {
        if (to.hash) {
            return { selector: to.hash };
            //Or for Vue 3:
            //return {el: to.hash}
        } else {
            return { x: 0, y: 0 };
        }
    },
    base: process.env.BASE_URL,
    routes,
});

export default router;
