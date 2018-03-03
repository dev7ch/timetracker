// Load other dependencies
require('./bootstrap');

// Load Vue
window.Vue = require('vue');

// Vue components!
Vue.component('dashboard', require('./components/DashboardComponent.vue'));

// Create a Vue instance
const app = new Vue({el: '#app'});