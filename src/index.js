import Vue from 'vue';
import router from './routes/router';
import App from './components/App.vue';
new Vue({
    el:'#app',
    router,
    components:{App},
    template:"<App/>"
});
