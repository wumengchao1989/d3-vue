import Vue from 'vue';
import router from './routes/router';
import App from './components/App.vue';
import store from './model/index';
new Vue({
    el:'#app',
    router,
    store,
    components:{App},
    template:"<App/>"
});
