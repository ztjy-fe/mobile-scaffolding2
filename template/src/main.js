import Vue from 'vue'
import App from './App.vue'
import router from './router'
import pv from './mixins/pv'
Vue.config.productionTip = false
Vue.mixin(pv)
new Vue({
	render: h => h(App),
	router
}).$mount('#app')
