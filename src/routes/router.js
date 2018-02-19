/**
 * Created by wumengchao on 2018/2/19.
 */
import Router from 'vue-router';
import Vue from 'vue';
import Geo from '../components/Geo.vue';
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/geo',
            name:"Geo",
            component:Geo,
        },
    ]
})