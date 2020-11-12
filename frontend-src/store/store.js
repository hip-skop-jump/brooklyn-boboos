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
            uuid: Cookie.get("uuid") || "",
        },
        config: {

        },
    },
    getters: {
        userCreated (state) {
            return !!state.user.uuid;
        },
    },
    mutations: {
        user (state, val) {
            Cookie.set("uuid", val.uuid);
            state.user = val;
        },
        config (state, val) {
            state.config = val;
        },
    },
    actions: {

    },
});
