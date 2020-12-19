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
            <template v-for="d in damages">
                <l-circle
                    :key="d.id"
                    :radius="5"
                    :lat-lng="[d.latitude, d.longitude]"
                    color="red"
                />
            </template>
        </l-map>
    </div>
</template>

<script>
import Axios from '@/services/axios/axios';

import { LMap, LTileLayer, LGeoJson, LCircle } from 'vue2-leaflet';

import config from '@/services/config';

export default {
    name: "Map",
    components: {
        LMap,
        LTileLayer,
        LGeoJson,
        LCircle,
    },
    data () {
        return {
            map: {
                center: [40.655, -73.9442],
                zoom: 12,
            },
            damages: [],
        };
    },
    async mounted () {
        this.damages = (await (Axios.get('/api/damages/get'))).data;
    },
    computed: {
        MAP_URL () {
            return config.MAP_URL;
        },
        MAP_ATTRIBUTION () {
            return config.MAP_ATTRIBUTION;
        },
        neighborhoods () {
            return this.$store.getters.info.geojsons.neighborhoods;
        },
        geojsonOptions () {
            return {
                onEachFeature: onEachFeature.bind(this),
                filter,
            };

            function onEachFeature (feature, layer) {
                const popup = document.createElement('p');
                if (feature?.properties?.neighborhood) {
                    const name = document.createElement('p');
                    let toset = feature.properties.neighborhood;
                    const income = this.$store.getters.info.data.income.find(e => e.neighborhood.toLowerCase() === feature.properties.neighborhood.toLowerCase());
                    if (income) {
                        toset += '\n';
                        toset += 'Average income: $' + income.income + 'K';
                    }
                    name.innerText = toset;
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
