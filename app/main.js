import Vue from 'vue';
import VueRouter from 'vue-router';

import app from './app.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    // mode: 'history',
    routes:[{
        path:'/login',
        component:require("./view/login/index.vue")
    },{
        path:'/qiqu',
        component:require("./view/qiqu/index.vue")
    }]
});

new Vue({
    el:'#app',
    router,
    render:h => h(app)
});


// window.router = router;