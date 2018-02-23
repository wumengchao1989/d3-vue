/**
 * Created by wumengchao on 2018/2/19.
 */
import Router from 'vue-router';
import Vue from 'vue';
import Geo from '../components/Geo/Geo.vue';
import Shape from '../components/Shape/Shape.vue';
import Pie from '../components/Shape/subComponent/Pie.vue';
import Histogram from '../components/Shape/subComponent/Histograms.vue';
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
            path: '/Shape/line',
            name: 'line',
            component: line
        },{
        path:'/Shape/histogram',
            name:"histogram",
            component:Histogram
        }
    ]
})