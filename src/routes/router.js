/**
 * Created by wumengchao on 2018/2/19.
 */
import Router from 'vue-router';
import Vue from 'vue';
import Geo from '../components/Geo/Geo.vue';
import Shape from '../components/Shape/Shape.vue';
import Pie from '../components/Shape/subComponent/Pie.vue';
import test from '../components/Geo/test.vue';
import line from '../components/Shape/subComponent/Line.vue';
import front from '../components/front.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'front',
            component: front
        },
        {
            path: '/geo',
            name: "Geo",
            component: Geo,
        },{
            path:'/Shape',
            name:'Shape',
            component:Shape,
        },
        {
            path: '/Shape/Pie',
            name: 'Pie',
            component: Pie,
        }, {
            path: '/Shape/test',
            name: 'test',
            component: test,
        }, {
            path: '/Shape/line',
            name: 'line',
            component: line
        }
    ]
})