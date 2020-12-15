/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

const env = process.env;

export default {
    database: {
        connection: env.DATABASE_CONNECTION || 'sqlite:database.db',
    },
    server: {
        port: env.PORT || 3000,
    },
    authentication: {
        adminKey: env.ADMIN_KEY || "admin_key",
    },
    features: {
        cronDataImport: env.CRON_DATA_IMPORT || env.CRON_DATA_IMPORT === "true",
    },
    frontend: {
        MAP_URL: env.FRONTEND_MAP_URL || "https://api.mapbox.com/styles/v1/mapbox/dark-v8/tiles/256/{z}/{x}/{y}",
        MAP_ATTRIBUTION: env.FRONTEND_MAP_ATTRIBUTIONS || `© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`,
    },
};
