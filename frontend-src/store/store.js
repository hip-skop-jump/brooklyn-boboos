/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            username: "",
        },
        config: {

        },
    },
    getters: {
    },
    mutations: {
        user (state, val) {
            state.user = val;
        },
        config (state, val) {
            state.config = val;
        },
    },
    actions: {

    },
});
