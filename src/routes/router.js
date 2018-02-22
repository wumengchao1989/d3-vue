/**
 * Created by wumengchao on 2018/2/19.
 */
import Router from 'vue-router';
import Vue from 'vue';
import Geo from '../components/Geo/Geo.vue';
import Shape from '../components/Shape/Shape.vue';
import Pie from '../components/Shape/subComponent/Pie.vue';
import Histogram from '../components/Shape/subComponent/Histograms.vue';
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
            name: "geo",
            component: Geo,
        },{
            path:'/shape',
            name:'shape',
            component:Shape,
        },
        {
            path: '/shape/pie',
            name: 'pie',
            component: Pie,
        },
        {
            path: '/shape/histogram',
            name: 'pie',
            component: Histogram,
        }, {
            path: '/shape/test',
            name: 'test',
            component: test,
        }, {
            path: '/shape/line',
            name: 'line',
            component: line
        }
    ]
})