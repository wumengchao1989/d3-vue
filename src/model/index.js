import Vuex from 'vuex';
import Vue from 'vue';
import geo_M from './Geo/Geo_M';
import pie_M from './Shape/Pie_M';
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        geo_M,
        pie_M,
    }
})