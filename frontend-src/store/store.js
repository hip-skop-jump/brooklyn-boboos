/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import Vue from 'vue';
import Vuex from 'vuex';

import Axios from '@/services/axios/axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            username: "",
        },
        config: {

        },
        info: {
            geojsons: {
                neighborhoods: {
                    data: {},
                    attribution: "",
                },
                zipcodes: {
                    data: {},
                    attribution: "",
                },
            },
        },
    },
    getters: {
        info (state) {
            return state.info;
        },
    },
    mutations: {
        user (state, val) {
            state.user = val;
        },
        config (state, val) {
            state.config = val;
        },
        setNeighborhoods (state, val) {
            state.info.geojsons.neighborhoods = val;
        },
        setZipcodes (state, val) {
            state.info.geojsons.zipcodes = val;
        },
    },
    actions: {
        async init (ctx) {
            Axios.get('https://data.beta.nyc/dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson').then(result => {
                if (result.status === 200) {
                    ctx.commit('setNeighborhoods', {
                        data: result.data,
                        attribution: "BETA NYC",
                    });
                }
            });
            Axios.get(`https://jsspina.carto.com/api/v2/sql?filename=nyc_zip_code_tabulation_areas_polygons&q=select+*+from+public.nyc_zip_code_tabulation_areas_polygons+where+borough+=+%27Brooklyn%27&format=geojson&bounds=&api_key=`).then(result => {
                if (result.status === 200) {
                    ctx.commit('setZipcodes', {
                        data: result.data,
                        attribution: "Carto",
                    });
                }
            });
        },
    },
});
