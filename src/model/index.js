import Vuex from 'vuex';
import Vue from 'vue';
import geo_M from './Geo/Geo_M';
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        geo_M
    }
})