/**
 * Will initialize the application.
 */

import Vue from 'vue';

/**
 * Import and bootstrap the plugins.
 */

// import router from './router';
import store from './store';

/**
 * Main App.
 *
 * Last but not least, we import the main application.
 */

import App from './pages/App.vue';

/* eslint-disable no-new */
new Vue({
    // router,
    store,
    el: '#app',
    template: '<App/>',
    components: { App },
});
