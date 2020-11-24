/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import Vue from 'vue';
import VueRouter from "vue-router";

import Home from "./view/Home";
import Map from './view/Map';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home, name: "Home" },
    { path: '/map', component: Map, name: "Map" },
];

const router = new VueRouter({
    routes,
});

export default router;
