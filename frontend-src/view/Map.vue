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
            <l-geo-json
                v-if="neighborhoods"
                :geojson="neighborhoods.data"
                :attribution="neighborhoods.attribution"
                :options="geojsonOptions"
            />
        </l-map>
    </div>
</template>

<script>
import { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet';

export default {
    name: "Map",
    components: {
        LMap,
        LTileLayer,
        LGeoJson,
    },
    data () {
        return {
            map: {
                center: [40.655, -73.9442],
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
        neighborhoods () {
            return this.$store.getters.info.geojsons.neighborhoods;
        },
        geojsonOptions () {
            return {
                onEachFeature,
                filter,
            };

            function onEachFeature (feature, layer) {
                const popup = document.createElement('p');
                if (feature?.properties?.neighborhood) {
                    const name = document.createElement('p');
                    name.innerText = feature.properties.neighborhood;
                    popup.appendChild(name);
                }
                layer.bindPopup(popup);
            }

            function filter (feature) {
                return feature?.properties?.borough === 'Brooklyn';
            }
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
