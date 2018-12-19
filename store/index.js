/**
 * Vuex Store
 *
 * The {@link http://vuex.vuejs.org/en/index.html | store } of the application.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import tweet from './modules/tweet';

Vue.use(Vuex);


export default new Vuex.Store({
    /**
     * Assign the modules to the store.
     */
    modules: {
        tweet,
    },

    /**
     * If strict mode should be enabled.
     */
    strict: true,
});
