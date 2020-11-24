<template>
    <div class="page-root">
        <l-map
            ref="main"
            class="main"
            :center="map.center"
            :zoom="map.zoom"
        >
            <l-tile-layer
                :url="MAP_URL"
                :attribution="MAP_ATTRIBUTION"
            />
        </l-map>
    </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name: "Map",
    components: {
        LMap,
        LTileLayer,
    },
    data () {
        return {
            map: {
                center: [40.6282, -73.9442],
                zoom: 12,
            },
        };
    },
    computed: {
        MAP_URL () {
            return MAP_URL;
        },
        MAP_ATTRIBUTION () {
            return MAP_ATTRIBUTION;
        },
    },
};
</script>

<style scoped lang="less">
.page-root {
    height: 100%;
    width: 100%;
}
</style>
