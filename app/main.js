import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTouch from 'vue-touch';
import app from './app.vue';

Vue.use(VueTouch,{name : 'v-touch'});
Vue.use(VueRouter);


const router = new VueRouter({
    routes: [{
       path: '/login',
       component: require("./view/login/index.vue")
    }, {
       path: '/qiqu',
       component: require("./view/qiqu/index.vue"),
       //如果主路由携带children路由那么主路由的页面一定有一个router-view容器
       children: [{
          path: '/qiqu/jingxuan',
          name: "精选",
          component: require("./view/qiqu/jingxuan/index.vue")
       }, {
          path: '/qiqu/shipin',
          name: "视频",
          component: require("./view/qiqu/shipin/index.vue")
       }, {
          path: '/qiqu/duanzi',
          name: "段子",
          component: require("./view/qiqu/duanzi/index.vue")
       }, {
          path: '/qiqu/faxian',
          name: "发现",
          component: require("./view/qiqu/faxian/index.vue")
       }]
    }, {
       path: '*',
       redirect: '/login'
    }]
 });

new Vue({
    el:'#app',
    router,
    render:h => h(app)
});


window.router = router;