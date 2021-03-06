/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import Vue from 'vue';

// Setup Vuex Store
import store from './store/store';
store.dispatch('init');

// Services
import windowTitle from "./services/windowTitle";

// Components
import App from './view/App';

// Router
import router from './router';

// Set Config
import config from './services/config';

// Import css
import 'leaflet/dist/leaflet.css';

// Set up services
windowTitle(router);

const app = new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
