/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
window.Vue = require('vue').default;

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.use(Vuex)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import '../css/app.css'
Vue.component('app', require('./components/App.vue').default);


const app = new Vue({
    router,
    el: '#app',
    store
});
