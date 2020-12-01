import Axios from "axios";

import { Damage } from "../db";

export default async function loadData () {
    const res = await Axios.get("https://data.cityofnewyork.us/resource/fed5-ydvq.json");
    return res.data.map(async p => {
        if (await Damage.findOne({
            where: {
                uniqueKey: p.unique_key,
                dataSource: Damage.consts.source.ny311OpenData,
            },
        })) {
            return;
        }

        return Damage.create({
            longitude: p.longitude,
            latitude: p.latitude,
            timeReported: p.created_date,
            dataSource: Damage.consts.source.ny311OpenData,
            uniqueKey: p.unique_key,
            type: Damage.consts.type.street_condition,
        }).catch(e => {
            console.error("Could not save data from ny113opendata", e);
        });
    });
}
