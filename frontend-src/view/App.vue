<!--
 - Copyright © 2020 Hip Skop Jump, All Rights Reserved
 -->

<template>
    <div id="app">
        <div id="content-view">
            <router-view />
        </div>
        <div id="menu">
            <router-link to="/map">Map</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style scoped lang="less">
#app {
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
}
#content-view {
    height: calc(100vh - 50px);
    width: 100%;
}
#menu {
    height: 50px;
    width: 100%;
}
</style>
