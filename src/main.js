// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')



import Vue from './core/vue'

window.vm = new Vue({
	el: '#app',
	data: {
		msg: 'hello world'
	}
})