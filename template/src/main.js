import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pv from './mixins/pv'
Vue.config.productionTip = false
Vue.mixin(pv)
new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
