import cron from 'node-cron';

import config from "../config";

import nyc311opendata from "./nyc311opendata";

export default function initCron () {
    if (!config.features.cronDataImport) {
        return;
    }
    cron.schedule('0 16 * * *', nyc311opendata);
}
